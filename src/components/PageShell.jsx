import { Navbar } from "./Navbar";
import { CTASection } from "./CTASection";
import { Footer } from "./Footer";

export default function PageShell({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <CTASection />
      <Footer />
    </>
  );
}
