import React, { useState, useRef, useEffect } from 'react';

/**
 * DraggableWrapper 元件
 * 提供支援滑鼠拖曳與行動端觸控 Touch 的絕對定位包裹器。
 * 具有精準的父容器邊界碰撞限制，並提供微動效與高級質感反饋。
 */
const DraggableWrapper = ({ children, initialPos = { x: 0, y: 0 }, className = "", disabled = false }) => {
    const [pos, setPos] = useState(initialPos);
    const [dragging, setDragging] = useState(false);
    const rel = useRef(null);
    const wrapperRef = useRef(null);

    // 同步初始位置設定（保障狀態一致性與防禦性）
    useEffect(() => {
        setPos(initialPos);
    }, [initialPos]);

    const startDrag = (clientX, clientY, e) => {
        if (disabled) return;
        
        // 僅當點擊在 .drag-handle 或是 .draggable-item 等設定了拖曳把手的元素上時才觸發
        if (
            e.target.closest('.drag-handle') || 
            e.target.classList.contains('draggable-item') || 
            e.target.closest('.draggable-item')
        ) {
            setDragging(true);
            rel.current = {
                startX: clientX,
                startY: clientY,
                offsetX: pos.x,
                offsetY: pos.y
            };
            e.stopPropagation();
            if (e.cancelable) {
                e.preventDefault();
            }
        }
    };

    const onMouseDown = (e) => {
        startDrag(e.pageX, e.pageY, e);
    };

    const onTouchStart = (e) => {
        if (e.touches.length > 0) {
            startDrag(e.touches[0].pageX, e.touches[0].pageY, e);
        }
    };

    useEffect(() => {
        const onDragMove = (clientX, clientY) => {
            if (!dragging || !rel.current || !wrapperRef.current) return;

            // 計算拖動後的新 X, Y 座標
            let newX = rel.current.offsetX + (clientX - rel.current.startX);
            let newY = rel.current.offsetY + (clientY - rel.current.startY);

            // 🌟 核心邊界碰撞安全限制：防止茶具物件飛出茶席畫布外 🌟
            const parent = wrapperRef.current.parentElement;
            if (parent) {
                const parentWidth = parent.clientWidth;
                const parentHeight = parent.clientHeight;
                const myWidth = wrapperRef.current.clientWidth;
                const myHeight = wrapperRef.current.clientHeight;

                // 限制在父容器 client 範圍內 [0, max_bound]
                newX = Math.max(0, Math.min(newX, parentWidth - myWidth));
                newY = Math.max(0, Math.min(newY, parentHeight - myHeight));
            }

            setPos({ x: newX, y: newY });
        };

        const onMouseMove = (e) => {
            onDragMove(e.pageX, e.pageY);
        };

        const onTouchMove = (e) => {
            if (e.touches.length > 0) {
                onDragMove(e.touches[0].pageX, e.touches[0].pageY);
            }
        };

        const stopDrag = () => {
            setDragging(false);
        };

        if (dragging) {
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', stopDrag);
            window.addEventListener('touchmove', onTouchMove, { passive: false });
            window.addEventListener('touchend', stopDrag);
            window.addEventListener('touchcancel', stopDrag);
        }

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', stopDrag);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', stopDrag);
            window.removeEventListener('touchcancel', stopDrag);
        };
    }, [dragging]);

    return (
        <div
            ref={wrapperRef}
            className={`draggable-card transition-all duration-[30ms] ease-out select-none ${
                dragging 
                    ? 'z-50 shadow-[0_25px_60px_rgba(0,0,0,0.35)] scale-[1.05] rotate-[1.5deg] cursor-grabbing' 
                    : 'z-10 hover:shadow-lg hover:scale-[1.02] cursor-grab'
            } ${className}`}
            style={{
                left: `${pos.x}px`,
                top: `${pos.y}px`,
                position: 'absolute',
                touchAction: 'none' // 禁用觸控螢幕預設手勢，防止拖曳時造成手機瀏覽器滑動
            }}
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
        >
            {children}
        </div>
    );
};

export default DraggableWrapper;
