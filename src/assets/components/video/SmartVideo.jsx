import { useEffect, useRef, useState } from 'react';

function SmartVideo({
    src,
    className,
    poster,
    preload = 'none',
    eager = false,
    rootMargin = '200px',
    ...props
}) {
    const videoRef = useRef(null);
    const [shouldLoad, setShouldLoad] = useState(eager);
    const [isVisible, setIsVisible] = useState(eager);

    useEffect(() => {
        if (eager || !videoRef.current) {
            return undefined;
        }

        const node = videoRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                const visible = entry.isIntersecting;
                if (visible) {
                    setShouldLoad(true);
                }
                setIsVisible(visible);
            },
            { rootMargin, threshold: 0.15 },
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [eager, rootMargin]);

    useEffect(() => {
        const node = videoRef.current;
        if (!node || !shouldLoad) {
            return;
        }

        if (isVisible) {
            const playPromise = node.play();
            if (playPromise?.catch) {
                playPromise.catch(() => {});
            }
            return;
        }

        node.pause();
    }, [isVisible, shouldLoad]);

    return (
        <video
            ref={videoRef}
            src={shouldLoad ? src : undefined}
            className={className}
            poster={poster}
            preload={shouldLoad ? preload : 'none'}
            muted
            loop
            playsInline
            {...props}
        />
    );
}

export default SmartVideo;
