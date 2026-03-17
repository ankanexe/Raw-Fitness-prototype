import ScrollReveal from "./ScrollReveal";
import athleteImg from "@/assets/athlete-training.jpg";
import benchImg from "@/assets/bench-press.jpg";

const BrandStory = () => {
  return (
    <section id="brand-story" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Intro */}
        <ScrollReveal className="text-center mb-24">
          <p className="font-condensed text-sm tracking-[0.3em] text-accent uppercase mb-4">Our Philosophy</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-gradient mb-6">
            Built on Grit.<br />Forged by Discipline.
          </h2>
          <div className="section-divider mt-8" />
        </ScrollReveal>

        {/* Story blocks */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <ScrollReveal direction="left">
            <div className="overflow-hidden">
              <img
                src={athleteImg}
                alt="Athlete performing heavy deadlift at NestFit"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2}>
            <p className="font-condensed text-xs tracking-[0.3em] text-accent uppercase mb-4">Strength</p>
            <h3 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              No Shortcuts. No Excuses.
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              NestFit was born from a simple belief — true transformation comes from discipline, not convenience. 
              Every rep, every set, every drop of sweat brings you closer to the person you're meant to become.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Located in the heart of Barasat, we've built a space where ambition meets iron. Where beginners 
              and athletes train side by side with one shared goal — to push beyond limits.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left" className="order-2 lg:order-1">
            <p className="font-condensed text-xs tracking-[0.3em] text-accent uppercase mb-4">Community</p>
            <h3 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              More Than a Gym.<br />A Brotherhood.
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              At NestFit, you're not just a member — you're family. Our trainers don't just guide workouts; 
              they walk the journey with you. From fat loss to muscle building, from first-timers to competitors.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { value: "114+", label: "Members" },
                { value: "4.6", label: "Rating" },
                { value: "5+", label: "Trainers" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-3xl text-accent">{stat.value}</p>
                  <p className="font-condensed text-xs tracking-wider text-muted-foreground uppercase mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2} className="order-1 lg:order-2">
            <div className="overflow-hidden">
              <img
                src={benchImg}
                alt="Intense bench press workout at NestFit"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
