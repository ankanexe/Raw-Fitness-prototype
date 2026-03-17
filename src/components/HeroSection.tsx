import { motion } from "framer-motion";
import { Star, ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img src={heroImg} alt="NestFit Gym interior with heavy dumbbells" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-condensed text-sm md:text-base tracking-[0.3em] text-accent uppercase mb-6"
        >
          Barasat's Premium Fitness Destination
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-9xl leading-[0.9] text-gradient mb-6"
        >
          Train Hard. Build Strength at NestFit Gym.<br />Become Stronger.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="font-body text-muted-foreground text-base md:text-lg max-w-xl mb-8"
        >
          Where raw discipline meets transformation. Kolkata's most intense training experience.
        </motion.p>

        {/* Trust indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="flex items-center gap-2 mb-10"
        >
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < 5 ? "text-accent fill-accent" : "text-muted-foreground"}`} />
            ))}
          </div>
          <span className="font-condensed text-sm text-muted-foreground tracking-wider">
            4.6 Rating from 114 Members
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://wa.me/916290282721?text=Hi%2C%20I%20want%20to%20join%20Raw%20Fitness"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground px-8 py-4 font-condensed text-sm uppercase tracking-widest hover:bg-accent/90 transition-all"
          >
            Join Now
          </a>
          <a
            href="#plans"
            className="border border-foreground/20 text-foreground px-8 py-4 font-condensed text-sm uppercase tracking-widest hover:bg-foreground/5 transition-all"
          >
            Get Membership
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
