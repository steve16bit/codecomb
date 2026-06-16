import { faFigma } from "@fortawesome/free-brands-svg-icons";
import {
  faEarthAmerica,
  faMobileScreenButton,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  const services = [
    {
      icon: faMobileScreenButton,
      title: "Mobile development",
      description:
        "Native and cross-platform mobile applications for iOS and Android with exceptional user experience.",
    },
    {
      icon: faEarthAmerica,
      title: "Web Development",
      description:
        "Modern, responsive web applications built with the latest technologies and best practices.",
    },
    {
      icon: faFigma,
      title: "UX/UI Design",
      description:
        "Modern, responsive web applications built with the latest technologies and best practices.",
    },
  ];

  return (
    <section className="mt-20">
      <h1 className="text-center text-5xl mb-5">
        Our <strong className="text-primary">Projects</strong>
      </h1>
      <p className="text-center text-white/60 font-extralight">
        All the ways that Codecomb can help your business
      </p>
      <div className="flex flex-wrap justify-center gap-10 mt-10 px-6 lg:px-20">
        {services.map(
        (item: {
          icon: IconDefinition;
          title: string;
          description: string;
        }) => (
          <div className="bg-surface rounded-2xl p-5 flex items-center gap-2 max-w-lg">
            <div className="rounded-sm max-w-fit max-h-fit p-3 flex justify-center items-center">
              <FontAwesomeIcon
                icon={item.icon}
                className="text-3xl text-primary"
              />
            </div>
            <div>
              <h2 className="w-full my-2 text-xl font-bold">{item.title}</h2>
              <p className="font-light">{item.description}</p>
            </div>
          </div>
        )
      )}
      </div>
    </section>
  );
};

export default Projects;
