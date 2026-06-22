import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

export default function ImageLightbox({ isOpen, onClose, imageSrc, altText }) {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    if (!isOpen || !imageSrc) return null;

    return createPortal(
        <div
	            className="fixed inset-0 z-[10000] flex cursor-zoom-out items-center justify-center bg-stone-900/95 p-4 backdrop-blur-sm animate-fadeIn md:p-12"
            onClick={onClose}
        >
            {/* Close button */}
            <button
                onClick={onClose}
	                className="absolute right-4 top-4 z-[10001] p-2 text-white/70 transition-colors hover:text-white md:right-6 md:top-6"
                aria-label="Close"
            >
                <X size={48} strokeWidth={1.5} />
            </button>

            {/* Image Container */}
            <div
	                className="relative flex max-h-[calc(100vh-2rem)] max-w-[92vw] flex-col items-center justify-center gap-3 animate-scaleUp"
	                onClick={(e) => e.stopPropagation()} // Prevent click on image from closing
	            >
	                <img
	                    src={imageSrc}
	                    alt={altText || 'Enlarged view'}
	                    className="max-h-[calc(100vh-7rem)] max-w-full object-contain rounded shadow-2xl md:max-h-[90vh]"
	                />
	                {altText && (
	                    <div className="max-w-full text-center">
                        <p className="text-stone-300 text-sm font-medium tracking-wide">{altText}</p>
                    </div>
                )}
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-scaleUp {
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
        </div>,
        document.body
    );
}
