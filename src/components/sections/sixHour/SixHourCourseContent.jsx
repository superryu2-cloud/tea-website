import React from 'react';
import {
    Clock, BookOpen, ArrowRight, FileText, Leaf, Sparkles, Info,
} from 'lucide-react';
import { sixHourSyllabus, sessionGroups } from './sixHourData';

/* ── 色系對應表 ── */
const colorMap = {
    amber:   { badge: 'bg-amber-50 text-amber-700 border-amber-100/60',   ring: 'ring-amber-400',   dot: 'bg-amber-400',   number: 'bg-amber-100 text-amber-700',   bullet: 'bg-amber-400',   tag: 'bg-amber-50 border-amber-200 text-amber-800',   lessonBadge: 'bg-amber-100 text-amber-800' },
    teal:    { badge: 'bg-teal-50 text-teal-700 border-teal-100/60',     ring: 'ring-teal-400',    dot: 'bg-teal-400',    number: 'bg-teal-100 text-teal-700',     bullet: 'bg-teal-400',    tag: 'bg-teal-50 border-teal-200 text-teal-800',     lessonBadge: 'bg-teal-100 text-teal-800' },
    stone:   { badge: 'bg-stone-100 text-stone-700 border-stone-200/60', ring: 'ring-stone-400',   dot: 'bg-stone-400',   number: 'bg-stone-200 text-stone-700',   bullet: 'bg-stone-400',   tag: 'bg-stone-100 border-stone-200 text-stone-700', lessonBadge: 'bg-stone-200 text-stone-700' },
    emerald: { badge: 'bg-emerald-50 text-emerald-700 border-emerald-100/60', ring: 'ring-emerald-400', dot: 'bg-emerald-400', number: 'bg-emerald-100 text-emerald-700', bullet: 'bg-emerald-400', tag: 'bg-emerald-50 border-emerald-200 text-emerald-800', lessonBadge: 'bg-emerald-100 text-emerald-800' },
};

/* ── 單堂課詳細內容（直接展開，不折疊）── */
function LessonDetail({ lesson, handleTabAction }) {
    const c = colorMap[lesson.color];
    const Icon = lesson.icon;
    const s = lesson.syllabusDetail;

    return (
        <div className="rounded-2xl border border-stone-200 bg-white shadow-sm overflow-hidden">
            {/* 堂課 Header */}
            <div className={`flex items-center gap-4 px-5 py-4 border-b border-stone-100 bg-gradient-to-r from-stone-50 to-white`}>
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${c.badge} shrink-0`}>
                    <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                    <p className="text-[11px] font-bold text-stone-400 tracking-widest uppercase">{lesson.session} · {lesson.duration}</p>
                    <h4 className="text-[17px] font-bold text-stone-800 font-serif leading-snug">{lesson.title}</h4>
                </div>
            </div>

            <div className="px-5 py-5 space-y-5">
                {/* 課程描述 + 標籤 */}
                <div>
                    <p className="text-[15px] text-stone-600 leading-relaxed mb-3">{lesson.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {lesson.tags.map((tag) => (
                            <span key={tag} className={`text-[12px] px-2.5 py-1 rounded-lg border font-medium ${c.tag}`}>{tag}</span>
                        ))}
                    </div>
                    {lesson.notice && (
                        <div className="flex items-center gap-2 mt-3 px-3 py-2 rounded-xl bg-amber-50 text-amber-800 text-xs font-bold border border-amber-100">
                            <Info size={13} className="text-amber-600 shrink-0" />
                            <span>{lesson.notice}</span>
                        </div>
                    )}
                </div>

                {/* 分隔線 */}
                <div className="border-t border-stone-100" />

                {/* 課程目標 */}
                <div className="bg-stone-50 rounded-xl p-4 border border-stone-100">
                    <p className="text-[11px] font-bold text-stone-400 tracking-widest uppercase mb-3">課程目標</p>
                    <p className="text-[15px] text-stone-700 font-medium leading-relaxed">{s.courseGoal}</p>
                </div>

                {/* 單元規劃 */}
                <div>
                    <p className="text-[11px] font-bold text-stone-400 tracking-widest uppercase mb-4">單元規劃</p>
                    <div className="space-y-4">
                        {s.units.map((unit, ui) => (
                            <div key={ui} className="pl-4 border-l-[3px] border-stone-200">
                                <div className="flex items-center gap-2.5 mb-3">
                                    <span className={`w-6 h-6 rounded-lg ${c.number} flex items-center justify-center font-bold text-[13px] shrink-0`}>{ui + 1}</span>
                                    <h5 className="text-[15px] font-bold text-stone-800">{unit.title}</h5>
                                </div>
                                <ul className="space-y-2 pl-9">
                                    {unit.items.map((item, ii) => (
                                        <li key={ii} className="flex items-start gap-2.5">
                                            <span className={`w-1.5 h-1.5 rounded-full ${c.bullet} mt-[7px] shrink-0`} />
                                            <span className="text-[14px] text-stone-600 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 教學方式 + 堂末評量 */}
                <div className="grid sm:grid-cols-2 gap-3">
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-100">
                        <p className="text-[11px] font-bold text-stone-400 tracking-widest uppercase mb-2">教學方式</p>
                        <p className="text-[14px] text-stone-700 leading-relaxed">{s.teachingMethod}</p>
                    </div>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-100">
                        <p className="text-[11px] font-bold text-stone-400 tracking-widest uppercase mb-2">堂末評量</p>
                        <p className="text-[14px] text-stone-700 leading-relaxed">{s.evaluation}</p>
                    </div>
                </div>

                {/* 跳轉按鈕 */}
                {lesson.action && (
                    <button
                        type="button"
                        onClick={() => handleTabAction(lesson.action.tab)}
                        className={`flex items-center justify-between w-full p-3.5 rounded-xl bg-stone-50 hover:bg-stone-100 border border-stone-200/60 transition-colors group/btn`}
                    >
                        <span className="text-[14px] font-bold text-stone-600">前往本站對應資源：{lesson.action.label}</span>
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center bg-white shadow-sm border border-stone-200 group-hover/btn:ring-2 ${c.ring}`}>
                            <ArrowRight size={14} />
                        </div>
                    </button>
                )}
            </div>
        </div>
    );
}

/* ── 主元件：六小時課程完整內容 ── */
export default function SixHourCourseContent({ handleTabAction }) {
    // 依 sessionGroup 分組
    const grouped = sessionGroups.map((sg) => ({
        ...sg,
        lessons: sixHourSyllabus.filter((l) => l.sessionGroup === sg.id),
    }));

    return (
        <>
            {/* 頂部大看板 */}
            <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-stone-900 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden mb-12">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 max-w-3xl">
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-bold tracking-widest uppercase mb-4">
                        INTUITIVE COURSE PATHWAY
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 leading-tight">茶道入門課程 · 實體化學習地圖</h2>
                    <p className="text-stone-300 text-base md:text-lg leading-relaxed mb-6">
                        每週二晚上 7:00 – 9:00，每次 2 小時（共 3 次課程，每小時一個單元，共 6 堂課）。
                        本課程融合歷史、美學、科學與工藝，引導您從茶學通識，優雅邁向專注瀹泡的茶人境界。
                    </p>
                    <div className="flex flex-wrap gap-6 text-sm text-stone-300">
                        <span className="flex items-center gap-1.5"><Clock size={16} className="text-emerald-400" /> 共 6 小時</span>
                        <span className="flex items-center gap-1.5"><BookOpen size={16} className="text-emerald-400" /> 6 堂系統單元</span>
                        <span className="flex items-center gap-1.5"><Sparkles size={16} className="text-emerald-400" /> 2 次瀹泡實戰</span>
                    </div>
                </div>
            </div>

            {/* 三次課程 Session 分組，每堂課直接展開詳細內容 */}
            <div className="space-y-14">
                {grouped.map((sg) => (
                    <div key={sg.id}>
                        {/* Session 標題列 */}
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-stone-200">
                            <div>
                                <p className="text-[11px] font-bold text-stone-400 tracking-widest uppercase mb-1">SESSION {sg.id}</p>
                                <h3 className="text-2xl font-bold text-emerald-800 font-serif">{sg.label}</h3>
                                <p className="text-[14px] text-stone-500 font-medium mt-0.5">{sg.subtitle}</p>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-100">
                                {sg.range}
                            </span>
                        </div>

                        {/* 本 Session 的課程卡片（含詳細內容）*/}
                        <div className="space-y-6">
                            {sg.lessons.map((lesson) => (
                                <LessonDetail key={lesson.id} lesson={lesson} handleTabAction={handleTabAction} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* 課程特色看板 */}
            <div className="mt-14 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100/60 rounded-3xl p-8 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-4 translate-y-4">
                    <Leaf size={120} className="text-emerald-800 rotate-12" />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-md">
                        <Leaf size={28} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-stone-800 font-serif mb-2">🌿 課程特色</h3>
                        <p className="text-[17px] text-stone-700 font-medium leading-relaxed">
                            從認識茶葉開始，循序漸進學習茶席佈置、常用茶具、事茶九式儀軌與茶湯瀹泡工藝。
                            課程不僅傳授品茗美學，更注重學員的親手實作操持與心境涵養。
                        </p>
                    </div>
                </div>
            </div>

            {/* 六堂詳細大綱文字提示（已整合上方，省略重複區塊）*/}
            <div className="flex items-center gap-3 mt-10 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <FileText size={18} className="text-stone-400 shrink-0" />
                <p className="text-[14px] text-stone-500 font-medium">
                    以上六堂課的完整教學規劃、單元目標與堂末評量已全數展示於上方各 Session 卡片中。
                </p>
            </div>
        </>
    );
}
