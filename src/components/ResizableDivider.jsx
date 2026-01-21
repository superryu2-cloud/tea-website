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
      className={`relative flex items-center justify-center cursor-col-resize ${className}`}
      style={{
        width: '16px',
        userSelect: 'none',
        marginLeft: '-8px',
        marginRight: '-8px',
      }}
      onMouseDown={handleMouseDown}
      role="separator"
      aria-orientation="vertical"
      aria-label="Resize sidebar"
    >
      <div
        className={`
          absolute left-1/2 -translate-x-1/2
          w-px h-full
          transition-opacity duration-150
          ${isDragging ? 'bg-emerald-500 opacity-100' : 'bg-stone-300 opacity-75 hover:opacity-100'}
        `}
      />
    </div>
  );
};

export default ResizableDivider;
