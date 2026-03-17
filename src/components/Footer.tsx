import { Instagram, Facebook, Youtube, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl tracking-widest text-foreground mb-2">
              RAW FITNESS<span className="text-accent">.</span>
            </h3>
            <p className="font-display text-sm text-muted-foreground mb-4">র ফিটনেস</p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Barasat's premium fitness destination. Train raw, become stronger.
            </p>
          </div>

          <div>
            <h4 className="font-condensed text-xs tracking-[0.2em] text-accent uppercase mb-4">Quick Links</h4>
            <div className="space-y-3">
              {["About", "Experience", "Trainers", "Plans", "Gallery", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase() === "about" ? "brand-story" : link.toLowerCase() === "contact" ? "location" : link.toLowerCase()}`}
                  className="block font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-condensed text-xs tracking-[0.2em] text-accent uppercase mb-4">Contact</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <p className="font-body text-sm text-muted-foreground">
                  Saroj Park, Taki Rd, Barasat,<br />Kolkata, WB 700124
                </p>
              </div>
              <div className="flex gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <a href="tel:06290282721" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  062902 82721
                </a>
              </div>
              <div className="flex gap-3">
                <Clock className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <p className="font-body text-sm text-muted-foreground">Open — Closes 10 PM</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-condensed text-xs tracking-[0.2em] text-accent uppercase mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Raw Fitness. All rights reserved. Barasat, Kolkata.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
