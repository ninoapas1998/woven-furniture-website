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

export function Footer() {
  return (
    <footer id="contact" className="bg-woven-footer pt-14 text-white">
      <div className="container-site grid gap-10 pb-12 md:grid-cols-3">
        <div>
          <Logo light />
          <div className="mt-6 space-y-2 text-sm">
            <p className="font-[Montserrat]">☎ 0917 307 6797</p>
            <p className="font-[Montserrat]">✉ info@wovenfurnituredesigns.com</p>
            <p className="font-[Montserrat]">⚲ Caimito St., Purak Nara, Tayud, Liloan, Cebu</p>
          </div>
        </div>

        <div>
          <b className="font-[Montserrat] text-sm">Explore</b>
          {[
            ["Our Products ↗", "https://wovenfurnituredesigns-store.myshopify.com/"],
            ["Collections", "#collections"],
            ["Projects", "#projects"],
            ["About Us", "#about"],
            ["Blogs", "#blogs"],
            ["Contact Us", "#contact"],
          ].map(([item, href]) => (
            <a
              key={item}
              href={href}
              target={item === "Our Products ↗" ? "_blank" : undefined}
              rel={item === "Our Products ↗" ? "noreferrer" : undefined}
              className="block py-1.5 font-[Montserrat] text-sm"
            >
              {item}
            </a>
          ))}
        </div>

        <div>
          <b className="font-[Montserrat] text-sm">Legal</b>
          <a className="block py-1.5 font-[Montserrat] text-sm" href="#terms">
            Terms of Service
          </a>
          <a className="block py-1.5 font-[Montserrat] text-sm" href="#privacy">
            Privacy Policy
          </a>
        </div>
      </div>

      <div className="border-t border-white/20 py-4 text-[10px] text-white/70">
        <div className="container-site">
          © {new Date().getFullYear()} Woven Furniture Designs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
