import React from 'react';

export default function AccordionPanel({
  open,
  children,
  className = '',
  contentClassName = '',
  disablePointerEventsWhenClosed = true,
  style,
}) {
  return (
    <div
      className={`grid overflow-hidden transition-[grid-template-rows] duration-[460ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${className}`}
      style={{ gridTemplateRows: open ? '1fr' : '0fr', ...(style ?? {}) }}
    >
      <div className={`min-h-0 overflow-hidden ${disablePointerEventsWhenClosed ? (open ? 'pointer-events-auto' : 'pointer-events-none') : ''}`}>
        <div
          className={`transition-[opacity,transform] duration-[300ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
            open ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-1 invisible'
          } ${contentClassName}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
