import { ChevronDown, Eye, EyeOff, RotateCcw, Search } from 'lucide-react';
import AccordionPanel from '../../../components/AccordionPanel';
import { MenuButton, TopicButton } from './SensoryNavButtons';

export default function QuestionBankSidebar({
  sidebarScrollRef,
  query,
  onQueryChange,
  revealAnswers,
  onToggleRevealAnswers,
  onClearAnswers,
  bankTree,
  expandedBankKeys,
  activeBank,
  selectedTopic,
  activeMode,
  onToggleBankNode,
  onSelectBankQuestions,
  onSelectTopic,
  onSelectEssay,
}) {
  return (
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
                onChange={(event) => onQueryChange(event.target.value)}
                placeholder="搜尋題目、關鍵字、主題或題號..."
                className="w-full rounded-xl border border-stone-200 bg-white/80 pl-10 pr-4 py-2.5 text-base font-semibold text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-600/25"
              />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={onToggleRevealAnswers}
              className={`group inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-base font-extrabold transition-all ${
                revealAnswers
                  ? 'border-sky-300 bg-gradient-to-r from-sky-100 via-sky-50 to-white text-sky-950 shadow-sm'
                  : 'border-stone-200 bg-white/80 text-stone-800 hover:-translate-y-0.5 hover:shadow-md'
              }`}
            >
              {revealAnswers ? (
                <EyeOff size={16} className="text-sky-700" />
              ) : (
                <Eye size={16} className="text-stone-500 group-hover:text-sky-600" />
              )}
              {revealAnswers ? '關閉答案' : '顯示答案'}
            </button>

            <button
              type="button"
              onClick={onClearAnswers}
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-rose-200 bg-gradient-to-r from-rose-50 via-white to-rose-50 px-4 py-2.5 text-base font-extrabold text-rose-900 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <RotateCcw size={16} className="text-rose-500 group-hover:text-rose-600" />
              清除作答
            </button>
          </div>
        </div>
      </div>

      <div className="museum-frame museum-paper p-5 md:p-6">
        <div className="text-sm font-semibold tracking-widest text-stone-500">題庫分類</div>
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
                      className={`transition-transform duration-[320ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                        isExpanded ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  }
                  onClick={() => onToggleBankNode(stateKey)}
                />

                <AccordionPanel open={isExpanded}>
                  <div className="ml-3 pl-3 border-l border-stone-200/70 space-y-1.5 pt-2">
                    <TopicButton
                      toneKey={nodeToneKey}
                      isActive={!selectedTopic && nodeSelected}
                      label="全部題目"
                      count={node.count}
                      onClick={() => onSelectBankQuestions(stateKey)}
                    />

                    {node.topics.length > 0 ? (
                      node.topics.map((topic) => (
                        <TopicButton
                          key={topic.topic}
                          toneKey={stateKey === 'all' ? topic.bankKey ?? 'all' : nodeToneKey}
                          isActive={
                            selectedTopic === topic.topic &&
                            (stateKey !== 'all' || !activeBank || activeBank === topic.bankKey)
                          }
                          label={topic.label}
                          count={topic.count}
                          onClick={() => onSelectTopic(stateKey, topic)}
                        />
                      ))
                    ) : (
                      <div className="rounded-xl border border-stone-200 bg-white/60 px-4 py-2 text-sm font-semibold text-stone-500">
                        暫無題目
                      </div>
                    )}

                    {(stateKey === 'ccira' || stateKey === 'all') && (
                      <TopicButton
                        toneKey={stateKey === 'all' ? 'ccira' : nodeToneKey}
                        isActive={
                          activeMode === 'essay' &&
                          (stateKey !== 'all' || !activeBank || activeBank === 'ccira')
                        }
                        label="茶研所申論題"
                        count={10}
                        onClick={() => onSelectEssay(stateKey)}
                      />
                    )}
                  </div>
                </AccordionPanel>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
