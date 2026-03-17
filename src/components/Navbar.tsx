import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "About", href: "#brand-story" },
  { label: "Experience", href: "#experience" },
  { label: "Trainers", href: "#trainers" },
  { label: "Plans", href: "#plans" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#location" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-2xl tracking-widest text-foreground">
          NestFit Gym<span className="text-accent">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-condensed text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:06290282721"
            className="flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2 font-condensed text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            Call Now
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-condensed text-lg tracking-wider text-muted-foreground hover:text-foreground transition-colors uppercase"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:06290282721"
                className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-5 py-3 font-condensed text-sm uppercase tracking-wider mt-2"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
