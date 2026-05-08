import bocasImage from '../../srcProvincias/bocas_del_toto/bocas_del_toro.jpg';

const BocasDelToroSvg = ({ className = '', ...props }) => {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 77.09 88.49"
        className={className}
        {...props}
    >
        <defs>
            <mask id="bocas-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="77.09" height="88.49">
            <rect x="0" y="0" width="77.09" height="88.49" fill="black" />
            <path
                d="M94.56,111.77c-6.1-1.83-12.68-2.17-16.92-5.49-6.09-4.76-12-4.25-18.59-3.64-1.15.11-3.2-.72-3.52-1.6-3-8.26-11.53-9.69-17.44-14.29-2.61-2-5.36-3.87-9.22-6.64,0-12.38-.09-26,.15-39.73,0-1.21,2-2.74,3.38-3.47s3.44-.55,5-1.17c2.13-.84,3.12-2.05,1.85-4.76-1.06-2.28-1-5.11-1.38-7.7,2.9.45,6.23.15,8.6,1.51a49.82,49.82,0,0,1,10,8.22c4.77,4.76,9.43,3.6,11.89-2.95,5.89-3.33,9.36.67,13,3.9,4.11,3.6,8.18,7.25,12.83,11.38-.48,2.73-5,6.35-.11,10-4.58,3.47-4.64,4.19-1.11,8.24A10.62,10.62,0,0,1,94.53,66c2.13,4.46,5.42,6.27,11.41,3.87-.66,3.88-1.16,6.9-1.65,9.78l-4.59-4C98.24,77.43,96,79,95.47,81c-1,4-3.69,5.91-7,7.66-1.38.72-2.27,2.35-3.38,3.56a44.34,44.34,0,0,0,3.83,3.19A21.27,21.27,0,0,0,92,96.56c4.69,2.13,5.68,4.35,4.23,9.31C95.66,107.81,95.13,109.77,94.56,111.77Z"
                transform="translate(-28.85 -23.28)"
                fill="white"
            />
            </mask>
        </defs>
        <image
            xlinkHref={bocasImage}
            x="0"
            y="0"
            width="77.09"
            height="88.49"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#bocas-mask)"
        />
        </svg>
    );
};

export default BocasDelToroSvg;