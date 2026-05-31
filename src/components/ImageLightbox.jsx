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
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-stone-900/95 backdrop-blur-sm animate-fadeIn cursor-zoom-out p-6 md:p-12"
            onClick={onClose}
        >
            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors z-[10000]"
                aria-label="Close"
            >
                <X size={48} strokeWidth={1.5} />
            </button>

            {/* Image Container */}
            <div
                className="relative flex items-center justify-center animate-scaleUp"
                onClick={(e) => e.stopPropagation()} // Prevent click on image from closing
                style={{ maxWidth: '90vw', maxHeight: '90vh' }}
            >
                <img
                    src={imageSrc}
                    alt={altText || 'Enlarged view'}
                    className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl"
                />
                {altText && (
                    <div className="absolute -bottom-10 left-0 right-0 text-center">
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
