import { faAppStore, faFigma } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRightLong,
  faCode,
  faEarthAmerica,
  faGlobe,
  faMobileScreenButton,
  faShapes,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {
  const services: {
    icon: IconDefinition;
    title: string;
    description: string;
  }[] = [
      {
        icon: faAppStore,
        title: "Mobile Development",
        description:
          "Native and cross-platform apps for iOS and Android with smooth and reliable user experience.",
      },
      {
        icon: faCode,
        title: "Web Development",
        description:
          "Modern responsive web products built with scalable architecture and clean implementation.",
      },
      {
        icon: faFigma,
        title: "UX/UI Design",
        description:
          "Intentional design systems and interface flows that keep every interaction clear and useful.",
      },
      {
        icon: faShapes    ,
        title: "Consultancy",
        description:
          "Strategic consultancy across development and UX/UI to guide planning, delivery, and growth.",
      },
    ];

  return (
    <section className="mt-20 px-4 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-center text-5xl mb-5">
          Our <strong className="text-primary">Services</strong>
        </h1>
        <p className="text-center text-white/60 font-extralight">
          All the ways that Codecomb can help your business
        </p>

        <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4">
          {services.map((item) => (
            <article
              key={item.title}
              className="relative min-h-[300px] flex flex-col justify-between rounded-3xl border border-primary/5 bg-surface/10 p-7 pt-14 shadow-[0px_12px_10px_0px_rgba(0,0,0,0.1)]"
            >
              <div>
                <div
                  className="absolute -top-5 left-6 flex p-4 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm"
                >
                  <FontAwesomeIcon icon={item.icon} className="text-2xl" />
                </div>

                <h2 className="text-xl md:text-2xl font-semibold leading-tight text-white">
                  {item.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-white/60 font-light">
                  {item.description}
                </p>
              </div>

              <a
                href="#"
                className="mt-10 inline-flex items-center gap-3 text-lg font-semibold text-white transition-colors hover:text-primary"
              >
                Read more
                <FontAwesomeIcon icon={faArrowRightLong} className="text-base" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
