import React, { useEffect, useMemo, useState } from 'react';
import { Clipboard, Lightbulb, Save, ShieldCheck, Sparkles } from 'lucide-react';
import {
  AI_PLANNER_AUDIENCES,
  AI_PLANNER_DURATIONS,
  AI_PLANNER_ROLES,
  AI_PLANNER_SAVED_PLANS_KEY,
  AI_PLANNER_STORAGE_KEY,
  AI_PLANNER_STYLES,
  AI_PLANNER_TYPES,
  buildAIPlannerPrompt,
} from '../../config/aiPlannerRoles';

const initialDraft = {
  type: '課程',
  topic: '',
  audience: '茶道班學生',
  duration: '90 分鐘',
  style: '專業清楚',
  notes: '',
};

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-extrabold text-stone-700">{label}</span>
      {children}
    </label>
  );
}

function SelectField({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm font-bold text-stone-800 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

function readStorage(key, fallback) {
  if (typeof window === 'undefined') return fallback;
  try {
    const saved = window.localStorage?.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

function formatPlanTime(value) {
  if (!value) return '尚未紀錄';
  try {
    return new Date(value).toLocaleString('zh-TW', {
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return '尚未紀錄';
  }
}

export default function AIPlannerRoom() {
  const [draft, setDraft] = useState(() => ({
    ...initialDraft,
    ...readStorage(AI_PLANNER_STORAGE_KEY, initialDraft),
  }));
  const [savedPlans, setSavedPlans] = useState(() => readStorage(AI_PLANNER_SAVED_PLANS_KEY, []));
  const [copied, setCopied] = useState(false);
  const [savedNotice, setSavedNotice] = useState(false);

  useEffect(() => {
    try {
      window.localStorage?.setItem(AI_PLANNER_STORAGE_KEY, JSON.stringify(draft));
    } catch {
      // localStorage may be unavailable in private contexts.
    }
  }, [draft]);

  useEffect(() => {
    try {
      window.localStorage?.setItem(AI_PLANNER_SAVED_PLANS_KEY, JSON.stringify(savedPlans));
    } catch {
      // localStorage may be unavailable in private contexts.
    }
  }, [savedPlans]);

  const prompt = useMemo(() => buildAIPlannerPrompt(draft), [draft]);
  const currentPlanTitle = draft.topic.trim() || `${draft.type}企劃草稿`;

  const updateDraft = (key, value) => {
    setDraft((current) => ({ ...current, [key]: value }));
  };

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const savePlan = () => {
    const plan = {
      id: `plan-${Date.now()}`,
      title: currentPlanTitle,
      summary: `${draft.type} · ${draft.audience} · ${draft.duration}`,
      updatedAt: new Date().toISOString(),
      draft,
    };

    setSavedPlans((current) => [plan, ...current.filter((item) => item.title !== plan.title)].slice(0, 12));
    setSavedNotice(true);
    window.setTimeout(() => setSavedNotice(false), 1800);
  };

  const loadPlan = (plan) => {
    setDraft({ ...initialDraft, ...plan.draft });
  };

  const deletePlan = (planId) => {
    setSavedPlans((current) => current.filter((plan) => plan.id !== planId));
  };

  return (
    <section className="museum-page">
      <div className="museum-stage space-y-8 py-10">
        <header className="overflow-hidden rounded-[2rem] border border-emerald-200 bg-gradient-to-br from-emerald-950 via-stone-900 to-amber-950 p-6 text-white shadow-2xl md:p-8">
          <div className="grid gap-6 md:grid-cols-[1.4fr_0.8fr] md:items-end">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200/30 bg-white/10 px-4 py-2 text-xs font-extrabold tracking-[0.22em] text-emerald-100">
                <Sparkles size={15} />
                TEACHER AI PLANNING ROOM
              </div>
              <h1 className="text-4xl font-black tracking-wide md:text-5xl">AI 企劃室</h1>
              <p className="mt-4 max-w-2xl text-base font-semibold leading-8 text-emerald-50/85">
                把茶學經驗轉成課程、文章、茶會、圖片企劃與商品化草稿。這裡是教師自用工作台，不會自動改動學生看到的網站內容。
              </p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur">
              <div className="flex items-center gap-2 text-sm font-extrabold text-emerald-100">
                <ShieldCheck size={18} />
                安全策略
              </div>
              <ul className="mt-3 space-y-2 text-sm font-semibold leading-6 text-white/80">
                <li>先產生企劃草稿</li>
                <li>不自動覆蓋課程頁</li>
                <li>由你審核後再導入網站</li>
              </ul>
            </div>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-[2rem] border border-stone-200 bg-white/92 p-5 shadow-sm md:p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                <Lightbulb size={22} />
              </div>
              <div>
                <h2 className="text-2xl font-black text-stone-900">企劃輸入</h2>
                <p className="text-sm font-semibold text-stone-500">先把需求說清楚，AI 團隊才好分工。</p>
              </div>
            </div>

            <div className="grid gap-4">
              <Field label="企劃類型">
                <SelectField value={draft.type} onChange={(value) => updateDraft('type', value)} options={AI_PLANNER_TYPES} />
              </Field>
              <Field label="主題">
                <input
                  value={draft.topic}
                  onChange={(event) => updateDraft('topic', event.target.value)}
                  placeholder="例如：蓋碗教學、文山包種茶、氧化、紫砂壺泥料"
                  className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm font-bold text-stone-800 shadow-sm outline-none transition placeholder:text-stone-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                />
              </Field>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="對象">
                  <SelectField value={draft.audience} onChange={(value) => updateDraft('audience', value)} options={AI_PLANNER_AUDIENCES} />
                </Field>
                <Field label="時間長度">
                  <SelectField value={draft.duration} onChange={(value) => updateDraft('duration', value)} options={AI_PLANNER_DURATIONS} />
                </Field>
              </div>
              <Field label="風格">
                <SelectField value={draft.style} onChange={(value) => updateDraft('style', value)} options={AI_PLANNER_STYLES} />
              </Field>
              <Field label="補充資料">
                <textarea
                  value={draft.notes}
                  onChange={(event) => updateDraft('notes', event.target.value)}
                  rows={6}
                  placeholder="可貼上課堂筆記、學生程度、茶品、想避開的說法、圖片需求等。"
                  className="w-full resize-y rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm font-semibold leading-7 text-stone-800 shadow-sm outline-none transition placeholder:text-stone-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                />
              </Field>
            </div>
          </section>

          <section className="space-y-5 rounded-[2rem] border border-stone-200 bg-white/92 p-5 shadow-sm md:p-6">
            <div>
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-black text-stone-900">AI 團隊角色</h2>
                  <p className="text-sm font-semibold text-stone-500">六個角色各司其職，最後合成完整提示詞。</p>
                </div>
                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-extrabold text-amber-800">v1 草稿模式</span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {AI_PLANNER_ROLES.map((role) => (
                  <article key={role.key} className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                    <h3 className="text-lg font-black text-stone-900">{role.title}</h3>
                    <p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{role.focus}</p>
                    <p className="mt-3 rounded-xl bg-white px-3 py-2 text-xs font-bold leading-5 text-stone-500">{role.output}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-black text-stone-900">企劃存檔區</h3>
                  <p className="text-sm font-semibold text-stone-600">最多保留 12 份草稿，適合存放崇華課程、茶會與文章企劃。</p>
                </div>
                <button
                  type="button"
                  onClick={savePlan}
                  className="inline-flex items-center gap-2 rounded-2xl bg-emerald-700 px-4 py-3 text-sm font-extrabold text-white shadow-sm transition hover:bg-emerald-800"
                >
                  <Save size={17} />
                  {savedNotice ? '已存檔' : '存成企劃案'}
                </button>
              </div>

              {savedPlans.length > 0 ? (
                <div className="mt-4 grid gap-3">
                  {savedPlans.map((plan) => (
                    <article key={plan.id} className="rounded-2xl border border-white bg-white/90 p-4 shadow-sm">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h4 className="text-base font-black text-stone-900">{plan.title}</h4>
                          <p className="mt-1 text-xs font-bold text-stone-500">{plan.summary} · {formatPlanTime(plan.updatedAt)}</p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => loadPlan(plan)}
                            className="rounded-xl bg-stone-900 px-3 py-2 text-xs font-extrabold text-white transition hover:bg-stone-700"
                          >
                            載入
                          </button>
                          <button
                            type="button"
                            onClick={() => deletePlan(plan.id)}
                            className="rounded-xl border border-stone-200 bg-white px-3 py-2 text-xs font-extrabold text-stone-600 transition hover:bg-stone-50"
                          >
                            刪除
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <p className="mt-4 rounded-2xl border border-dashed border-emerald-200 bg-white/70 px-4 py-5 text-sm font-bold text-stone-500">
                  還沒有存檔。輸入主題後按「存成企劃案」，之後就可以快速載入。
                </p>
              )}
            </div>
          </section>
        </div>

        <section className="rounded-[2rem] border border-stone-200 bg-white/92 p-5 shadow-sm md:p-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-black text-stone-900">產生給 Codex / ChatGPT 的提示詞</h2>
              <p className="text-sm font-semibold text-stone-500">複製後貼給 AI，即可開始產出完整企劃。</p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={copyPrompt}
                className="inline-flex items-center gap-2 rounded-2xl bg-emerald-700 px-4 py-3 text-sm font-extrabold text-white shadow-sm transition hover:bg-emerald-800"
              >
                <Clipboard size={17} />
                {copied ? '已複製' : '複製提示詞'}
              </button>
              <button
                type="button"
                onClick={() => setDraft(initialDraft)}
                className="inline-flex items-center gap-2 rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm font-extrabold text-stone-700 transition hover:bg-stone-50"
              >
                <Save size={17} />
                清空輸入
              </button>
            </div>
          </div>
          <pre className="max-h-[520px] overflow-auto whitespace-pre-wrap rounded-3xl border border-stone-200 bg-stone-950 p-5 text-sm font-semibold leading-7 text-emerald-50 shadow-inner">
            {prompt}
          </pre>
        </section>
      </div>
    </section>
  );
}
