import { useEffect, useState } from 'react'

function BannerLayout() {
    const [shouldLoadVideo, setShouldLoadVideo] = useState(false)

    useEffect(() => {
        const idleCallback = window.requestIdleCallback?.(() => setShouldLoadVideo(true), { timeout: 1200 })
        const timeoutId = window.setTimeout(() => setShouldLoadVideo(true), 900)

        return () => {
            if (idleCallback) {
                window.cancelIdleCallback?.(idleCallback)
            }
            window.clearTimeout(timeoutId)
        }
    }, [])

    return (
        <div className="relative aspect-[1920/1080] w-full overflow-hidden bg-black/20 md:aspect-[1920/775]">
            <img
                src="/videos/BannerPrincipal.avif"
                alt=""
                aria-hidden="true"
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
            />
            {shouldLoadVideo && (
                <video
                    className="absolute inset-0 block h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster="/videos/BannerPrincipal.avif"
                    src="/videos/BannerPrincipal.av1.mp4"
                />
            )}
        </div>
    )
}

export default BannerLayout
