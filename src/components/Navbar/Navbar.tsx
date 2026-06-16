import { useEffect, useState } from "react";
import codecombLogo from "../../assets/codecomb_logo.svg";

const navItems = ["Why choose us", "Services", "Projects", "Technologies", "Our process"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const transition = "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)";

  return (
    <nav
      className="fixed z-50"
      style={{
        top: scrolled ? "1rem" : "0",
        left: "50%",
        transform: "translateX(-50%)",
        width: scrolled ? "91.666%" : "100%",
        maxWidth: scrolled ? "80rem" : "none",
        transition,
      }}
    >
      <div
        className="text-white"
        style={{
          borderRadius: scrolled ? "1.5rem" : "0",
          border: "2px solid",
          borderColor: scrolled ? "rgba(255,212,0,0.3)" : "transparent",
          padding: scrolled ? "0.5rem 0.75rem" : "1.5rem 1.5rem",
          background: scrolled ? "rgba(35,35,35,0.75)" : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(1.5)" : "blur(0px) saturate(1)",
          boxShadow: scrolled
            ? "0 12px 40px rgba(43,43,43,0.35), inset 0 0 110px rgba(255,212,0,0.06)"
            : "none",
          transition,
        }}
      >
        <div className="flex justify-between items-center gap-4 md:gap-8">
          <a className="flex shrink-0 items-center gap-2">
            <img src={codecombLogo} alt="CodeComb" className="h-8 w-auto md:h-10" />
            <span className="text-md font-normal tracking-tight text-primary">Code Comb</span>
          </a>

          <ul className="flex align-center gap-2">
            {navItems.map((item) => (
              <li key={item} className="list-none">
                <a
                  href="#"
                  className="text-sm block rounded-xl px-5 py-2 font-semibold text-white/90 transition-colors duration-200 hover:bg-primary/10 hover:text-primary"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
