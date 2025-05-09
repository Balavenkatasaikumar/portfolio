import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
  const handleDownload = (e) => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = '/resume.docx';
    link.setAttribute('download', 'resume.docx');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-6 h-10 rounded-lg">
              <img
                src="me.jpg"
                width={20}
                height={20}
                alt="Bala Venkata Sai Kumar Thota Portrait"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
              </span>
              Available for work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mb-8 lb:mb-10">
            Building Scalable Modern Websites for the Future
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              label="Download Resume"
              href="/resume.docx"
              icon="download"
              download={true}
              onClick={handleDownload}
            />

            <ButtonOutline
              href="#about"
              label="Scroll Down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to to-65% rounded-[60px] overflow-hidden">
            <img
              src="hero.jpg"
              width={400}
              height={400}
              alt="Bala Venkata Sai Kumar Thota"
              className="w-full max-w-[600px] h-auto"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;