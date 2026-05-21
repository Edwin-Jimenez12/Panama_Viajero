function BannerLayout() {
    return (
        <div className="relative aspect-[1920/1080] w-full overflow-hidden md:aspect-[1920/775] bg-[radial-gradient(circle_at_top,rgba(236,70,47,0.3),transparent_45%),linear-gradient(135deg,#0a4365_0%,#0f5a86_42%,#f4e4c8_100%)]">
            <div className="absolute " />
            <video
                className="absolute inset-0 block h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                src='/videos/BannerPrincipal.mp4'
            ></video>
        </div>
    )
}

export default BannerLayout
