import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import heroImg from "@/assets/hero-gym.jpg";
import athleteImg from "@/assets/athlete-training.jpg";
import weightsImg from "@/assets/gym-weights.jpg";
import benchImg from "@/assets/bench-press.jpg";
import coachImg from "@/assets/trainer-coaching.jpg";
import cardioImg from "@/assets/cardio-area.jpg";
import battleImg from "@/assets/battle-ropes.jpg";

const images = [
  { src: heroImg, alt: "NestFit gym interior" },
  { src: athleteImg, alt: "Athlete deadlifting" },
  { src: weightsImg, alt: "Free weights zone" },
  { src: benchImg, alt: "Bench press training" },
  { src: coachImg, alt: "Personal training session" },
  { src: cardioImg, alt: "Cardio area" },
  { src: battleImg, alt: "Battle ropes workout" },
];

const GallerySection = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-20">
          <p className="font-condensed text-sm tracking-[0.3em] text-accent uppercase mb-4">Gallery</p>
          <h2 className="font-display text-4xl md:text-6xl text-gradient">Inside NestFit</h2>
        </ScrollReveal>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <ScrollReveal key={i} delay={i * 0.05} direction="none">
              <div
                className="overflow-hidden cursor-pointer break-inside-avoid"
                onClick={() => setSelectedImg(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-6"
            onClick={() => setSelectedImg(null)}
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 text-foreground hover:text-accent transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImg}
              alt="Gallery preview"
              className="max-w-full max-h-[85vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
