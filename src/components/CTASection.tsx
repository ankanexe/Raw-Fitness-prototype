import { Phone, MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import heroImg from "@/assets/hero-gym.jpg";

const CTASection = () => {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="NestFit environment" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <p className="font-condensed text-sm tracking-[0.3em] text-accent uppercase mb-6">Start Today</p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-gradient mb-6">
            Your Transformation<br />Starts Here.
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Stop waiting. The best version of you is one decision away. Join NestFit today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:06290282721"
              className="flex items-center justify-center gap-3 bg-accent text-accent-foreground px-8 py-4 font-condensed text-sm uppercase tracking-widest hover:bg-accent/90 transition-all"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href="https://wa.me/916290282721?text=Hi%2C%20I%20want%20to%20join%20Raw%20Fitness"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border border-foreground/20 text-foreground px-8 py-4 font-condensed text-sm uppercase tracking-widest hover:bg-foreground/5 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href="#plans"
              className="flex items-center justify-center gap-3 border border-foreground/20 text-foreground px-8 py-4 font-condensed text-sm uppercase tracking-widest hover:bg-foreground/5 transition-all"
            >
              Join Membership
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
