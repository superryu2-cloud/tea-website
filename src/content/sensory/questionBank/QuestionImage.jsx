import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

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
  const [failedSrc, setFailedSrc] = useState(null);
  const src = deriveImageSrc(question);
  const failed = failedSrc === src;

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
          onError={() => setFailedSrc(src)}
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

export default QuestionImage;
