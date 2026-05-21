const Banner = 'https://res.cloudinary.com/dur8qmwlg/video/upload/v1779136864/PanamaViajero_nwczap.mp4'

function BannerLayout() {
    return (
        <div className="relative aspect-[1920/1080] w-full overflow-hidden md:aspect-[1920/775]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,70,47,0.3),transparent_45%),linear-gradient(135deg,#0a4365_0%,#0f5a86_42%,#f4e4c8_100%)]" />
            <video
                className="block h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
            >
                <source src={Banner} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/10" />
        </div>
    )
}

export default BannerLayout
