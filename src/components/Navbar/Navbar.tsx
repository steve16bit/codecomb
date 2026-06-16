import codecombLogo from "../../assets/codecomb_logo.svg";

const navItems = ["Why choose us", "Services", "Projects", "Technologies", "Our process"];

const Navbar = () => {
  return (
    <nav className="fixed left-1/2 top-4 z-50 flex w-11/12 max-w-7xl -translate-x-1/2 justify-center">
      <div className="w-full rounded-3xl border border-primary/30 px-3 py-2 text-white shadow-[0_12px_40px_rgba(43,43,43,0.35),inset_0_0_110px_rgba(255,212,0,0.06)] backdrop-blur-xl backdrop-saturate-150 md:px-6">
        <div className="flex justify-between items-center gap-4 md:gap-8">
          <a className="flex shrink-0 items-center gap-2">
            <img src={codecombLogo} alt="CodeComb" className="h-8 w-auto md:h-10" />
            <span className="text-xs font-normal tracking-tight text-primary md:text-2xl">Code Comb</span>
          </a>

          <ul className="flex align-center gap-2">
            {navItems.map((item) => (
              <li key={item} className="list-none">
                <a
                  href="#"
                  className="block rounded-xl px-3 py-2 font-semibold text-white/90 transition-colors duration-200 hover:bg-primary/20 hover:text-primary"
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
