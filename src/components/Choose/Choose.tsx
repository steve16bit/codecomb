import {
  faBolt,
  faCubes,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons/faChartPie";
import { faHandshake } from "@fortawesome/free-solid-svg-icons/faHandshake";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faPenRuler } from "@fortawesome/free-solid-svg-icons/faPenRuler";
import { faShapes } from "@fortawesome/free-solid-svg-icons/faShapes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Choose = () => {
  const chooseReasons: {
    icon: IconDefinition;
    title: string;
    rotate: string;
    description: string;
  }[] = [
    {
      icon: faBolt,
      title: "Future-proof",
      rotate: "",
      description:
        "At CodeComb, every project is built with engineering best practices, clean architecture, and performance-focused design — ensuring your product scales safely without rewrites in the future.",
    },
    {
      icon: faShapes,
      title: "Tailored solutions",
      rotate: "",
      description:
        "We don't force your product into pre-made molds. Every solution is crafted to meet your business needs, not the other way around.",
    },
    {
      icon: faMagnifyingGlass,
      title: "Transparency",
      rotate: "",
      description:
        "No surprises. You get clear timelines, consistent updates, and direct contact with the developers building your solution.",
    },
    {
      icon: faPenRuler,
      title: "Design That Converts",
      rotate: "",
      description:
        "We don't just build interfaces. We craft beautiful, usable, conversion-driven experiences that feel modern, fast, and aligned with your brand identity.",
    },
    {
      icon: faHandshake,
      title: "Partner",
      rotate: "",
      description:
        "We help you refine ideas, define scope, optimize flows, and make strategic tech decisions. You're not just hiring a dev company. You're gaining a long-term partner.",
    },
    {
      icon: faChartPie,
      title: "Results",
      rotate: "",
      description:
        "Results That Speak for Themselves. Clean designs, Performant systems, High uptime, Happy users,",
    },
  ];
  return (
    <section className="px-6 lg:px-20 mt-20 flex flex-col justify-center items-center">
      <h1 className="text-center text-5xl mb-5">
        Why choose <strong className="text-primary">CodeComb</strong>
      </h1>
      <p className="text-center text-white/60 font-extralight">
        Here is why people choose us for tech soluctions
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        {chooseReasons.map(
          (item: {
            icon: IconDefinition;
            title: string;
            rotate: string;
            description: string;
          }) => (
            <div className={`${item.rotate} flex flex-col justify-center items-center rounded-2xl py-10 px-5 max-w-md shadow-[0px_12px_10px_0px_rgba(0,0,0,0.1)]`}>
              <div className="">
                <div className="bg-primary/10 rounded-lg max-w-fit max-h-fit p-3 flex justify-center items-center">
                  <FontAwesomeIcon icon={item.icon} className="text-2xl text-primary" />
                </div>
                <h2 className="w-full my-2 text-xl font-bold">{item.title}</h2>
                <p className="font-light text-gray-400">{item.description}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Choose;
