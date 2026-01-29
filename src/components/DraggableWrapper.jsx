import React, { useState, useRef, useEffect } from 'react';

const DraggableWrapper = ({ children, initialPos = { x: 0, y: 0 }, id, className = "", disabled = false }) => {
    const [pos, setPos] = useState(initialPos);
    const [dragging, setDragging] = useState(false);
    const rel = useRef(null);

    const onMouseDown = (e) => {
        if (disabled) return;
        // Drag if clicked on handle or the item itself (if tagged)
        if (e.target.closest('.drag-handle') || e.target.classList.contains('draggable-item')) {
            setDragging(true);
            rel.current = {
                x: e.pageX - pos.x,
                y: e.pageY - pos.y
            };
            e.stopPropagation();
            e.preventDefault();
        }
    };

    useEffect(() => {
        const onMouseMove = (e) => {
            if (!dragging) return;
            const newPos = {
                x: e.pageX - rel.current.x,
                y: e.pageY - rel.current.y
            };
            setPos(newPos);
        };

        const onMouseUp = () => {
            setDragging(false);
        };

        if (dragging) {
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };
    }, [dragging]);

    return (
        <div
            className={`draggable-card transition-shadow ${dragging ? 'z-50 shadow-2xl scale-105' : 'z-10'} ${className}`}
            style={{
                left: `${pos.x}px`,
                top: `${pos.y}px`,
                position: 'absolute'
            }}
            onMouseDown={onMouseDown}
        >
            {children}
        </div>
    );
};

export default DraggableWrapper;
