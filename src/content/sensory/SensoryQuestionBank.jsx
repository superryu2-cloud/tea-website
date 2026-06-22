/* eslint-disable react-hooks/set-state-in-effect -- Quiz interaction state resets when filters, cards, and timers change; this will move into a reducer when the file is split. */
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import AccordionPanel from '../../components/AccordionPanel';
import ResizableDivider from '../../components/ResizableDivider';
import ModeTabMenu from '../../components/ModeTabMenu';
import CciraEssayCards from './CciraEssayCards';
import FlashcardMode from './questionBank/FlashcardMode';
import ListQuestionCard from './questionBank/ListQuestionCard';
import QuestionBankSidebar from './questionBank/QuestionBankSidebar';
import QuickMode from './questionBank/QuickMode';
import {
  BANK_PRESETS,
  DEFAULT_CHALLENGE_SIZE,
  DEFAULT_CHALLENGE_TIME,
  REVEAL_KEY,
  SIDEBAR_WIDTH_KEY,
  STORAGE_KEY,
} from './questionBank/constants';
import { buildBankTree, safeJsonParse, shuffleCards } from './questionBank/utils';

export default function SensoryQuestionBank({ questions, activeTopic, onSelectTopic, topOffsetPx = 0 }) {
  const [introMode, setIntroMode] = useState(true);
  const [activeMode, setActiveMode] = useState('list'); // 'list' | 'quick' | 'custom' | 'cards'
  const [query, setQuery] = useState('');
  const [activeBank, setActiveBank] = useState(null);
  const [expandedBankKeys, setExpandedBankKeys] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(activeTopic ?? null);
  const [cardIndex, setCardIndex] = useState(0);
  const [cardFlipped, setCardFlipped] = useState(false);
  const [cardSeed, setCardSeed] = useState(0);
  const [quickSeed, setQuickSeed] = useState(0);
  const [quickAnswerIndex, setQuickAnswerIndex] = useState(null);
  const [quickReveal, setQuickReveal] = useState(false);
  const [quickSoundOn, setQuickSoundOn] = useState(true);
  const [challengeOn, setChallengeOn] = useState(false);
  const [challengeIndex, setChallengeIndex] = useState(0);
  const [challengeScore, setChallengeScore] = useState(0);
  const [challengeTimeLeft, setChallengeTimeLeft] = useState(15);
  const [challengeTotalSeconds, setChallengeTotalSeconds] = useState(0);
  const [challengeFinished, setChallengeFinished] = useState(false);
  const [challengeSelected, setChallengeSelected] = useState(null);
  const [customSelectedBanks, setCustomSelectedBanks] = useState([]);
  const [customSelectedTopics, setCustomSelectedTopics] = useState({});
  const [customCount, setCustomCount] = useState(40);
  const [customSession, setCustomSession] = useState(null);
  const [customIndex, setCustomIndex] = useState(0);
  const [customAnswers, setCustomAnswers] = useState({});
  const [customFinished, setCustomFinished] = useState(false);
  const [customReviewOpen, setCustomReviewOpen] = useState(false);
  const customQuizRef = useRef(null);
  const flipAudioRef = useRef(null);
  const sidebarScrollRef = useRef(null);
  const challengeAdvanceTimeoutRef = useRef(null);
  const [revealAnswers, setRevealAnswers] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.localStorage?.getItem(REVEAL_KEY) === '1';
  });
  const [answersById, setAnswersById] = useState(() => {
    if (typeof window === 'undefined') return {};
    const parsed = safeJsonParse(window.localStorage?.getItem(STORAGE_KEY) ?? '');
    return parsed && typeof parsed === 'object' ? parsed : {};
  });
  const [sidebarWidth, setSidebarWidth] = useState(() => {
    if (typeof window === 'undefined') return 420;
    const raw = window.localStorage?.getItem(SIDEBAR_WIDTH_KEY);
    const parsed = raw ? Number(raw) : NaN;
    if (!Number.isFinite(parsed)) return 420;
    return Math.min(Math.max(parsed, 260), 520);
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage?.setItem(STORAGE_KEY, JSON.stringify(answersById));
    } catch {
      // ignore
    }
  }, [answersById]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage?.setItem(REVEAL_KEY, revealAnswers ? '1' : '0');
    } catch {
      // ignore
    }
  }, [revealAnswers]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage?.setItem(SIDEBAR_WIDTH_KEY, String(sidebarWidth));
    } catch {
      // ignore
    }
  }, [sidebarWidth]);

  const clearChallengeAdvanceTimeout = useCallback(() => {
    if (challengeAdvanceTimeoutRef.current == null) return;
    clearTimeout(challengeAdvanceTimeoutRef.current);
    challengeAdvanceTimeoutRef.current = null;
  }, []);

  useEffect(() => () => {
    clearChallengeAdvanceTimeout();
  }, [clearChallengeAdvanceTimeout]);

  useEffect(() => {
    setSelectedTopic(activeTopic ?? null);
    if (activeTopic) setIntroMode(false);
  }, [activeTopic]);

  const ensureExpanded = (key) => {
    if (!key) return;
    setExpandedBankKeys((prev) => (prev.includes(key) ? prev : [...prev, key]));
  };

  useEffect(() => {
    if (!selectedTopic) return;
    const list = questions ?? [];
    const match = list.find((q) => q && typeof q === 'object' && q.topic === selectedTopic);
    const bankKey = typeof match?.bank === 'string' ? match.bank.trim() : '';
    if (!bankKey) {
      if (activeBank) ensureExpanded(activeBank);
      return;
    }
    if (activeBank !== bankKey) setActiveBank(bankKey);
    ensureExpanded(bankKey);
  }, [selectedTopic, questions, activeBank]);

  const normalizedQuery = query.trim().toLowerCase();
  const showIntro = introMode && !selectedTopic && !activeBank && !normalizedQuery;

  const questionsInBank = useMemo(() => {
    const list = questions ?? [];
    if (!activeBank) return list;
    return list.filter((q) => q && typeof q === 'object' && q.bank === activeBank);
  }, [questions, activeBank]);

  const bankTree = useMemo(() => buildBankTree(questions, BANK_PRESETS), [questions]);

  const customBanks = useMemo(() => bankTree.filter((node) => node.stateKey !== 'all'), [bankTree]);

  const customPool = useMemo(() => {
    const list = questions ?? [];
    if (!customSelectedBanks.length) return list;
    const selected = new Set(customSelectedBanks);
    const hasTopicFilter = Object.keys(customSelectedTopics).length > 0;
    return list.filter((q) => {
      if (!q || typeof q !== 'object') return false;
      if (!selected.has(q.bank)) return false;
      if (!hasTopicFilter) return true;
      const topics = customSelectedTopics[q.bank];
      if (!Array.isArray(topics) || topics.length === 0) return true;
      return topics.includes(q.topic);
    });
  }, [questions, customSelectedBanks, customSelectedTopics]);

  const customSelectedLabels = useMemo(() => {
    if (!customSelectedBanks.length) return ['全部題庫'];
    const lookup = new Map(customBanks.map((bank) => [bank.key, bank.label]));
    return customSelectedBanks.map((key) => lookup.get(key) ?? key);
  }, [customBanks, customSelectedBanks]);

  const filteredQuestions = useMemo(() => {
    const list = questionsInBank ?? [];
    return list.filter((q) => {
      if (!q) return false;
      if (selectedTopic && q.topic !== selectedTopic) return false;
      if (!normalizedQuery) return true;
      const hay = `${q.topicLabel ?? ''} ${q.stem ?? ''} ${(q.choices ?? []).join(' ')}`.toLowerCase();
      return hay.includes(normalizedQuery);
    });
  }, [questionsInBank, selectedTopic, normalizedQuery]);

  const quickQuestion = useMemo(() => {
    if (!filteredQuestions.length) return null;
    const poolSize = filteredQuestions.length;
    const seed = Math.abs(quickSeed) + 1;
    const index = (seed * 9301 + 49297) % 233280;
    return filteredQuestions[index % poolSize];
  }, [filteredQuestions, quickSeed]);

  const quickQuestionId = quickQuestion?.id ?? null;
  useEffect(() => {
    setQuickAnswerIndex(null);
    setQuickReveal(false);
  }, [quickQuestionId]);

  const pruneCustomTopics = (selectedBanks, prevTopics) => {
    const nextTopics = {};
    const allowed = new Set(selectedBanks);
    Object.entries(prevTopics ?? {}).forEach(([bankKey, topics]) => {
      if (!allowed.has(bankKey)) return;
      if (!Array.isArray(topics) || topics.length === 0) return;
      nextTopics[bankKey] = topics;
    });
    return nextTopics;
  };

  const toggleCustomBank = (bankKey) => {
    if (typeof bankKey !== 'string') return;
    setCustomSelectedBanks((prev) => {
      const next = prev.includes(bankKey) ? prev.filter((item) => item !== bankKey) : [...prev, bankKey];
      setCustomSelectedTopics((prevTopics) => pruneCustomTopics(next, prevTopics));
      return next;
    });
  };

  const toggleCustomTopic = (bankKey, topicKey) => {
    if (typeof bankKey !== 'string' || typeof topicKey !== 'string') return;
    setCustomSelectedTopics((prev) => {
      const current = new Set(prev?.[bankKey] ?? []);
      if (current.has(topicKey)) {
        current.delete(topicKey);
      } else {
        current.add(topicKey);
      }
      const next = { ...prev };
      if (current.size === 0) {
        delete next[bankKey];
      } else {
        next[bankKey] = Array.from(current);
      }
      return next;
    });
    setCustomSelectedBanks((prev) => (prev.includes(bankKey) ? prev : [...prev, bankKey]));
  };

  const startCustomSession = () => {
    const pool = customPool ?? [];
    const available = pool.length;
    const desired = Number.isFinite(customCount) ? Math.max(1, Math.round(customCount)) : 1;
    const size = Math.min(desired, available);
    const questionsForSession = size > 0 ? shuffleCards(pool, Date.now()).slice(0, size) : [];
    setCustomSession({
      questions: questionsForSession,
      available,
      size,
      banks: customSelectedBanks,
    });
    setCustomIndex(0);
    setCustomAnswers({});
    setCustomFinished(false);
    setCustomReviewOpen(false);
  };

  const cardQuestions = useMemo(() => {
    if (activeMode !== 'cards') return [];
    if (!filteredQuestions.length) return [];
    return shuffleCards(filteredQuestions, cardSeed);
  }, [filteredQuestions, activeMode, cardSeed]);

  useEffect(() => {
    if (activeMode !== 'cards') return;
    setCardIndex(0);
    setCardFlipped(false);
  }, [activeMode, selectedTopic, activeBank, normalizedQuery, cardSeed]);

  useEffect(() => {
    if (!challengeOn) return;
    clearChallengeAdvanceTimeout();
    setChallengeIndex(0);
    setChallengeScore(0);
    setChallengeFinished(false);
    setChallengeSelected(null);
    setChallengeTimeLeft(DEFAULT_CHALLENGE_TIME);
    setChallengeTotalSeconds(0);
  }, [challengeOn, selectedTopic, activeBank, normalizedQuery, clearChallengeAdvanceTimeout]);

  useEffect(() => {
    if (activeMode !== 'cards') return;
    if (cardIndex >= cardQuestions.length) {
      setCardIndex(0);
    }
  }, [cardIndex, cardQuestions.length, activeMode]);

  const challengeQuestions = useMemo(() => {
    if (!challengeOn) return [];
    if (!filteredQuestions.length) return [];
    return filteredQuestions.slice(0, Math.min(DEFAULT_CHALLENGE_SIZE, filteredQuestions.length));
  }, [challengeOn, filteredQuestions]);

  const customQuestions = customSession?.questions ?? [];
  const customActiveQuestion = customQuestions[customIndex] ?? null;
  const customScorableQuestions = customQuestions.filter((q) => Number.isInteger(q?.answerIndex));
  const customAnsweredCount = Object.keys(customAnswers).length;
  const customUnansweredCount = customQuestions.filter((q) => customAnswers[q.id] == null).length;
  const customCorrectCount = customScorableQuestions.filter(
    (q) => customAnswers[q.id] != null && customAnswers[q.id] === q.answerIndex,
  ).length;
  const customWrongQuestions = customScorableQuestions.filter(
    (q) => customAnswers[q.id] != null && customAnswers[q.id] !== q.answerIndex,
  );

  const activeChallengeQuestion = challengeQuestions[challengeIndex] ?? null;
  const activeChallengeAnswerIndex = Number.isInteger(activeChallengeQuestion?.answerIndex)
    ? activeChallengeQuestion.answerIndex
    : null;

  useEffect(() => {
    if (!challengeOn) return;
    if (challengeFinished) return;
    if (!activeChallengeQuestion) return;
    setChallengeTimeLeft(DEFAULT_CHALLENGE_TIME);
    setChallengeSelected(null);
  }, [challengeOn, challengeIndex, challengeFinished, activeChallengeQuestion]);

  useEffect(() => {
    if (!challengeOn) return undefined;
    if (challengeFinished) return undefined;
    if (!activeChallengeQuestion) return undefined;
    let ticking = true;
    const timer = setInterval(() => {
      if (!ticking) return;
      setChallengeTimeLeft((prev) => {
        if (prev <= 1) return 0;
        return prev - 1;
      });
      setChallengeTotalSeconds((prev) => prev + 1);
    }, 1000);
    return () => {
      ticking = false;
      clearInterval(timer);
    };
  }, [challengeOn, challengeFinished, activeChallengeQuestion]);

  useEffect(() => {
    if (!challengeOn) return;
    if (challengeFinished) return;
    if (!activeChallengeQuestion) return;
    if (challengeSelected != null) return;
    if (challengeTimeLeft > 0) return;
    const nextIndex = challengeIndex + 1;
    if (nextIndex >= challengeQuestions.length) {
      setChallengeFinished(true);
      return;
    }
    setChallengeIndex(nextIndex);
  }, [challengeTimeLeft, challengeOn, challengeFinished, activeChallengeQuestion, challengeSelected, challengeIndex, challengeQuestions.length]);

  const resolvedTopOffsetPx = Number.isFinite(topOffsetPx) ? Math.max(0, Math.round(topOffsetPx)) : 0;
  const sidebarTopPx = resolvedTopOffsetPx + 12;

  const playFlipSound = () => {
    if (!quickSoundOn) return;
    if (typeof window === 'undefined') return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    try {
      if (!flipAudioRef.current) {
        flipAudioRef.current = new AudioContext();
      }
      const ctx = flipAudioRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(420, ctx.currentTime);
      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.09);
    } catch {
      // ignore audio failures
    }
  };

  const preserveSidebarScroll = (action) => {
    const container = sidebarScrollRef.current;
    const top = container ? container.scrollTop : 0;
    action();
    if (!container) return;
    requestAnimationFrame(() => {
      container.scrollTop = top;
    });
    setTimeout(() => {
      container.scrollTop = top;
    }, 360);
  };

  const handleSidebarResize = (newWidth) => {
    const clamped = Math.min(Math.max(newWidth, 260), 520);
    setSidebarWidth(clamped);
  };

  const handleSidebarQueryChange = (next) => {
    setQuery(next);
    if (introMode && next.trim().length > 0) setIntroMode(false);
  };

  const handleSidebarToggleBankNode = (stateKey) => {
    preserveSidebarScroll(() => {
      setIntroMode(false);
      setActiveBank(stateKey === 'all' ? null : stateKey);
      setQuery('');
      onSelectTopic?.(null);
      setSelectedTopic(null);
      setExpandedBankKeys((prev) =>
        prev.includes(stateKey) ? prev.filter((key) => key !== stateKey) : [...prev, stateKey],
      );
    });
  };

  const handleSidebarSelectBankQuestions = (stateKey) => {
    preserveSidebarScroll(() => {
      setIntroMode(false);
      const nextBankKey = stateKey === 'all' ? null : stateKey;
      setActiveBank(nextBankKey);
      if (nextBankKey) ensureExpanded(nextBankKey);
      setQuery('');
      setSelectedTopic(null);
      onSelectTopic?.(null);
      if (activeMode === 'essay') setActiveMode('list');
    });
  };

  const handleSidebarSelectTopic = (stateKey, topic) => {
    preserveSidebarScroll(() => {
      setIntroMode(false);
      const nextBankKey = stateKey === 'all' ? null : stateKey;
      setActiveBank(nextBankKey);
      if (nextBankKey) ensureExpanded(nextBankKey);
      setQuery('');
      setSelectedTopic(topic.topic);
      onSelectTopic?.(topic.topic);
      if (activeMode === 'essay') setActiveMode('list');
    });
  };

  const handleSidebarSelectEssay = (stateKey) => {
    preserveSidebarScroll(() => {
      setIntroMode(false);
      const nextBankKey = stateKey === 'all' ? null : stateKey;
      setActiveBank(nextBankKey);
      if (nextBankKey) ensureExpanded(nextBankKey);
      setQuery('');
      setSelectedTopic(null);
      onSelectTopic?.(null);
      setActiveMode('essay');
    });
  };

  const handleListQuestionAnswer = (questionId, choiceIndex) => {
    setAnswersById((prev) => ({ ...prev, [questionId]: choiceIndex }));
  };

  const handleQuickNextQuestion = () => {
    setQuickSeed((prev) => prev + 1);
    setQuickAnswerIndex(null);
    setQuickReveal(false);
  };

  const handleQuickRevealToggle = () => {
    setQuickReveal((prev) => !prev);
    playFlipSound();
  };

  const handleQuickChallengeToggle = () => {
    setChallengeOn((prev) => !prev);
    setCardFlipped(false);
  };

  const handleChallengeExit = () => {
    setChallengeOn(false);
    setChallengeFinished(false);
  };

  const handleChallengeRestart = () => {
    setChallengeOn(true);
    setChallengeIndex(0);
    setChallengeScore(0);
    setChallengeFinished(false);
  };

  const handleChallengeAnswer = (choiceIndex) => {
    if (challengeFinished) return;
    if (challengeSelected != null) return;
    setChallengeSelected(choiceIndex);
    if (activeChallengeAnswerIndex != null && choiceIndex === activeChallengeAnswerIndex) {
      setChallengeScore((prev) => prev + 1);
    }
    clearChallengeAdvanceTimeout();
    challengeAdvanceTimeoutRef.current = setTimeout(() => {
      challengeAdvanceTimeoutRef.current = null;
      const nextIndex = challengeIndex + 1;
      if (nextIndex >= challengeQuestions.length) {
        setChallengeFinished(true);
        return;
      }
      setChallengeIndex(nextIndex);
    }, 500);
  };

  return (
    <div
      className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-0"
      style={{ '--sensory-sidebar-width': `${sidebarWidth}px` }}
    >
      <aside
        className="lg:sticky sensory-sidebar w-full lg:w-auto"
        style={{ '--sidebar-top': `${sidebarTopPx}px`, top: 'var(--sidebar-top)' }}
      >
        <QuestionBankSidebar
          sidebarScrollRef={sidebarScrollRef}
          query={query}
          onQueryChange={handleSidebarQueryChange}
          revealAnswers={revealAnswers}
          onToggleRevealAnswers={() => setRevealAnswers((prev) => !prev)}
          onClearAnswers={() => setAnswersById({})}
          bankTree={bankTree}
          expandedBankKeys={expandedBankKeys}
          activeBank={activeBank}
          selectedTopic={selectedTopic}
          activeMode={activeMode}
          onToggleBankNode={handleSidebarToggleBankNode}
          onSelectBankQuestions={handleSidebarSelectBankQuestions}
          onSelectTopic={handleSidebarSelectTopic}
          onSelectEssay={handleSidebarSelectEssay}
        />
      </aside>

      <ResizableDivider
        onResize={handleSidebarResize}
        minWidth={260}
        maxWidth={520}
        className="hidden lg:flex"
      />

      <main className="min-w-0 w-full lg:pl-8">
        {/* Mode Selection Menu */}
        <div className="museum-frame museum-paper p-4 mb-4">
          <ModeTabMenu
            activeMode={activeMode}
            onModeChange={setActiveMode}
          />
        </div>

        <div className="w-full space-y-4">
          {activeMode === 'essay' && (
            <CciraEssayCards />
          )}

          <QuickMode
            isActive={activeMode === 'quick'}
            quickQuestion={quickQuestion}
            quickAnswerIndex={quickAnswerIndex}
            quickReveal={quickReveal}
            quickSoundOn={quickSoundOn}
            challengeOn={challengeOn}
            challengeQuestions={challengeQuestions}
            challengeFinished={challengeFinished}
            challengeScore={challengeScore}
            challengeTotalSeconds={challengeTotalSeconds}
            challengeIndex={challengeIndex}
            challengeTimeLeft={challengeTimeLeft}
            challengeTimeLimit={DEFAULT_CHALLENGE_TIME}
            activeChallengeQuestion={activeChallengeQuestion}
            activeChallengeAnswerIndex={activeChallengeAnswerIndex}
            challengeSelected={challengeSelected}
            onNextQuestion={handleQuickNextQuestion}
            onToggleSound={() => setQuickSoundOn((prev) => !prev)}
            onToggleReveal={handleQuickRevealToggle}
            onToggleChallenge={handleQuickChallengeToggle}
            onExitChallenge={handleChallengeExit}
            onRestartChallenge={handleChallengeRestart}
            onSelectQuickAnswer={setQuickAnswerIndex}
            onSelectChallengeAnswer={handleChallengeAnswer}
          />

          {activeMode === 'custom' && (
            <div className="museum-frame museum-paper relative p-6 md:p-7 space-y-5 border-2 border-amber-300/90 bg-amber-50/60">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="text-xs font-extrabold tracking-widest text-stone-500">CUSTOM QUIZ</div>
                    <span className="rounded-full bg-amber-600 px-2.5 py-0.5 text-[11px] font-extrabold tracking-widest text-white shadow-md">
                      自訂卡
                    </span>
                  </div>
                  <div className="mt-2 text-lg font-extrabold text-stone-900">自訂測驗</div>
                  <div className="mt-2 h-1.5 w-12 rounded-full bg-amber-500/80" />
                  <div className="mt-1 text-sm font-semibold text-stone-600">從全部題庫挑選範圍與題數，建立專屬考題。</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      startCustomSession();
                      setTimeout(() => {
                        if (!customQuizRef.current) return;
                        const offset = 120;
                        const top = customQuizRef.current.getBoundingClientRect().top + window.scrollY - offset;
                        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
                      }, 0);
                    }}
                    className="rounded-full border border-amber-300 bg-amber-100 px-4 py-2 text-sm font-bold text-amber-950 hover:bg-amber-200"
                  >
                    開始測驗
                  </button>
                  <button
                    type="button"
	                    onClick={() => {
	                      setCustomSelectedBanks([]);
	                      setCustomSelectedTopics({});
	                      setCustomCount(40);
	                      setCustomSession(null);
	                      setCustomAnswers({});
                      setCustomFinished(false);
                      setCustomReviewOpen(false);
                      setCustomIndex(0);
                    }}
                    className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-bold text-stone-700 hover:bg-stone-50"
                  >
                    清空設定
                  </button>
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-4">
                  <div className="rounded-2xl border border-stone-200 bg-white/70 p-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="text-sm font-bold text-stone-900">題數設定</div>
                      <div className="flex flex-wrap items-center gap-2">
                        {[10, 20, 40, 50].map((size) => (
                          <button
                            key={`custom-size-${size}`}
                            type="button"
                            onClick={() => setCustomCount(size)}
                            className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors ${customCount === size
                              ? 'border-amber-300 bg-amber-50 text-amber-950'
                              : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                              }`}
                          >
                            {size} 題
                          </button>
                        ))}
                        <div className="flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-2">
                          <span className="text-sm font-semibold text-stone-600">自訂</span>
                          <input
                            type="number"
                            min={1}
                            max={200}
                            value={customCount}
                            onChange={(event) => {
                              const next = Number(event.target.value);
                              if (Number.isNaN(next)) return;
                              setCustomCount(Math.max(1, Math.min(200, next)));
                            }}
                            className="w-20 border-none bg-transparent text-sm font-bold text-stone-900 focus:outline-none"
                          />
                          <span className="text-sm font-semibold text-stone-600">題</span>
                        </div>
                      </div>
                      <div className="text-xs text-stone-500 lg:ml-auto">
                        目前可用題數：{customPool.length} 題
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-stone-200 bg-white/70 p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="text-sm font-bold text-stone-900">範圍選擇</div>
                      <div className="text-xs font-semibold text-stone-500">
                        已選 {customSelectedBanks.length || '全部'} 區
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          const next = customBanks.map((bank) => bank.key);
                          setCustomSelectedBanks(next);
                          setCustomSelectedTopics((prevTopics) => pruneCustomTopics(next, prevTopics));
                        }}
                        className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-semibold text-stone-700 hover:bg-stone-50"
                      >
                        全選
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setCustomSelectedBanks([]);
                          setCustomSelectedTopics({});
                        }}
                        className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-semibold text-stone-700 hover:bg-stone-50"
                      >
                        全不選
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setCustomSelectedBanks((prev) => {
                            const current = new Set(prev);
                            const next = [];
                            customBanks.forEach((bank) => {
                              if (!current.has(bank.key)) next.push(bank.key);
                            });
                            setCustomSelectedTopics((prevTopics) => pruneCustomTopics(next, prevTopics));
                            return next;
                          })
                        }
                        className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-semibold text-stone-700 hover:bg-stone-50"
                      >
                        反選
                      </button>
                    </div>
                    <details className="mt-3 rounded-xl border border-stone-200 bg-white/60">
                      <summary className="flex cursor-pointer items-center justify-between px-3 py-2 text-xs font-semibold text-stone-700">
                        <span>各區清單</span>
                        <span className="text-[11px] text-stone-400">點擊展開／收合</span>
                      </summary>
                      <div className="max-h-64 space-y-2 overflow-y-auto border-t border-stone-200 px-3 py-3 pr-2">
                        {customBanks.length ? (
                          customBanks.map((bank) => {
                            const isSelected = customSelectedBanks.includes(bank.key);
                            const selectedTopics = customSelectedTopics[bank.key] ?? [];
                            const bankRowClasses = `flex items-center justify-between gap-3 rounded-xl border px-3 py-2 text-sm font-semibold transition ${isSelected
                              ? 'border-emerald-300 bg-emerald-50/70 text-emerald-950'
                              : 'border-stone-200 bg-white/80 text-stone-800'
                              }`;
                            return (
                              <div key={`custom-bank-${bank.key}`} className="space-y-2">
                                <label className={bankRowClasses}>
                                  <span className="flex items-center gap-2">
                                    <input
                                      type="checkbox"
                                      className="h-4 w-4 rounded border-stone-300 text-emerald-600 focus:ring-emerald-400/40"
                                      checked={isSelected}
                                      onChange={() => toggleCustomBank(bank.key)}
                                    />
                                    <span className="truncate">{bank.label}</span>
                                  </span>
                                  <span className="text-xs font-semibold opacity-70">({bank.count})</span>
                                </label>
                                <AccordionPanel open={isSelected}>
                                  <div className="ml-3 pl-3 border-l border-stone-200/70 space-y-1.5 pt-2">
                                    {bank.topics.length ? (
                                      bank.topics.map((topic) => (
                                        <label
                                          key={`${bank.key}-${topic.topic}`}
                                          className={`flex items-center justify-between gap-3 rounded-lg border px-3 py-1.5 text-sm font-semibold transition ${selectedTopics.includes(topic.topic)
                                            ? 'border-emerald-300 bg-emerald-50/60 text-emerald-950'
                                            : 'border-stone-200 bg-white/70 text-stone-800'
                                            }`}
                                        >
                                          <span className="flex items-center gap-2">
                                            <input
                                              type="checkbox"
                                              className="h-4 w-4 rounded border-stone-300 text-emerald-600 focus:ring-emerald-400/40"
                                              checked={selectedTopics.includes(topic.topic)}
                                              onChange={() => toggleCustomTopic(bank.key, topic.topic)}
                                            />
                                            <span className="truncate">{topic.label}</span>
                                          </span>
                                          <span className="text-xs font-semibold opacity-70">({topic.count})</span>
                                        </label>
                                      ))
                                    ) : (
                                      <div className="rounded-lg border border-stone-200 bg-white/70 px-3 py-2 text-xs font-semibold text-stone-500">
                                        此區目前沒有題型
                                      </div>
                                    )}
                                    <div className="text-[11px] text-stone-500">
                                      未選題型時，系統會視為整區全選。
                                    </div>
                                  </div>
                                </AccordionPanel>
                              </div>
                            );
                          })
                        ) : (
                          <div className="rounded-xl border border-stone-200 bg-white/60 px-4 py-3 text-sm font-semibold text-stone-500">
                            沒有可用題庫
                          </div>
                        )}
                      </div>
                    </details>
                    <div className="mt-3 text-xs text-stone-500">
                      未勾選題庫時，系統會以「全部題庫」作為出題範圍。
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 space-y-3">
                  <div className="text-sm font-bold text-stone-900">目前設定</div>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-stone-700">
                    <span>
                      目標題數：<span className="font-bold text-stone-900">{customCount}</span> 題
                    </span>
                    <span>
                      可用題數：<span className="font-bold text-stone-900">{customPool.length}</span> 題
                    </span>
                    <span>
                      範圍：<span className="font-semibold text-stone-900">{customSelectedLabels.join('、')}</span>
                    </span>
                  </div>
                  {customSession ? (
                    <div className="rounded-xl border border-stone-200 bg-white/70 p-3 text-sm text-stone-700">
                      本次測驗：{customSession.size} / {customSession.available} 題
                    </div>
                  ) : (
                    <div className="rounded-xl border border-stone-200 bg-white/70 p-3 text-sm text-stone-500">
                      尚未開始測驗，按「開始測驗」建立題目。
                    </div>
                  )}
                </div>
              </div>

              {customSession ? (
                <div
                  ref={customQuizRef}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-slate-100 shadow-lg"
                >
                  {customSession.questions.length === 0 ? (
                    <div className="text-sm font-semibold text-slate-300">目前沒有可用題目，請調整範圍。</div>
                  ) : customFinished ? (
                    <div className="space-y-4">
                      <div className="text-sm font-semibold text-amber-200">完成！</div>
                      <div className="text-lg font-extrabold text-slate-100">
                        正確 {customCorrectCount} / {customScorableQuestions.length || '—'}
                      </div>
                      <div className="text-sm text-slate-300">
                        總題數：{customSession.questions.length}｜已作答：{customAnsweredCount}｜未作答：{customUnansweredCount}｜錯題：{customWrongQuestions.length}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => setCustomReviewOpen((prev) => !prev)}
                          className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-bold text-slate-100 hover:bg-slate-700"
                        >
                          {customReviewOpen ? '收合錯題回顧' : '展開錯題回顧'}
                        </button>
                        <button
                          type="button"
                          onClick={startCustomSession}
                          className="rounded-full border border-emerald-400 bg-emerald-500/20 px-4 py-2 text-sm font-bold text-emerald-100 hover:bg-emerald-500/30"
                        >
                          重新抽題
                        </button>
                      </div>

                      {customReviewOpen ? (
                        <div className="space-y-3">
                          {customWrongQuestions.length ? (
                            customWrongQuestions.map((question) => {
                              const picked = customAnswers[question.id];
                              return (
                                <div key={`custom-wrong-${question.id}`} className="rounded-xl border border-slate-700 bg-slate-800/70 p-4">
                                  <div className="text-sm font-bold text-slate-100">{question.stem}</div>
                                  <div className="mt-2 text-sm text-slate-300">
                                    你的答案：{picked != null ? `${picked + 1}. ${question.choices[picked]}` : '未作答'}
                                  </div>
                                  <div className="mt-1 text-sm font-semibold text-emerald-200">
                                    正確答案：{question.answerIndex + 1}. {question.choices[question.answerIndex]}
                                  </div>
                                </div>
                              );
                            })
                          ) : (
                            <div className="text-sm font-semibold text-slate-300">本次沒有錯題。</div>
                          )}
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-3 py-1 text-base font-bold text-amber-100 ring-1 ring-amber-400/50">
                          <span className="h-2 w-2 rounded-full bg-amber-300" />
                          {customIndex + 1} / {customSession.questions.length}
                        </div>
                        <div className="text-base font-semibold text-slate-300">
                          已作答 {customAnsweredCount} 題
                        </div>
                      </div>
                      {customActiveQuestion ? (
                        <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                          <div className="h-1.5 w-12 rounded-full bg-amber-400/80" />
                          <div className="border-l-4 border-amber-400 pl-3 text-[24px] md:text-[30px] font-extrabold text-slate-100 leading-snug">
                            {customActiveQuestion.stem}
                          </div>
                          <div className="grid gap-3 md:grid-cols-2">
                            {customActiveQuestion.choices.map((choice, idx) => {
                              const isSelected = customAnswers[customActiveQuestion.id] === idx;
                              return (
                                <button
                                  key={`${customActiveQuestion.id}-custom-${idx}`}
                                  type="button"
                                  onClick={() => {
                                    setCustomAnswers((prev) => ({
                                      ...prev,
                                      [customActiveQuestion.id]: idx,
                                    }));
                                    setCustomIndex((prev) =>
                                      Math.min(prev + 1, customSession.questions.length - 1),
                                    );
                                  }}
                                  className={`rounded-xl border px-4 py-3 text-[18px] md:text-[20px] font-semibold text-left transition-colors ${isSelected
                                    ? 'border-emerald-400 bg-emerald-500/20 text-emerald-50'
                                    : 'border-slate-700 bg-slate-800/70 text-slate-100 hover:bg-slate-700/70'
                                    }`}
                                >
                                  {idx + 1}. {choice}
                                </button>
                              );
                            })}
                          </div>
                          {customActiveQuestion.answerIndex == null ? (
                            <div className="text-sm font-semibold text-slate-400">此題未設定標準答案，作答不計分。</div>
                          ) : null}
                        </div>
                      ) : null}
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => setCustomIndex((prev) => Math.max(prev - 1, 0))}
                          className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-base font-bold text-slate-100 hover:bg-slate-700"
                          disabled={customIndex === 0}
                        >
                          上一題
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setCustomIndex((prev) => Math.min(prev + 1, customSession.questions.length - 1))
                          }
                          className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-base font-bold text-slate-100 hover:bg-slate-700"
                          disabled={customIndex >= customSession.questions.length - 1}
                        >
                          下一題
                        </button>
                        <button
                          type="button"
                          onClick={() => setCustomFinished(true)}
                          className="rounded-full border border-amber-400 bg-amber-500/20 px-4 py-2 text-base font-bold text-amber-100 hover:bg-amber-500/30"
                        >
                          交卷
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          )}

          <FlashcardMode
            isActive={activeMode === 'cards'}
            showIntro={showIntro}
            cardQuestions={cardQuestions}
            cardIndex={cardIndex}
            cardFlipped={cardFlipped}
            onToggleFlip={() => setCardFlipped((prev) => !prev)}
            onPrevious={() => {
              setCardIndex((prev) => (prev - 1 + cardQuestions.length) % cardQuestions.length);
              setCardFlipped(false);
            }}
            onNext={() => {
              setCardIndex((prev) => (prev + 1) % cardQuestions.length);
              setCardFlipped(false);
            }}
            onRandom={() => {
              if (!cardQuestions.length) return;
              const next = Math.floor(Math.random() * cardQuestions.length);
              setCardIndex(next);
              setCardFlipped(false);
            }}
            onShuffle={() => setCardSeed((prev) => prev + 1)}
          />

          {activeMode === 'list' && showIntro ? (
            <div className="museum-frame museum-paper p-8 md:p-10">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">PRACTICE · QUIZ BANK</div>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-stone-900">品評考題（題庫）</h2>
              <p className="mt-4 text-base md:text-lg text-stone-700 leading-relaxed">
                請先從左側選單選擇「題庫」與「章節」開始練習。你也可以使用搜尋快速定位題目。
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-stone-200 bg-white/70 p-4">
                  <div className="text-sm font-extrabold text-stone-900">建議使用方式</div>
                  <div className="mt-2 text-sm font-semibold text-stone-600 leading-relaxed">
                    先自己作答 → 需要時再開啟「顯示答案」快速複習。
                  </div>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white/70 p-4">
                  <div className="text-sm font-extrabold text-stone-900">答案顯示</div>
                  <div className="mt-2 text-sm font-semibold text-stone-600 leading-relaxed">
                    開啟後，正確選項前會出現綠色 O 標記，方便一眼辨識。
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {activeMode === 'list' && !showIntro
            ? filteredQuestions.map((question, index) => (
              <ListQuestionCard
                key={question.id}
                question={question}
                index={index}
                answered={answersById[question.id]}
                revealAnswers={revealAnswers}
                onAnswer={handleListQuestionAnswer}
              />
            ))
            : null}

          {activeMode === 'list' && !showIntro && filteredQuestions.length === 0 ? (
            <div className="museum-panel p-8 text-center text-stone-600">找不到符合條件的題目，請調整關鍵字或篩選。</div>
          ) : null}
        </div>
      </main>
    </div>
  );
}
