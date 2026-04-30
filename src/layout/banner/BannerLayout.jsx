import Banner from '../../assets/img_test/bannerP.png';

function BannnerLayout() {
    return (
        <div className="w-full overflow-hidden aspect-[1920/800]">
            <img
                src={Banner}
                alt="BannerLayout"
                className="w-full h-auto block"
            />
        </div>
    )
}
export default BannnerLayout
