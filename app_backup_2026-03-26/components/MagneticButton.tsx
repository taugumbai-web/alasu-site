"use client";

import { useRef, useState, useEffect } from "react";

export default function MagneticButton({ 
    children, 
    className = "", 
    strength = 0.4,
    distance = 60 // на каком расстоянии начинается "магнит" (в пикселях)
}: { 
    children: React.ReactNode; 
    className?: string;
    strength?: number;
    distance?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Магнит работает только там, где есть настоящая мышь
        if (!window.matchMedia("(pointer: fine)").matches) return;

        const node = ref.current;
        if (!node) return;

        let frameId: number;

        const handleMouseMove = (e: MouseEvent) => {
            // Ограничиваем частоту вызовов через RAF для производительности
            if (frameId) cancelAnimationFrame(frameId);
            
            frameId = requestAnimationFrame(() => {
                const { clientX, clientY } = e;
                const rect = node.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                const dx = clientX - centerX;
                const dy = clientY - centerY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                // Если мышка ближе заданного расстояния - примагничиваем
                if (dist < distance) {
                    const pullX = dx * strength;
                    const pullY = dy * strength;
                    setPosition({ x: pullX, y: pullY });
                } else {
                    setPosition({ x: 0, y: 0 });
                }
            });
        };

        const resetPosition = () => {
            setPosition({ x: 0, y: 0 });
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseout", resetPosition);

        return () => {
            if (frameId) cancelAnimationFrame(frameId);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseout", resetPosition);
        };
    }, [strength, distance]);

    return (
        <div ref={ref} className={`inline-flex items-center justify-center ${className}`}>
            <div 
                style={{
                    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                    // Когда мышка выходит, кнопка отпружинивает обратно (cubic-bezier)
                    transition: (position.x === 0 && position.y === 0)
                        ? "transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.2)" // Пружинистый возврат
                        : "transform 0.1s ease-out", // Плавное следование за курсором
                    willChange: "transform"
                }}
            >
                {children}
            </div>
        </div>
    );
}

