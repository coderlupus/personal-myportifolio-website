
import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger to ensure it interacts correctly with GSAP
gsap.registerPlugin(ScrollTrigger);

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        });

        // Integrate Lenis with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        // Sync Lenis's requestAnimationFrame with GSAP's ticker for performance
        const update = (time: number) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(update);

        // Disable lag smoothing in GSAP to prevent jumps during heavy loads
        gsap.ticker.lagSmoothing(0);

        return () => {
            // Cleanup on unmount
            gsap.ticker.remove(update);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
};
