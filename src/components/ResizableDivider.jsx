import React, { useCallback, useRef, useState } from 'react';

/**
 * ResizableDivider - A draggable vertical divider for resizing sidebar
 * @param {Function} onResize - Callback function when divider is dragged
 * @param {number} minWidth - Minimum sidebar width in pixels
 * @param {number} maxWidth - Maximum sidebar width in pixels
 */
const ResizableDivider = ({ onResize, minWidth = 200, maxWidth = 500, className = '' }) => {
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef(null);

  const handleMouseDown = useCallback(
    (event) => {
      event.preventDefault();
      const sidebar = event.currentTarget.previousElementSibling;
      const startWidth = sidebar ? sidebar.getBoundingClientRect().width : minWidth;
      dragRef.current = { startX: event.clientX, startWidth };
      setIsDragging(true);

      const handleMouseMove = (moveEvent) => {
        if (!dragRef.current) return;
        const delta = moveEvent.clientX - dragRef.current.startX;
        const nextWidth = dragRef.current.startWidth + delta;
        const constrainedWidth = Math.min(Math.max(nextWidth, minWidth), maxWidth);
        onResize?.(constrainedWidth);
      };

      const handleMouseUp = () => {
        setIsDragging(false);
        dragRef.current = null;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    },
    [minWidth, maxWidth, onResize],
  );

  return (
    <div
      className={`relative flex items-center justify-center cursor-col-resize group ${className}`}
      style={{
        width: '16px',
        userSelect: 'none',
        marginLeft: '-8px',
        marginRight: '-8px',
        zIndex: 70,
      }}
      onMouseDown={handleMouseDown}
      role="separator"
      aria-orientation="vertical"
      aria-label="調整左側欄寬度"
    >
      {/* Central grip indicator */}
      <div
        className={`
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-1 h-12 rounded-sm
          transition-all duration-200
          ${isDragging
            ? 'bg-gradient-to-b from-transparent via-amber-500 to-transparent opacity-100'
            : 'bg-gradient-to-b from-transparent via-stone-400 to-transparent opacity-0 group-hover:opacity-100'
          }
        `}
      />

      {/* Full-height divider line */}
      <div
        className={`
          absolute left-1/2 -translate-x-1/2
          h-full transition-all duration-200
          ${isDragging
            ? 'w-0.5 bg-gradient-to-b from-transparent via-amber-500 to-transparent opacity-100'
            : 'w-px bg-gradient-to-b from-transparent via-stone-300 to-transparent opacity-60 group-hover:opacity-100 group-hover:w-0.5 group-hover:via-amber-500'
          }
        `}
      />
    </div>
  );
};

export default ResizableDivider;
