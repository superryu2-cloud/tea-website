import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  BookOpen,
  ChevronDown,
  Eye,
  EyeOff,
  FlaskConical,
  Image as ImageIcon,
  Layers,
  Leaf,
  RotateCcw,
  Search,
  ShieldCheck,
  ShieldAlert,
} from 'lucide-react';
import AccordionPanel from '../../components/AccordionPanel';

const STORAGE_KEY = 'tea.sensory.practiceAnswers.v1';
const REVEAL_KEY = 'tea.sensory.practiceRevealAnswers.v1';

const BANK_PRESETS = [
  { key: 'tea_tech_c', label: '製茶技術丙級' },
  { key: 'tea_artisan', label: '茶藝師' },
];

const safeJsonParse = (value) => {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
};

const getMenuTone = (key) => {
  switch (key) {
    case 'tea_tech_c':
    case 'cultivars_01':
      return { accent: 'bg-emerald-500', iconBg: 'bg-emerald-50', iconText: 'text-emerald-700', Icon: Leaf };
    case 'tea_artisan':
      return {
        accent: 'bg-sky-500',
        iconBg: 'bg-sky-50',
        iconText: 'text-sky-700',
        Icon: Layers,
        activeBorder: 'border-sky-300',
        activeBg: 'bg-sky-50/70',
        activeText: 'text-sky-950',
      };
    case 'processing_02':
      return { accent: 'bg-amber-500', iconBg: 'bg-amber-50', iconText: 'text-amber-700', Icon: FlaskConical };
    case 'quality_03':
      return { accent: 'bg-violet-500', iconBg: 'bg-violet-50', iconText: 'text-violet-700', Icon: ShieldCheck };
    case 'safety_04':
      return { accent: 'bg-rose-500', iconBg: 'bg-rose-50', iconText: 'text-rose-700', Icon: ShieldAlert };
    case 'all':
      return {
        accent: 'bg-stone-400',
        iconBg: 'bg-stone-100',
        iconText: 'text-stone-700',
        Icon: Layers,
        activeBorder: 'border-stone-300',
        activeBg: 'bg-stone-50/70',
        activeText: 'text-stone-950',
      };
    case 'bank':
      return {
        accent: 'bg-emerald-500',
        iconBg: 'bg-emerald-50',
        iconText: 'text-emerald-700',
        Icon: Layers,
        activeBorder: 'border-emerald-300',
        activeBg: 'bg-emerald-50/70',
        activeText: 'text-emerald-950',
      };
    default:
      return {
        accent: 'bg-stone-400',
        iconBg: 'bg-stone-100',
        iconText: 'text-stone-700',
        Icon: BookOpen,
        activeBorder: 'border-stone-300',
        activeBg: 'bg-stone-50/70',
        activeText: 'text-stone-950',
      };
  }
};

const getLeadingNumber = (value) => {
  if (typeof value !== 'string') return Number.NaN;
  const match = value.trim().match(/^(\d+)/);
  if (!match) return Number.NaN;
  return Number.parseInt(match[1], 10);
};

const MenuButton = ({ toneKey, isActive, label, count, hint, onClick, right, compact = false }) => {
  const tone = getMenuTone(toneKey);
  const Icon = tone.Icon;
  const activeBorder = tone.activeBorder ?? 'border-emerald-300';
  const activeBg = tone.activeBg ?? 'bg-emerald-50/70';
  const activeText = tone.activeText ?? 'text-emerald-950';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative w-full text-left overflow-hidden rounded-2xl border transition will-change-transform ${isActive
        ? `${activeBorder} ${activeBg} ${activeText} shadow-sm`
        : 'border-stone-200 bg-white/70 text-stone-900 hover:bg-white hover:shadow-sm'
        }`}
    >
      <span className={`absolute left-0 top-0 h-full w-1.5 ${tone.accent} ${isActive ? 'opacity-100' : 'opacity-60 group-hover:opacity-90'}`} />
      <div className={`flex items-center justify-between gap-3 ${compact ? 'px-4 py-1.5' : 'px-4 py-2.5'}`}>
        <span
          className={`inline-flex items-center justify-center rounded-2xl shadow-sm ring-1 ring-black/5 ${tone.iconBg} ${tone.iconText} ${compact ? 'h-9 w-9' : 'h-10 w-10'
            }`}
        >
          <Icon size={18} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <div className={`min-w-0 text-base font-semibold leading-tight ${compact ? 'truncate' : ''}`}>{label}</div>
            {count != null ? <div className="shrink-0 text-sm font-semibold opacity-70">({count})</div> : null}
          </div>
          {!compact && hint ? <div className="mt-0.5 text-xs font-semibold text-stone-500">{hint}</div> : null}
        </div>
        {right ? <div className="pt-1 text-stone-500">{right}</div> : null}
      </div>
    </button>
  );
};

const TopicButton = ({ toneKey, isActive, label, count, onClick }) => {
  const tone = getMenuTone(toneKey);
  const activeBorder = tone.activeBorder ?? 'border-emerald-300';
  const activeBg = tone.activeBg ?? 'bg-emerald-50';
  const activeText = tone.activeText ?? 'text-emerald-950';
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      className={`group relative w-full text-left overflow-hidden rounded-xl border transition-colors ${isActive
        ? `${activeBorder} ${activeBg} ${activeText}`
        : 'border-stone-200 bg-white/70 text-stone-900 hover:bg-white'
        }`}
    >
      <span className={`absolute left-0 top-0 h-full w-1 ${tone.accent} opacity-70 group-hover:opacity-90`} />
      <div className="flex items-center justify-between gap-3 px-4 py-1.5">
        <span className="min-w-0 flex-1 truncate whitespace-nowrap text-base font-semibold leading-tight">{label}</span>
        <span className="shrink-0 text-sm font-semibold opacity-70">({count})</span>
      </div>
    </button>
  );
};

const withBase = (path) => {
  if (typeof path !== 'string') return '';
  const trimmed = path.trim();
  if (!trimmed) return '';
  if (/^(https?:)?\/\//i.test(trimmed) || /^data:/i.test(trimmed)) return trimmed;
  const base = (import.meta?.env?.BASE_URL ?? '/').toString();
  const baseNormalized = base.endsWith('/') ? base : `${base}/`;
  const pathNormalized = trimmed.startsWith('/') ? trimmed.slice(1) : trimmed;
  return `${baseNormalized}${pathNormalized}`;
};

const deriveImageSrc = (question) => {
  if (!question || typeof question !== 'object') return '';
  const explicit = typeof question.image?.src === 'string' ? question.image.src.trim() : '';
  if (explicit) return withBase(explicit);
  if (question.imagePlaceholder !== true) return '';
  if (typeof question.id !== 'string') return '';

  const match = question.id.match(/^([A-Z]+)(\d{2})-(\d{4})$/);
  if (!match) return '';
  const prefix = `${match[1].toLowerCase()}${match[2]}`; // e.g. safety04
  const number = match[3]; // e.g. 0006
  return withBase(`/images/sensory/${prefix}-q${number}.png`);
};

const QuestionImage = ({ question }) => {
  const [failed, setFailed] = useState(false);
  const src = deriveImageSrc(question);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  const alt = typeof question?.image?.alt === 'string' ? question.image.alt : '';
  const shouldShow = Boolean(src) || question?.imagePlaceholder === true;

  if (!shouldShow) return null;

  return (
    <div className="rounded-2xl border border-stone-200 bg-white/70 overflow-hidden">
      {src && !failed ? (
        <img
          src={src}
          alt={alt}
          className="block w-full max-h-56 object-contain bg-white"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="px-4 py-6 flex items-center justify-center gap-3 text-stone-500">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-stone-100 text-stone-600 ring-1 ring-black/5">
            <ImageIcon size={18} />
          </span>
          <div className="text-sm font-extrabold">圖片預留區（待補圖）</div>
        </div>
      )}
    </div>
  );
};

export default function SensoryQuestionBank({ questions, activeTopic, onSelectTopic, topOffsetPx = 0 }) {
  const [introMode, setIntroMode] = useState(true);
  const [practiceMode, setPracticeMode] = useState('list');
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
  const [challengeSize, setChallengeSize] = useState(10);
  const [challengeTime, setChallengeTime] = useState(15);
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
  const [revealAnswers, setRevealAnswers] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.localStorage?.getItem(REVEAL_KEY) === '1';
  });
  const [answersById, setAnswersById] = useState(() => {
    if (typeof window === 'undefined') return {};
    const parsed = safeJsonParse(window.localStorage?.getItem(STORAGE_KEY) ?? '');
    return parsed && typeof parsed === 'object' ? parsed : {};
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
    setSelectedTopic(activeTopic ?? null);
    if (activeTopic) setIntroMode(false);
  }, [activeTopic]);

  const ensureExpanded = (key) => {
    if (!key) return;
    setExpandedBankKeys((prev) => (prev.includes(key) ? prev : [...prev, key]));
  };

  useEffect(() => {
    if (!selectedTopic) return;
    if (activeBank) {
      ensureExpanded(activeBank);
      return;
    }
    const list = questions ?? [];
    const match = list.find((q) => q && typeof q === 'object' && q.topic === selectedTopic);
    const bankKey = typeof match?.bank === 'string' ? match.bank.trim() : '';
    if (!bankKey) return;
    setActiveBank(bankKey);
    ensureExpanded(bankKey);
  }, [selectedTopic, questions, activeBank]);

  const normalizedQuery = query.trim().toLowerCase();
  const showIntro = introMode && !selectedTopic && !activeBank && !normalizedQuery;

  const banks = useMemo(() => {
    const map = new Map();
    (questions ?? []).forEach((q) => {
      if (!q || typeof q !== 'object') return;
      const key = typeof q.bank === 'string' && q.bank.trim().length > 0 ? q.bank.trim() : null;
      if (!key) return;
      const label = typeof q.bankLabel === 'string' && q.bankLabel.trim().length > 0 ? q.bankLabel.trim() : key;
      if (!map.has(key)) map.set(key, { key, label, count: 0 });
      map.get(key).count += 1;
    });
    const list = Array.from(map.values());
    list.sort((a, b) => a.label.localeCompare(b.label, 'zh-Hant'));
    return list;
  }, [questions]);

  const questionsInBank = useMemo(() => {
    const list = questions ?? [];
    if (!activeBank) return list;
    return list.filter((q) => q && typeof q === 'object' && q.bank === activeBank);
  }, [questions, activeBank]);

  const bankTree = useMemo(() => {
    const allKey = 'all';
    const list = questions ?? [];
    const nodes = new Map();
    const presetOrder = new Map(BANK_PRESETS.map((preset, index) => [preset.key, index]));

    const ensureNode = (key, label) => {
      const stateKey = key ?? allKey;
      if (!nodes.has(stateKey)) {
        nodes.set(stateKey, { stateKey, key, label, count: 0, topics: new Map() });
      }
      return nodes.get(stateKey);
    };

    const addTopic = (node, question, bankKey) => {
      const topicKey = question.topic;
      const topicLabel = question.topicLabel;
      if (typeof topicKey !== 'string' || typeof topicLabel !== 'string') return;
      if (!node.topics.has(topicKey)) node.topics.set(topicKey, { topic: topicKey, label: topicLabel, bankKey: bankKey ?? null, count: 0 });
      node.topics.get(topicKey).count += 1;
    };

    const allNode = ensureNode(null, '全部題庫');

    BANK_PRESETS.forEach((preset) => {
      if (!preset || typeof preset !== 'object') return;
      if (typeof preset.key !== 'string' || preset.key.trim().length === 0) return;
      const label = typeof preset.label === 'string' && preset.label.trim().length > 0 ? preset.label.trim() : preset.key.trim();
      ensureNode(preset.key.trim(), label);
    });

    list.forEach((q) => {
      if (!q || typeof q !== 'object') return;
      allNode.count += 1;
      addTopic(allNode, q, q.bank);

      const bankKey = typeof q.bank === 'string' && q.bank.trim().length > 0 ? q.bank.trim() : null;
      if (!bankKey) return;
      const bankLabel = typeof q.bankLabel === 'string' && q.bankLabel.trim().length > 0 ? q.bankLabel.trim() : bankKey;
      const bankNode = ensureNode(bankKey, bankLabel);
      bankNode.count += 1;
      addTopic(bankNode, q, bankKey);
    });

    const nodeList = Array.from(nodes.values());
    nodeList.sort((a, b) => {
      if (a.stateKey === allKey) return -1;
      if (b.stateKey === allKey) return 1;

      const aPreset = presetOrder.get(a.stateKey);
      const bPreset = presetOrder.get(b.stateKey);
      if (aPreset != null || bPreset != null) {
        if (aPreset == null) return 1;
        if (bPreset == null) return -1;
        return aPreset - bPreset;
      }
      return a.label.localeCompare(b.label, 'zh-Hant');
    });

    nodeList.forEach((node) => {
      const topicsArray = Array.from(node.topics.values());
      topicsArray.sort((a, b) => {
        const an = getLeadingNumber(a.label);
        const bn = getLeadingNumber(b.label);
        if (Number.isFinite(an) && Number.isFinite(bn) && an !== bn) return an - bn;
        return a.label.localeCompare(b.label, 'zh-Hant');
      });
      node.topics = topicsArray;
    });

    return nodeList;
  }, [questions]);

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

  const shuffleCards = (list) => {
    const next = [...list];
    for (let i = next.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [next[i], next[j]] = [next[j], next[i]];
    }
    return next;
  };

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
    const questionsForSession = size > 0 ? shuffleCards(pool).slice(0, size) : [];
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
    if (practiceMode !== 'cards') return [];
    if (!filteredQuestions.length) return [];
    return shuffleCards(filteredQuestions);
  }, [filteredQuestions, practiceMode, cardSeed]);

  useEffect(() => {
    if (practiceMode !== 'cards') return;
    setCardIndex(0);
    setCardFlipped(false);
  }, [practiceMode, selectedTopic, activeBank, normalizedQuery, cardSeed]);

  useEffect(() => {
    if (!challengeOn) return;
    setChallengeIndex(0);
    setChallengeScore(0);
    setChallengeFinished(false);
    setChallengeSelected(null);
    setChallengeTimeLeft(challengeTime);
    setChallengeTotalSeconds(0);
  }, [challengeOn, selectedTopic, activeBank, normalizedQuery, challengeTime]);

  useEffect(() => {
    if (practiceMode !== 'cards') return;
    if (cardIndex >= cardQuestions.length) {
      setCardIndex(0);
    }
  }, [cardIndex, cardQuestions.length, practiceMode]);

  const challengeQuestions = useMemo(() => {
    if (!challengeOn) return [];
    if (!filteredQuestions.length) return [];
    return filteredQuestions.slice(0, Math.min(challengeSize, filteredQuestions.length));
  }, [challengeOn, filteredQuestions, challengeSize]);

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
    setChallengeTimeLeft(challengeTime);
    setChallengeSelected(null);
  }, [challengeOn, challengeIndex, challengeFinished, activeChallengeQuestion, challengeTime]);

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
    if (challengeTimeLeft > 0) return;
    const nextIndex = challengeIndex + 1;
    if (nextIndex >= challengeQuestions.length) {
      setChallengeFinished(true);
      return;
    }
    setChallengeIndex(nextIndex);
  }, [challengeTimeLeft, challengeOn, challengeFinished, activeChallengeQuestion, challengeIndex, challengeQuestions.length]);

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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[420px_minmax(0,1fr)] gap-6 items-start">
      <aside className="lg:sticky" style={{ '--sidebar-top': `${sidebarTopPx}px`, top: `var(--sidebar-top)` }}>
        <div
          ref={sidebarScrollRef}
          className="space-y-6 lg:max-h-[calc(100vh-var(--sidebar-top))] lg:overflow-auto"
          style={{ overflowAnchor: 'none' }}
        >
          <div className="museum-frame museum-paper overflow-hidden">


            <div className="px-6 py-5 md:px-8 flex flex-col gap-3">
              <div className="min-w-0">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
                    <Search size={18} />
                  </span>
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => {
                      const next = e.target.value;
                      setQuery(next);
                      if (introMode && next.trim().length > 0) setIntroMode(false);
                    }}
                    placeholder="搜尋題目關鍵字（題幹/選項）..."
                    className="w-full rounded-xl border border-stone-200 bg-white/80 pl-10 pr-4 py-2.5 text-base font-semibold text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-600/25"
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setRevealAnswers((prev) => !prev)}
                  className={`group inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-base font-extrabold transition-all ${revealAnswers
                    ? 'border-sky-300 bg-gradient-to-r from-sky-100 via-sky-50 to-white text-sky-950 shadow-sm'
                    : 'border-stone-200 bg-white/80 text-stone-800 hover:-translate-y-0.5 hover:shadow-md'
                    }`}
                >
                  {revealAnswers ? <EyeOff size={16} className="text-sky-700" /> : <Eye size={16} className="text-stone-500 group-hover:text-sky-600" />}
                  {revealAnswers ? '關閉答案' : '顯示答案'}
                </button>

                <button
                  type="button"
                  onClick={() => setAnswersById({})}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-rose-200 bg-gradient-to-r from-rose-50 via-white to-rose-50 px-4 py-2.5 text-base font-extrabold text-rose-900 transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <RotateCcw size={16} className="text-rose-500 group-hover:text-rose-600" />
                  清除作答紀錄
                </button>
              </div>
            </div>
          </div>

          <div className="museum-frame museum-paper p-5 md:p-6">
            <div className="text-sm font-semibold tracking-widest text-stone-500">題庫（可收合）</div>
            <div className="mt-3 space-y-2">
              {bankTree.map((node) => {
                const stateKey = node.stateKey;
                const isExpanded = expandedBankKeys.includes(stateKey);
                const nodeSelected = (activeBank ?? 'all') === stateKey;
                const nodeToneKey = stateKey === 'all' ? 'all' : stateKey;

                return (
                  <div key={stateKey} className="space-y-2">
                    <MenuButton
                      toneKey={nodeToneKey}
                      isActive={nodeSelected}
                      label={node.label}
                      count={node.count}
                      compact
                      right={
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-[320ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
                        />
                      }
                      onClick={() =>
                        preserveSidebarScroll(() => {
                          setIntroMode(false);
                          setActiveBank(stateKey === 'all' ? null : stateKey);
                          setQuery('');
                          onSelectTopic?.(null);
                          setSelectedTopic(null);
                          setExpandedBankKeys((prev) =>
                            prev.includes(stateKey) ? prev.filter((k) => k !== stateKey) : [...prev, stateKey],
                          );
                        })
                      }
                    />

                    <AccordionPanel open={isExpanded}>
                      <div className="ml-3 pl-3 border-l border-stone-200/70 space-y-1.5 pt-2">
                        <TopicButton
                          toneKey={nodeToneKey}
                          isActive={!selectedTopic && nodeSelected}
                          label="全部題目"
                          count={node.count}
                          onClick={() =>
                            preserveSidebarScroll(() => {
                              setIntroMode(false);
                              const nextBankKey = stateKey === 'all' ? null : stateKey;
                              setActiveBank(nextBankKey);
                              if (nextBankKey) ensureExpanded(nextBankKey);
                              setQuery('');
                              setSelectedTopic(null);
                              onSelectTopic?.(null);
                            })
                          }
                        />

                        {node.topics.length > 0 ? (
                          node.topics.map((t) => (
                            <TopicButton
                              key={t.topic}
                              toneKey={stateKey === 'all' ? t.bankKey ?? 'all' : nodeToneKey}
                              isActive={selectedTopic === t.topic && (stateKey !== 'all' || !activeBank || activeBank === t.bankKey)}
                              label={t.label}
                              count={t.count}
                              onClick={() =>
                                preserveSidebarScroll(() => {
                                  setIntroMode(false);
                                  const nextBankKey = stateKey === 'all' ? null : stateKey;
                                  setActiveBank(nextBankKey);
                                  if (nextBankKey) ensureExpanded(nextBankKey);
                                  setQuery('');
                                  setSelectedTopic(t.topic);
                                  onSelectTopic?.(t.topic);
                                })
                              }
                            />
                          ))
                        ) : (
                          <div className="rounded-xl border border-stone-200 bg-white/60 px-4 py-2 text-sm font-semibold text-stone-500">
                            尚無單元
                          </div>
                        )}
                      </div>
                    </AccordionPanel>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </aside>

      <main className="min-w-0">
        <div className="w-full space-y-4">
          {quickQuestion ? (
            (() => {
              const hasQuickAnswer = Number.isInteger(quickQuestion.answerIndex);
              const quickCorrectIndex = hasQuickAnswer ? quickQuestion.answerIndex : null;
              const quickSelected = Number.isInteger(quickAnswerIndex) ? quickAnswerIndex : null;
              const quickIsCorrect = hasQuickAnswer && quickSelected != null && quickSelected === quickCorrectIndex;
              const showQuickResult = quickSelected != null || quickReveal;
              const shouldFlip = quickReveal;
              const quickMinHeight = 320;

              return (
                <div className="museum-frame museum-paper relative p-6 md:p-7 border-2 border-sky-300/90 bg-sky-50/60">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="text-xs font-extrabold tracking-widest text-stone-500">QUICK QUIZ</div>
                        <span className="rounded-full bg-sky-600 px-2.5 py-0.5 text-[11px] font-extrabold tracking-widest text-white shadow-md">
                          快問卡
                        </span>
                      </div>
                      <div className="mt-2 text-lg font-extrabold text-stone-900">快問快答</div>
                      <div className="mt-2 h-1.5 w-12 rounded-full bg-sky-500/80" />
                      <div className="mt-1 text-sm font-semibold text-stone-600">選一個答案，看看直覺。</div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setQuickSeed((prev) => prev + 1);
                          setQuickAnswerIndex(null);
                          setQuickReveal(false);
                        }}
                        className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-bold text-stone-700 hover:bg-stone-50"
                      >
                        換一題
                      </button>
                      <button
                        type="button"
                        onClick={() => setQuickSoundOn((prev) => !prev)}
                        className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors ${quickSoundOn
                          ? 'border-amber-200 bg-amber-50 text-amber-900'
                          : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                          }`}
                      >
                        翻卡音效：{quickSoundOn ? '開' : '關'}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setQuickReveal((prev) => !prev);
                          playFlipSound();
                        }}
                        className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors ${quickReveal
                          ? 'border-emerald-300 bg-emerald-50 text-emerald-950'
                          : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                          }`}
                      >
                        {quickReveal ? '回到題目' : '翻卡看答案'}
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setChallengeOn((prev) => !prev);
                          setCardFlipped(false);
                        }}
                        className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors ${challengeOn
                          ? 'border-amber-300 bg-amber-50 text-amber-950'
                          : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                          }`}
                      >
                        計時挑戰
                      </button>
                    </div>


                    {challengeOn ? (
                      <div className="mt-5 rounded-3xl border border-amber-200 bg-amber-50/60 p-5 md:p-6">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <div className="text-xs font-extrabold tracking-widest text-amber-700">TIME ATTACK</div>
                            <div className="mt-1 text-lg font-extrabold text-amber-950">限時挑戰</div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <button
                              type="button"
                              onClick={() => {
                                setChallengeOn(false);
                                setChallengeFinished(false);
                              }}
                              className="rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-bold text-amber-900 hover:bg-amber-50"
                            >
                              離開挑戰
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                setChallengeOn(true);
                                setChallengeIndex(0);
                                setChallengeScore(0);
                                setChallengeFinished(false);
                              }}
                              className="rounded-full border border-amber-300 bg-amber-100 px-4 py-2 text-sm font-bold text-amber-950 hover:bg-amber-200"
                            >
                              重新開始
                            </button>
                          </div>
                        </div>

                        {challengeQuestions.length === 0 ? (
                          <div className="mt-4 rounded-2xl border border-amber-200 bg-white/80 p-4 text-sm font-semibold text-stone-600">
                            目前沒有可用題目，請先在左側選擇題庫。
                          </div>
                        ) : challengeFinished ? (
                          <div className="mt-4 rounded-2xl border border-amber-200 bg-white/80 p-4">
                            <div className="text-sm font-semibold text-amber-700">完成！</div>
                            <div className="mt-2 text-lg font-extrabold text-amber-950">
                              正確 {challengeScore} / {challengeQuestions.length}
                            </div>
                            <div className="mt-1 text-sm font-semibold text-stone-600">
                              平均作答 {challengeQuestions.length
                                ? Math.round(challengeTotalSeconds / challengeQuestions.length)
                                : 0}
                              秒
                            </div>
                          </div>
                        ) : (
                          <div className="mt-4 space-y-4">
                            <div className="flex items-center justify-between text-sm font-semibold text-amber-900">
                              <span>
                                {challengeIndex + 1} / {challengeQuestions.length}
                              </span>
                              <span>剩餘 {challengeTimeLeft}s</span>
                            </div>
                            <div className="h-2 rounded-full bg-amber-100 overflow-hidden">
                              <div
                                className="h-full bg-amber-400 transition-all"
                                style={{
                                  width: `${(challengeTimeLeft / challengeTime) * 100}%`,
                                }}
                              />
                            </div>
                            {activeChallengeQuestion ? (
                              <>
                                <div className="text-base font-semibold text-stone-900 leading-relaxed">
                                  {activeChallengeQuestion.stem}
                                </div>
                                <div className="grid gap-2 md:grid-cols-2">
                                  {activeChallengeQuestion.choices.map((choice, idx) => {
                                    const isSelected = challengeSelected === idx;
                                    const isCorrect = activeChallengeAnswerIndex === idx;
                                    const showAnswer = challengeSelected != null;
                                    return (
                                      <button
                                        key={`${activeChallengeQuestion.id}-challenge-${idx}`}
                                        type="button"
                                        onClick={() => {
                                          if (challengeFinished) return;
                                          if (challengeSelected != null) return;
                                          setChallengeSelected(idx);
                                          if (activeChallengeAnswerIndex != null && idx === activeChallengeAnswerIndex) {
                                            setChallengeScore((prev) => prev + 1);
                                          }
                                          setTimeout(() => {
                                            const nextIndex = challengeIndex + 1;
                                            if (nextIndex >= challengeQuestions.length) {
                                              setChallengeFinished(true);
                                              return;
                                            }
                                            setChallengeIndex(nextIndex);
                                          }, 500);
                                        }}
                                        className={`rounded-xl border px-4 py-2 text-sm font-semibold text-left transition-colors ${showAnswer && isCorrect
                                          ? 'border-emerald-300 bg-emerald-50 text-emerald-950'
                                          : showAnswer && isSelected
                                            ? 'border-rose-300 bg-rose-50 text-rose-950'
                                            : isSelected
                                              ? 'border-amber-300 bg-amber-50 text-amber-950'
                                              : 'border-amber-200 bg-white text-stone-700 hover:bg-amber-50'
                                          }`}
                                      >
                                        {idx + 1}. {choice}
                                      </button>
                                    );
                                  })}
                                </div>
                              </>
                            ) : null}
                          </div>
                        )}
                      </div>
                    ) : null}
                  </div>

                  <div className="mt-4" style={{ perspective: '1200px' }}>
                    <div
                      className="relative transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                      style={{
                        minHeight: `${quickMinHeight}px`,
                        transformStyle: 'preserve-3d',
                        transform: shouldFlip ? 'rotateY(180deg)' : 'rotateY(0deg)',
                      }}
                    >
                      <div
                        className="absolute inset-0 rounded-[28px] border border-stone-200 bg-gradient-to-br from-white via-white to-amber-50/60 p-5 md:p-6 shadow-[0_28px_70px_-32px_rgba(15,23,42,0.45)] overflow-hidden"
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 opacity-30"
                          style={{
                            backgroundImage:
                              'repeating-linear-gradient(45deg, rgba(15,23,42,0.04) 0px, rgba(15,23,42,0.04) 1px, transparent 1px, transparent 6px), repeating-linear-gradient(-45deg, rgba(15,23,42,0.03) 0px, rgba(15,23,42,0.03) 1px, transparent 1px, transparent 7px)',
                          }}
                        />
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 opacity-40"
                          style={{
                            backgroundImage:
                              'radial-gradient(circle at 20% 20%, rgba(15,23,42,0.04), transparent 45%), radial-gradient(circle at 80% 30%, rgba(15,23,42,0.03), transparent 50%)',
                          }}
                        />
                        <div className="absolute -top-3 left-6 h-6 w-24 rounded-full bg-amber-100/80 shadow-sm border border-amber-200/70" />
                        <div className="absolute -right-3 top-8 h-10 w-10 rotate-6 rounded-2xl bg-emerald-100/70 border border-emerald-200/70" />
                        <div className="absolute right-4 top-4 text-[11px] font-extrabold tracking-widest text-stone-400">Q-CARD</div>
                        <div className="text-xl md:text-2xl font-semibold text-stone-900 leading-relaxed">
                          {quickQuestion.stem}
                        </div>

                        <div className="mt-4 grid gap-3 md:grid-cols-2">
                          {quickQuestion.choices.map((choice, idx) => {
                            const isSelected = quickSelected === idx;
                            return (
                              <button
                                key={`${quickQuestion.id}-quick-${idx}`}
                                type="button"
                                onClick={() => setQuickAnswerIndex(idx)}
                                className={`rounded-xl border px-4 py-2 text-lg font-semibold text-left transition-colors ${isSelected
                                  ? 'border-emerald-200 bg-emerald-50/60 text-emerald-950'
                                  : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                                  }`}
                              >
                                {idx + 1}. {choice}
                              </button>
                            );
                          })}
                        </div>

                        <div className="mt-3 text-sm font-semibold text-stone-600">
                          {quickSelected != null ? '已選擇，翻卡看答案。' : '選一個答案開始。'}
                        </div>
                      </div>

                      <div
                        className="absolute inset-0 rounded-[28px] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-sky-50/70 p-5 md:p-6 shadow-[0_28px_70px_-32px_rgba(15,23,42,0.45)] overflow-hidden"
                        style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                      >
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 opacity-30"
                          style={{
                            backgroundImage:
                              'repeating-linear-gradient(45deg, rgba(15,23,42,0.035) 0px, rgba(15,23,42,0.035) 1px, transparent 1px, transparent 6px), repeating-linear-gradient(-45deg, rgba(15,23,42,0.03) 0px, rgba(15,23,42,0.03) 1px, transparent 1px, transparent 7px)',
                          }}
                        />
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 opacity-40"
                          style={{
                            backgroundImage:
                              'radial-gradient(circle at 25% 20%, rgba(15,23,42,0.04), transparent 45%), radial-gradient(circle at 75% 30%, rgba(15,23,42,0.03), transparent 50%)',
                          }}
                        />
                        <div className="absolute -top-3 right-6 h-6 w-24 rounded-full bg-sky-100/70 shadow-sm border border-sky-200/70" />
                        <div className="absolute -left-3 top-10 h-10 w-10 -rotate-6 rounded-2xl bg-rose-100/70 border border-rose-200/70" />
                        <div className="absolute right-4 top-4 text-[11px] font-extrabold tracking-widest text-emerald-400">A-CARD</div>
                        <div className="text-sm font-semibold text-emerald-700">答案卡</div>
                        {hasQuickAnswer ? (
                          <div className="mt-2 text-lg font-extrabold text-emerald-950">
                            {quickCorrectIndex + 1}. {quickQuestion.choices[quickCorrectIndex]}
                          </div>
                        ) : (
                          <div className="mt-2 text-lg font-extrabold text-stone-700">尚未設定答案</div>
                        )}
                        <div className="mt-3 text-sm font-semibold text-stone-700">
                          {showQuickResult
                            ? quickIsCorrect
                              ? '答對了！'
                              : '再試一次，或換一題。'
                            : '翻回題目再選一次。'}
                        </div>
                        {quickSelected != null ? (
                          <div className="mt-3 text-sm font-semibold text-stone-600">
                            你的選擇：{quickSelected + 1}. {quickQuestion.choices[quickSelected]}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()
          ) : null}

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

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setPracticeMode('list')}
              className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors ${practiceMode === 'list'
                ? 'border-emerald-300 bg-emerald-50 text-emerald-950'
                : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                }`}
            >
              題庫練習
            </button>
            <button
              type="button"
              onClick={() => {
                setPracticeMode('cards');
                setIntroMode(false);
                setCardSeed((prev) => prev + 1);
              }}
              className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors ${practiceMode === 'cards'
                ? 'border-emerald-300 bg-emerald-50 text-emerald-950'
                : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                }`}
            >
              答題卡片
            </button>
          </div>

          {practiceMode === 'cards' ? (
            showIntro ? (
              <div className="museum-panel p-8 text-center text-stone-600">
                請先從左側選擇題庫與章節，開始卡片練習。
              </div>
            ) : cardQuestions.length > 0 ? (
              (() => {
                const current = cardQuestions[cardIndex];
                const hasAnswer = current && Number.isInteger(current.answerIndex);
                const answerLabel = hasAnswer ? current.choices[current.answerIndex] : null;
                return (
                  <div className="museum-frame museum-paper p-8 md:p-10 space-y-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="text-xs font-extrabold tracking-widest text-stone-500">
                        {current.topicLabel}
                      </div>
                      <div className="text-sm font-semibold text-stone-500">
                        {cardIndex + 1} / {cardQuestions.length}
                      </div>
                    </div>

                    <div className="rounded-3xl border border-stone-200 bg-white/70 p-6 md:p-8 shadow-sm">
                      {!cardFlipped ? (
                        <div className="space-y-3">
                          <div className="text-sm font-semibold text-stone-500">題目</div>
                          <div className="text-lg md:text-xl font-extrabold text-stone-900 leading-snug">
                            {current.stem}
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="text-sm font-semibold text-stone-500">答案</div>
                          {hasAnswer ? (
                            <div className="text-lg font-extrabold text-emerald-900">
                              {current.answerIndex + 1}. {answerLabel}
                            </div>
                          ) : (
                            <div className="text-lg font-extrabold text-stone-700">尚未提供答案</div>
                          )}
                          <div className="grid gap-2 md:grid-cols-2">
                            {current.choices.map((choice, idx) => {
                              const isAnswer = hasAnswer && idx === current.answerIndex;
                              return (
                                <div
                                  key={`${current.id}-${idx}`}
                                  className={`rounded-xl border px-4 py-2 text-sm font-semibold ${isAnswer
                                    ? 'border-emerald-300 bg-emerald-50 text-emerald-950'
                                    : 'border-stone-200 bg-white text-stone-700'
                                    }`}
                                >
                                  {idx + 1}. {choice}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => setCardFlipped((prev) => !prev)}
                        className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-bold text-stone-700 hover:bg-stone-50"
                      >
                        {cardFlipped ? '回到題目' : '翻面看答案'}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setCardIndex((prev) => (prev - 1 + cardQuestions.length) % cardQuestions.length);
                          setCardFlipped(false);
                        }}
                        className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-bold text-stone-700 hover:bg-stone-50"
                      >
                        上一題
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setCardIndex((prev) => (prev + 1) % cardQuestions.length);
                          setCardFlipped(false);
                        }}
                        className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-bold text-stone-700 hover:bg-stone-50"
                      >
                        下一題
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (!cardQuestions.length) return;
                          const next = Math.floor(Math.random() * cardQuestions.length);
                          setCardIndex(next);
                          setCardFlipped(false);
                        }}
                        className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-900 hover:bg-emerald-100"
                      >
                        隨機抽題
                      </button>
                      <button
                        type="button"
                        onClick={() => setCardSeed((prev) => prev + 1)}
                        className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-bold text-stone-700 hover:bg-stone-50"
                      >
                        重新洗牌
                      </button>
                    </div>
                  </div>
                );
              })()
            ) : (
              <div className="museum-panel p-8 text-center text-stone-600">
                找不到符合條件的題目，請調整篩選條件。
              </div>
            )
          ) : null}

          {practiceMode === 'list' && showIntro ? (
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

          {practiceMode === 'list' && !showIntro
            ? filteredQuestions.map((q, index) => {
              const answered = answersById[q.id];
              const hasAnswerKey = q.answerIndex != null;
              const correctIndex = hasAnswerKey ? q.answerIndex : null;
              const answeredIndex = Number.isInteger(answered) ? answered : null;
              const isCorrect = hasAnswerKey && answeredIndex != null ? answeredIndex === correctIndex : null;
              const shouldRevealAnswer = Boolean(revealAnswers && hasAnswerKey);

              return (
                <div key={q.id} className="museum-frame museum-paper p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="text-xs font-extrabold tracking-widest text-stone-500">{q.topicLabel}</div>
                      <div className="mt-2 text-xl md:text-2xl font-extrabold text-stone-900 leading-snug">
                        {index + 1}. {q.stem}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pl-8 space-y-3">
                    <QuestionImage question={q} />

                    <div className="grid gap-1 grid-cols-1">
                      {q.choices.map((choice, choiceIndex) => {
                        const isSelected = answered === choiceIndex;
                        const isCorrectChoice = hasAnswerKey && choiceIndex === correctIndex;
                        const showFeedback = hasAnswerKey && answeredIndex != null;
                        const isWrongSelected = showFeedback && isSelected && !isCorrectChoice;
                        const showCorrectMarker = (showFeedback || shouldRevealAnswer) && isCorrectChoice;

                        return (
                          <button
                            key={`${q.id}-${choiceIndex}`}
                            type="button"
                            onClick={() => setAnswersById((prev) => ({ ...prev, [q.id]: choiceIndex }))}
                            className={`text-left rounded-xl border px-4 py-2 transition-colors ${(showFeedback || shouldRevealAnswer) && isCorrectChoice
                              ? 'border-emerald-300 bg-emerald-50 text-emerald-950'
                              : isWrongSelected
                                ? 'border-rose-300 bg-rose-50 text-rose-950'
                                : isSelected && !shouldRevealAnswer
                                  ? 'border-emerald-300 bg-emerald-50 text-emerald-950'
                                  : 'border-stone-200 bg-white/80 hover:bg-white text-stone-900'
                              }`}
                          >
                            <span className="inline-flex items-center gap-3">
                              <span
                                className={`inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-600 text-white text-xs font-extrabold transition-opacity ${showCorrectMarker ? 'opacity-100' : 'opacity-0'
                                  }`}
                                aria-hidden={!showCorrectMarker}
                              >
                                O
                              </span>
                              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-stone-200 bg-white text-base font-extrabold text-stone-700">
                                {choiceIndex + 1}
                              </span>
                              <span className="text-lg font-semibold leading-snug">{choice}</span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })
            : null}

          {practiceMode === 'list' && !showIntro && filteredQuestions.length === 0 ? (
            <div className="museum-panel p-8 text-center text-stone-600">找不到符合條件的題目，請調整關鍵字或篩選。</div>
          ) : null}
        </div>
      </main>
    </div>
  );
}
