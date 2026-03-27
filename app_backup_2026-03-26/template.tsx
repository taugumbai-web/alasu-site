"use client";

import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Запускаем плавное проявление через долю секунды после монтирования новой страницы
        const timeout = setTimeout(() => setIsMounted(true), 10);
        
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div
            className={`transition-opacity duration-700 ease-in-out ${
                isMounted ? "opacity-100" : "opacity-0"
            }`}
        >
            {children}
        </div>
    );
}

