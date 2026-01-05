import React, { useEffect, useMemo, useState } from 'react';
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
      className={`group relative w-full text-left overflow-hidden rounded-2xl border transition will-change-transform ${
        isActive
          ? `${activeBorder} ${activeBg} ${activeText} shadow-sm`
          : 'border-stone-200 bg-white/70 text-stone-900 hover:bg-white hover:shadow-sm'
      }`}
    >
      <span className={`absolute left-0 top-0 h-full w-1.5 ${tone.accent} ${isActive ? 'opacity-100' : 'opacity-60 group-hover:opacity-90'}`} />
      <div className={`flex items-center justify-between gap-3 ${compact ? 'px-4 py-2' : 'px-4 py-3'}`}>
        <span
          className={`inline-flex items-center justify-center rounded-2xl shadow-sm ring-1 ring-black/5 ${tone.iconBg} ${tone.iconText} ${
            compact ? 'h-9 w-9' : 'h-10 w-10'
          }`}
        >
          <Icon size={18} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <div className={`min-w-0 text-sm font-extrabold leading-snug ${compact ? 'truncate' : ''}`}>{label}</div>
            {count != null ? <div className="shrink-0 text-sm font-extrabold opacity-70">({count})</div> : null}
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
      className={`group relative w-full text-left overflow-hidden rounded-xl border transition-colors ${
        isActive
          ? `${activeBorder} ${activeBg} ${activeText}`
          : 'border-stone-200 bg-white/70 text-stone-900 hover:bg-white'
      }`}
    >
      <span className={`absolute left-0 top-0 h-full w-1 ${tone.accent} opacity-70 group-hover:opacity-90`} />
      <div className="flex items-center justify-between gap-3 px-4 py-2">
        <span className="min-w-0 flex-1 truncate whitespace-nowrap text-sm font-extrabold">{label}</span>
        <span className="shrink-0 text-sm font-extrabold opacity-70">({count})</span>
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
  const [query, setQuery] = useState('');
  const [activeBank, setActiveBank] = useState(null);
  const [expandedBankKeys, setExpandedBankKeys] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(activeTopic ?? null);
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

  const resolvedTopOffsetPx = Number.isFinite(topOffsetPx) ? Math.max(0, Math.round(topOffsetPx)) : 0;
  const sidebarTopPx = resolvedTopOffsetPx + 12;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[380px_minmax(0,1fr)] gap-6 items-start">
      <aside className="lg:sticky" style={{ '--sidebar-top': `${sidebarTopPx}px`, top: `var(--sidebar-top)` }}>
        <div className="space-y-6 lg:max-h-[calc(100vh-var(--sidebar-top))] lg:overflow-auto">
            <div className="museum-frame museum-paper overflow-hidden">
              <div className="px-6 py-6 md:px-8 md:py-7 border-b border-stone-200/70">
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">品評考題（題庫）</h2>
              </div>

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
                    className="w-full rounded-xl border border-stone-200 bg-white/80 pl-10 pr-4 py-2.5 text-sm font-semibold text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-600/25"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={() => setRevealAnswers((prev) => !prev)}
                className={`inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-extrabold transition-colors ${
                  revealAnswers
                    ? 'border-sky-200 bg-sky-50 text-sky-950 hover:bg-sky-100/60'
                    : 'border-stone-200 bg-white/80 text-stone-800 hover:bg-white'
                }`}
              >
                {revealAnswers ? <EyeOff size={16} className="text-sky-600" /> : <Eye size={16} className="text-stone-500" />}
                {revealAnswers ? '關閉答案' : '顯示答案'}
              </button>

              <button
                type="button"
                onClick={() => setAnswersById({})}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-stone-200 bg-white/80 px-4 py-2.5 text-sm font-extrabold text-stone-800 hover:bg-white transition-colors"
              >
                <RotateCcw size={16} className="text-stone-500" />
                清除作答紀錄
              </button>
            </div>
          </div>

          <div className="museum-frame museum-paper p-5 md:p-6">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">題庫（可收合）</div>
            <div className="mt-3 space-y-2">
              <MenuButton
                toneKey="all"
                isActive={showIntro}
                label="說明"
                count={null}
                compact
                onClick={() => {
                  setIntroMode(true);
                  setQuery('');
                  setActiveBank(null);
                  setSelectedTopic(null);
                  setExpandedBankKeys([]);
                  onSelectTopic?.(null);
                }}
              />

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
                      onClick={() => {
                        setIntroMode(false);
                        setActiveBank(stateKey === 'all' ? null : stateKey);
                        setQuery('');
                        onSelectTopic?.(null);
                        setSelectedTopic(null);
                        setExpandedBankKeys((prev) => (prev.includes(stateKey) ? prev.filter((k) => k !== stateKey) : [...prev, stateKey]));
                      }}
                    />

                    <AccordionPanel open={isExpanded}>
                      <div className="ml-3 pl-3 border-l border-stone-200/70 space-y-1.5 pt-2">
                        <TopicButton
                          toneKey={nodeToneKey}
                          isActive={!selectedTopic && nodeSelected}
                          label="全部題目"
                          count={node.count}
                          onClick={() => {
                            setIntroMode(false);
                            const nextBankKey = stateKey === 'all' ? null : stateKey;
                            setActiveBank(nextBankKey);
                            if (nextBankKey) ensureExpanded(nextBankKey);
                            setQuery('');
                            setSelectedTopic(null);
                            onSelectTopic?.(null);
                          }}
                        />

                        {node.topics.length > 0 ? (
                          node.topics.map((t) => (
                            <TopicButton
                              key={t.topic}
                              toneKey={stateKey === 'all' ? t.bankKey ?? 'all' : nodeToneKey}
                              isActive={selectedTopic === t.topic && (stateKey !== 'all' || !activeBank)}
                              label={t.label}
                              count={t.count}
                              onClick={() => {
                                setIntroMode(false);
                                const nextBankKey = stateKey === 'all' ? (t.bankKey ?? null) : stateKey;
                                setActiveBank(nextBankKey);
                                if (nextBankKey) ensureExpanded(nextBankKey);
                                setQuery('');
                                setSelectedTopic(t.topic);
                                onSelectTopic?.(t.topic);
                              }}
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
        <div className="w-full max-w-4xl space-y-4">
          {showIntro ? (
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

          {!showIntro
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
                    <div className="mt-2 text-lg md:text-xl font-extrabold text-stone-900 leading-snug">
                      {index + 1}. {q.stem}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pl-8 space-y-3">
                  <QuestionImage question={q} />

                  <div className="grid gap-1.5 grid-cols-1">
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
                          className={`text-left rounded-xl border px-4 py-2 transition-colors ${
                            (showFeedback || shouldRevealAnswer) && isCorrectChoice
                              ? 'border-emerald-300 bg-emerald-50 text-emerald-950'
                              : isWrongSelected
                                ? 'border-rose-300 bg-rose-50 text-rose-950'
                                : isSelected && !shouldRevealAnswer
                                  ? 'border-emerald-300 bg-emerald-50 text-emerald-950'
                                  : 'border-stone-200 bg-white/80 hover:bg-white text-stone-900'
                          }`}
                        >
                          <span className="inline-flex items-start gap-3">
                            <span
                              className={`mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-600 text-white text-xs font-extrabold transition-opacity ${
                                showCorrectMarker ? 'opacity-100' : 'opacity-0'
                              }`}
                              aria-hidden={!showCorrectMarker}
                            >
                              O
                            </span>
                            <span className="mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full border border-stone-200 bg-white text-sm font-extrabold text-stone-700">
                              {choiceIndex + 1}
                            </span>
                            <span className="text-sm md:text-base font-semibold leading-relaxed">{choice}</span>
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

          {!showIntro && filteredQuestions.length === 0 ? (
            <div className="museum-panel p-8 text-center text-stone-600">找不到符合條件的題目，請調整關鍵字或篩選。</div>
          ) : null}
        </div>
      </main>
    </div>
  );
}
