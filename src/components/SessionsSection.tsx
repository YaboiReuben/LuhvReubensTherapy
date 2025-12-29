import { Button } from "@/components/ui/button";
import { Moon, Orbit, Rocket } from "lucide-react";

const sessions = [
  {
    icon: Moon,
    title: "Calm Chat",
    emoji: "🌙",
    description: "Short support session for quick check-ins and casual conversations",
    price: "10",
    features: ["15-20 minutes", "Quick check-in", "Light support"],
    popular: false,
  },
  {
    icon: Orbit,
    title: "Deep Talk",
    emoji: "🌌",
    description: "Longer, focused conversation for when you need more time to open up",
    price: "50",
    features: ["45-60 minutes", "In-depth discussion", "Full attention"],
    popular: true,
  },
  {
    icon: Rocket,
    title: "Follow-Up",
    emoji: "🚀",
    description: "For returning clients who want to continue their journey",
    price: "40",
    features: ["30-45 minutes", "Progress check", "Continued support"],
    popular: false,
  },
];

export const SessionsSection = () => {
  return (
    <section id="sessions" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your <span className="text-gradient">Session</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select the type of support that fits your needs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-nebula-pink mx-auto rounded-full mt-4" />
        </div>

        {/* Session Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {sessions.map((session, index) => (
            <div
              key={session.title}
              className={`relative glass-card p-8 flex flex-col group hover:scale-105 transition-all duration-300 ${
                session.popular ? "border-primary/50 animate-pulse-glow" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {session.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-nebula-pink rounded-full text-xs font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}

              {/* Emoji & Icon */}
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{session.emoji}</div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-nebula-pink/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <session.icon className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-foreground text-center mb-2">
                {session.title}
              </h3>
              <p className="text-sm text-muted-foreground text-center mb-6">
                {session.description}
              </p>

              {/* Price */}
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-foreground">{session.price}</span>
                <span className="text-muted-foreground ml-2">Robux</span>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-8 flex-grow">
                {session.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-star-gold">✦</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={session.popular ? "cosmic" : "glass"}
                className="w-full"
                asChild
              >
                <a href="#book">Book Now</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
