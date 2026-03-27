"use client";

import { useEffect, useRef } from "react";

export default function Particles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let w = (canvas.width = window.innerWidth);
        let h = (canvas.height = window.innerHeight);
        
        const handleResize = () => {
             w = (canvas.width = window.innerWidth);
             h = (canvas.height = window.innerHeight);
        };
        window.addEventListener("resize", handleResize);

        const particles: {x: number, y: number, r: number, vx: number, vy: number, alpha: number, drift: number}[] = [];
        const numParticles = 70;

        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                r: Math.random() * 1.5 + 0.5,
                vx: (Math.random() - 0.5) * 0.2, // Горизонтальный ветер
                vy: (Math.random() - 0.5) * 0.2 - 0.3, // Медленно плывут вверх
                alpha: Math.random() * 0.5 + 0.1,
                drift: Math.random() * Math.PI * 2 // Для плавного покачивания
            });
        }

        let animationFrameId: number;
        
        const render = () => {
            ctx.clearRect(0, 0, w, h);
            
            particles.forEach((p) => {
                // Синусоидальное покачивание (дрейф по ветру)
                p.drift += 0.01;
                const wind = Math.sin(p.drift) * 0.2;
                
                p.x += p.vx + wind;
                p.y += p.vy;

                // Перемещение частиц, ушедших за край, обратно с другой стороны
                if (p.x < -10) p.x = w + 10;
                if (p.x > w + 10) p.x = -10;
                if (p.y < -10) p.y = h + 10;
                if (p.y > h + 10) p.y = -10;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
                // Легкое свечение
                ctx.shadowBlur = 4;
                ctx.shadowColor = "rgba(147, 197, 253, 0.4)";
                ctx.fill();
            });
            
            animationFrameId = requestAnimationFrame(render);
        };
        
        render();

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // pointer-events-none гарантирует, что канвас не перекроет клики по кнопкам сайта
    return (
        <canvas 
            ref={canvasRef} 
            className="fixed inset-0 pointer-events-none z-[5]" 
            style={{ opacity: 0.8 }} 
        />
    );
}

