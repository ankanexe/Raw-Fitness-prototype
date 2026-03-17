import { MapPin, Clock, Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const LocationSection = () => {
  return (
    <section id="location" className="py-32 px-6 bg-gradient-steel">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-20">
          <p className="font-condensed text-sm tracking-[0.3em] text-accent uppercase mb-4">
            Find Us
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-gradient">
            Our Location
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollReveal direction="left">
            <div className="h-[450px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=NestFit+Gym+Barasat&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "invert(90%) hue-rotate(180deg) grayscale(20%)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NestFit Gym location on Google Maps"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="flex flex-col justify-center h-full space-y-8">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">
                    Address
                  </h3>
                  <p className="font-body text-muted-foreground">
                    NestFit Gym, Saptarshi Sangha Club,<br />
                    Palpakuria Rd, Barasat,<br />
                    West Bengal 700125
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">
                    Hours
                  </h3>
                  <p className="font-body text-muted-foreground">
                    Open — Closes 10:30 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:7797822568"
                    className="font-body text-accent hover:underline"
                  >
                    77978 22568
                  </a>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=NestFit+Gym+Barasat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 border border-foreground/20 text-foreground px-8 py-3 font-condensed text-sm uppercase tracking-widest hover:bg-foreground/5 transition-all text-center"
              >
                Get Directions
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
