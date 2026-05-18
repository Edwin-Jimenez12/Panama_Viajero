import Banner from '../../assets/img_test/PanamaViajero.mp4';

function BannerLayout() {
    return (
        <div className="relative aspect-[1920/800] md:aspect-[1920/485] w-full overflow-hidden">
            
            <video src={Banner} className="block h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"></video> 
            <div className=" absolute inset-0" /> 
        </div>
    )
}
export default BannerLayout
