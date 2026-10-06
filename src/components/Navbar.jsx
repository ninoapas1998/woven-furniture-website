import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

function Logo({ light = false }) {
  return (
    <a href="#home" className="flex items-center">
      <img
        src="/img/logo/wf-logo.png"
        alt="Woven Furniture Designs"
        className={light ? "h-16 w-auto" : "h-10 w-auto"}
      />
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(() => window.location.hash || "#home");

  useEffect(() => {
    const syncHash = () => setActiveHash(window.location.hash || "#home");
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const links = [
    ["Home", "#home"],
    ["Our Products ↗", "https://wovenfurnituredesigns-store.myshopify.com/"],
    ["Collections", "#collections"],
    ["Projects", "#projects"],
    ["About Us", "#about"],
    ["Blogs", "#blogs"],
    ["Contact Us", "#contact"],
  ];

  const isActiveLink = (href) => {
    const currentHash = activeHash || "#home";

    if (href === "#home") return currentHash === "#home";
    if (href === "#collections") return currentHash === "#collections" || currentHash === "#classic";
    if (href === "#projects") return currentHash === "#projects" || currentHash.startsWith("#project-");
    if (href === "#about") return currentHash === "#about";
    if (href === "#blogs") return currentHash === "#blogs" || currentHash.startsWith("#journal-");
    if (href === "#contact") return currentHash === "#contact";
    if (href === "#quote") return currentHash === "#quote";

    return currentHash === href;
  };

  const getLinkState = (label, href) => {
    if (label === "Our Products ↗") {
      return false;
    }

    return isActiveLink(href);
  };

  const handleNavClick = (event, href) => {
    event.preventDefault();
    setOpen(false);
    window.location.hash = href;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, 0);
  };

  return (
    <>
      <div className="bg-[#8a5208] py-1.5 text-sm text-white" style={{ fontFamily: '"Montserrat", Arial, sans-serif' }}>
        <div className="container-site flex justify-between">
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/WovenFurnitureDesigns"
              target="_blank"
              rel="noreferrer"
              aria-label="Woven Furniture Designs on Facebook (opens in a new tab)"
              className="font-bold transition-opacity hover:opacity-80"
            >
              f
            </a>
          </div>
          <div className="hidden gap-5 sm:flex">
            <span>☎ 0917 307 6797</span>
            <span>✉ info@wovenfurnituredesigns.com</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-[#e7ddd0] bg-white/95 shadow-[0_2px_16px_rgba(56,38,20,0.05)] backdrop-blur" style={{ fontFamily: '"Montserrat", Arial, sans-serif' }}>
        <div className="container-site flex min-h-[72px] items-center justify-between gap-6">
          <Logo />

          <div className="hidden flex-1 items-center justify-center md:flex">
            <nav className="flex items-center gap-6">
              {links.map(([label, href]) => {
                const isActive = getLinkState(label, href);
                const isExternal = label === "Our Products ↗";
                return (
                  <a
                    key={label}
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    onClick={
                      isExternal
                        ? undefined
                        : (event) => handleNavClick(event, href)
                    }
                    className={`text-sm font-semibold transition-colors ${
                      isActive
                        ? "text-woven-brown"
                        : "text-gray-700 hover:text-woven-brown"
                    }`}
                  >
                    {label}
                  </a>
                );
              })}
            </nav>
          </div>

          <a
            href="#quote"
            onClick={(event) => handleNavClick(event, "#quote")}
            className="hidden bg-woven-brown px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-woven-dark md:inline-flex"
          >
            Request a Quote
          </a>

          <button className="transition hover:bg-woven-dark hover:text-white md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        <nav
          className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col bg-white p-5 shadow-lg md:hidden`}
          style={{ fontFamily: '"Montserrat", Arial, sans-serif' }}
        >
          {links.map(([label, href]) => {
            const isActive = getLinkState(label, href);
            const isExternal = label === "Our Products ↗";
            return (
              <a
                key={label}
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                onClick={
                  isExternal
                    ? () => setOpen(false)
                    : (event) => handleNavClick(event, href)
                }
                className={`py-2 text-sm font-medium ${
                  isActive ? "text-woven-brown" : "text-gray-700"
                }`}
              >
                {label}
              </a>
            );
          })}
          <a
            href="#quote"
            onClick={(event) => handleNavClick(event, "#quote")}
            className="mt-2 bg-woven-brown px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-woven-dark"
          >
            Request a Quote
          </a>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
