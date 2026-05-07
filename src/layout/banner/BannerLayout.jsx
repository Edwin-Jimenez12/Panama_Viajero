import Banner from '../../assets/img_test/bannerP.png';

function BannerLayout() {
    return (
        <div className="relative aspect-[1920/1080] w-full overflow-hidden">
            <img
                src={Banner}
                alt="BannerLayout"
                className="block h-full object-cover"
            />
            <div className=" absolute inset-0" /> 
        </div>
    )
}
export default BannerLayout
