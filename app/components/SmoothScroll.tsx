"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.08, // Насколько "маслянистым" будет скролл (от 0 до 1)
            duration: 1.2, // Длительность скролла
            smoothWheel: true, // Плавность для колесика мыши
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy(); // Очищаем по завершению
        };
    }, []);

    return <>{children}</>;
}

