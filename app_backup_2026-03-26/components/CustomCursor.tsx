"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isPointerDevice, setIsPointerDevice] = useState(false);

    useEffect(() => {
        // Включаем кастомный курсор только для устройств с мышью
        if (window.matchMedia("(pointer: fine)").matches) {
            setIsPointerDevice(true);
        }
    }, []);

    useEffect(() => {
        if (!isPointerDevice) return;

        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;

        // Инициализация по центру или в нуле (отредактируется при первом движении)
        let mouseX = -100;
        let mouseY = -100;
        let cursorX = -100;
        let cursorY = -100;

        let hasMoved = false;

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            if (!hasMoved) {
                hasMoved = true;
                if (cursor) cursor.style.opacity = '1';
                if (cursorDot) cursorDot.style.opacity = '1';
            }

            // Маленькая точка двигается моментально
            if (cursorDot) {
                cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            }
        };

        const render = () => {
            // Большой круг двигается с интерполяцией (эффект отставания)
            cursorX += (mouseX - cursorX) * 0.15;
            cursorY += (mouseY - cursorY) * 0.15;

            if (cursor) {
                cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
            }

            requestAnimationFrame(render);
        };

        requestAnimationFrame(render);

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Проверяем элементы ввода
            const isInput = target.tagName.toLowerCase() === 'input' || target.tagName.toLowerCase() === 'textarea';
            if (isInput) {
                setIsHovering(false);
                return;
            }

            // Проверяем на кликабельность
            const isClickable = 
                window.getComputedStyle(target).cursor === 'pointer' || 
                target.tagName.toLowerCase() === 'a' || 
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') !== null ||
                target.closest('button') !== null;
                
            setIsHovering(isClickable);
        };

        const onMouseLeave = () => {
             if (cursor) cursor.style.opacity = '0';
             if (cursorDot) cursorDot.style.opacity = '0';
             hasMoved = false;
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseover", onMouseOver);
        window.addEventListener("mouseleave", onMouseLeave);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseover", onMouseOver);
            window.removeEventListener("mouseleave", onMouseLeave);
        };
    }, [isPointerDevice]);

    if (!isPointerDevice) return null;

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: `
                @media (pointer: fine) {
                    body, a, button, [role="button"] {
                        cursor: none !important;
                    }
                }
            ` }} />
            
            {/* The small precise dot */}
            <div 
                ref={cursorDotRef}
                className="fixed top-0 left-0 w-[5px] h-[5px] bg-white rounded-full pointer-events-none z-[9999] opacity-0 transition-opacity duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                style={{ transform: 'translate3d(-50%, -50%, 0)', marginLeft: '-2.5px', marginTop: '-2.5px' }}
            />
            {/* The trailing water drop */}
            <div 
                ref={cursorRef}
                className="fixed top-0 left-0 pointer-events-none z-[9998] opacity-0 flex items-center justify-center container-drop"
                style={{
                    width: isHovering ? '44px' : '20px',
                    height: isHovering ? '44px' : '20px',
                    marginLeft: isHovering ? '-22px' : '-10px',
                    marginTop: isHovering ? '-22px' : '-10px',
                    transition: 'width 0.3s ease, height 0.3s ease, margin 0.3s ease, opacity 0.3s ease',
                    willChange: 'transform',
                }}
            >
                {/* 
                  Inner drop shape: rotated 45 degrees so the top-left corner points straight UP 
                  The top-left corner is sharp (borderRadius 0)
                */}
                <div 
                    className="w-full h-full"
                    style={{
                        backgroundColor: isHovering ? 'rgba(59, 130, 246, 0.15)' : 'rgba(59, 130, 246, 0.05)',
                        borderColor: isHovering ? 'rgba(59, 130, 246, 0.8)' : 'rgba(147, 197, 253, 0.6)',
                        borderWidth: '1.5px',
                        borderStyle: 'solid',
                        borderRadius: '0 50% 50% 50%',
                        transform: 'rotate(45deg)',
                        boxShadow: isHovering ? 'inset 0 0 15px rgba(59,130,246,0.3)' : 'none',
                        transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
                    }}
                />
            </div>
        </>
    );
}

