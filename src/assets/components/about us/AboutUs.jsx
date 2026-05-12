import LogoCircular from '../../img_test/logoCircular.svg';

function AboutUs() {
  return (
    <div className="mx-auto mt-20 flex max-w-6xl flex-col items-center justify-center gap-12 px-4 py-14 md:flex-row md:gap-16">
      <div className="flex flex-col items-start gap-5 text-left">
        <div>
          <h2 className="font-invisible text-2xl font-bold text-brand-red md:text-3xl">Guia turistica</h2>
          <h1 className="font-invisible text-4xl font-bold text-brand-blue md:text-6xl">Explora Panamá</h1>
          <h1 className="font-invisible text-4xl font-bold text-brand-charcoal md:text-6xl">y sus costumbres</h1>
        </div>

        <p className="max-w-xs leading-7 text-brand-charcoal/85 md:max-w-md md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eaque consectetur blanditiis, autem, sequi nihil quos accusamus harum,
          voluptatibus eius optio provident delectus deserunt distinctio voluptate.
          Veniam deleniti molestias blanditiis quas.
        </p>
      </div>

      <div className="rounded-full bg-brand-white p-6 shadow-[0_18px_45px_rgba(73,86,162,0.22)]">
        <img src={LogoCircular} alt="Provincias" className="h-50 w-auto md:h-72" />
      </div>
    </div>
  );
}

export default AboutUs;
