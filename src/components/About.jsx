
/**
 * @copyright (c) 2023 by Unstoppable Domains, Inc.
 * @license Apache-2.0
 */

const aboutItems = [
  {
    label: 'Project done',
    number: 5,
  },
  {
    label: 'Years of experience',
    number: 1,
  },
];

const About = () => {
  return (
    <section id="about" className="Section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl ">
          Welcome! I'm Bala, a Java Full Stack Developer passionate about building scalable and 
          high-performance web applications. With expertise in JavaScript, React.js, Node.js/Express
          , and Java/Spring Boot, I craft responsive and dynamic user experiences while ensuring 
          robust backend architecture. By integrating database technologies like MySQL and MongoDB,
           along with cloud services and CI/CD pipelines, I deliver efficient, modern solutions
            tailored to industry needs
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                  <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="favicon.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;