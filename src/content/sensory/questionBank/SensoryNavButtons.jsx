import { BookOpen, FlaskConical, Layers, Leaf, ShieldAlert, ShieldCheck } from 'lucide-react';

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
    case 'ccira':
      return {
        accent: 'bg-orange-500',
        iconBg: 'bg-orange-50',
        iconText: 'text-orange-700',
        Icon: BookOpen,
        activeBorder: 'border-orange-300',
        activeBg: 'bg-orange-50/70',
        activeText: 'text-orange-950',
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

const renderFlipText = (text) => (
  <span className="nav-pill__label--flip">
    <span className="nav-pill__label-inner">
      <span className="nav-pill__label-front truncate">{text}</span>
      <span className="nav-pill__label-back truncate" aria-hidden="true">
        {text}
      </span>
    </span>
  </span>
);

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
      className={`nav-flip-trigger group relative w-full text-left overflow-hidden rounded-2xl border transition will-change-transform ${isActive
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
            <div className={`min-w-0 text-lg font-semibold leading-tight ${compact ? 'truncate' : ''}`}>{renderFlipText(label)}</div>
            {count != null ? <div className="shrink-0 text-base font-semibold opacity-70">({count})</div> : null}
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
      className={`nav-flip-trigger group relative w-full text-left overflow-hidden rounded-xl border transition-colors ${isActive
        ? `${activeBorder} ${activeBg} ${activeText}`
        : 'border-stone-200 bg-white/70 text-stone-900 hover:bg-white'
        }`}
    >
      <span className={`absolute left-0 top-0 h-full w-1 ${tone.accent} opacity-70 group-hover:opacity-90`} />
      <div className="flex items-center justify-between gap-3 px-4 py-1.5">
        <span className="min-w-0 flex-1 text-[17px] font-semibold leading-tight">{renderFlipText(label)}</span>
        <span className="shrink-0 text-base font-semibold opacity-70">({count})</span>
      </div>
    </button>
  );
};

export { MenuButton, TopicButton };
