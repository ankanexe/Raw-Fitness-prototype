import ScrollReveal from "./ScrollReveal";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

const trainers = [
  {
    img: trainer1,
    name: "Rahul Das",
    specialization: "Strength & Conditioning",
    experience: "8+ Years",
    desc: "Certified strength coach specializing in powerlifting and athletic performance.",
  },
  {
    img: trainer2,
    name: "Priya Sen",
    specialization: "Fat Loss & Nutrition",
    experience: "6+ Years",
    desc: "Expert in body transformation, functional training, and personalized diet planning.",
  },
  {
    img: trainer3,
    name: "Arjun Roy",
    specialization: "Muscle Building",
    experience: "7+ Years",
    desc: "Hypertrophy specialist focused on progressive overload and body recomposition.",
  },
];

const TrainersSection = () => {
  return (
    <section id="trainers" className="py-32 px-6 bg-gradient-steel">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-20">
          <p className="font-condensed text-sm tracking-[0.3em] text-accent uppercase mb-4">Our Trainers</p>
          <h2 className="font-display text-4xl md:text-6xl text-gradient">Meet Your Coaches</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.15} direction="up">
              <div className="group bg-card border border-border overflow-hidden hover:border-accent/30 transition-all duration-500">
                <div className="overflow-hidden h-[400px]">
                  <img
                    src={t.img}
                    alt={`${t.name} - ${t.specialization} trainer at Raw Fitness`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <p className="font-condensed text-xs tracking-[0.2em] text-accent uppercase mb-2">{t.specialization}</p>
                  <h3 className="font-display text-2xl text-foreground mb-1">{t.name}</h3>
                  <p className="font-condensed text-xs text-muted-foreground tracking-wider mb-3">{t.experience} Experience</p>
                  <p className="font-body text-sm text-muted-foreground">{t.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
