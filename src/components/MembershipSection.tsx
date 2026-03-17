import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const plans = [
  {
    name: "Monthly Plan",
    price: "₹500",
    period: "/month",
    features: [
      "₹1000 one-time admission fee",
      "Full gym access",
      "All equipment access",
      "Friendly training environment",
      "Locker facility"
    ],
    highlighted: false,
  },
  {
    name: "6 Month Plan",
    price: "₹3000",
    period: "/6 months",
    features: [
      "No admission fee",
      "1 month free",
      "Total 7 months access",
      "All gym equipment access",
      "Locker facility"
    ],
    highlighted: true,
  },
  {
    name: "1 Year Plan",
    price: "₹6000",
    period: "/year",
    features: [
      "No admission fee",
      "3 months free",
      "Total 15 months access",
      "All gym equipment access",
      "Locker facility",
      "Best value membership"
    ],
    highlighted: false,
  }
];

const MembershipSection = () => {
  return (
    <section id="plans" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-20">
          <p className="font-condensed text-sm tracking-[0.3em] text-accent uppercase mb-4">
            Membership
          </p>

          <h2 className="font-display text-4xl md:text-6xl text-gradient mb-4">
            Join NestFit Gym
          </h2>

          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Affordable memberships designed for everyone. Start your fitness
            journey at NestFit Gym in Barasat.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.1} direction="up">
              <div
                className={`relative p-8 border transition-all duration-500 hover:-translate-y-2 h-full flex flex-col ${
                  plan.highlighted
                    ? "bg-accent/5 border-accent"
                    : "bg-card border-border hover:border-accent/30"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 font-condensed text-xs uppercase tracking-widest">
                    Most Popular
                  </div>
                )}

                <p className="font-condensed text-xs tracking-[0.2em] text-accent uppercase mb-3">
                  {plan.name}
                </p>

                <div className="mb-6">
                  <span className="font-display text-4xl text-foreground">
                    {plan.price}
                  </span>
                  <span className="font-body text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-sm font-body text-muted-foreground"
                    >
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/917797822568?text=Hi%20I%20want%20to%20join%20NestFit%20Gym"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 font-condensed text-sm uppercase tracking-widest transition-all ${
                    plan.highlighted
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : "border border-foreground/20 text-foreground hover:bg-foreground/5"
                  }`}
                >
                  Join Now
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
