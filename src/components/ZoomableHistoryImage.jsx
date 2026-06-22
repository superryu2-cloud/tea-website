import { useState } from 'react';
import { Search } from 'lucide-react';
import ImageLightbox from './ImageLightbox';

export default function ZoomableHistoryImage({
  src,
  alt,
  containerClassName,
  imgClassName,
  overlayClassName,
  children,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={containerClassName}>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group absolute inset-0 h-full w-full cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/70"
        aria-label={`${alt || '圖片'}（點擊放大）`}
      >
        <img src={src} alt={alt} className={imgClassName} />
        {overlayClassName ? <div className={overlayClassName} /> : null}
        {children}
        <span className="absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-stone-700 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
          <Search size={18} />
        </span>
      </button>
      <ImageLightbox
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        imageSrc={src}
        altText={alt}
      />
    </div>
  );
}
