import { Star, Ban, XCircle, AlertTriangle, Rocket } from "lucide-react";

const rules = [
  {
    icon: Star,
    emoji: "🌟",
    title: "Respect & Kindness Required",
    description: "Treat everyone with respect. Be kind in all interactions.",
  },
  {
    icon: Ban,
    emoji: "🚫",
    title: "No Harassment or Hate Speech",
    description: "Zero tolerance for bullying, harassment, or discriminatory language.",
  },
  {
    icon: XCircle,
    emoji: "❌",
    title: "No NSFW or Illegal Topics",
    description: "Keep conversations appropriate. No explicit or illegal content.",
  },
  {
    icon: AlertTriangle,
    emoji: "⚠️",
    title: "Sessions May Be Ended",
    description: "If rules are broken, sessions may be ended without refund.",
  },
  {
    icon: Rocket,
    emoji: "🛸",
    title: "Peer Support Only",
    description: "This is not licensed therapy. For emergencies, contact professionals.",
  },
];

export const RulesSection = () => {
  return (
    <section id="rules" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Community <span className="text-gradient">Rules</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            To keep our space safe and welcoming, please follow these guidelines
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-nebula-pink mx-auto rounded-full mt-4" />
        </div>

        {/* Rules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {rules.map((rule, index) => (
            <div
              key={rule.title}
              className="glass-card p-6 group hover:scale-105 transition-all duration-300 hover:border-primary/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="text-3xl mb-2">{rule.emoji}</div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-nebula-pink/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <rule.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-2">{rule.title}</h3>
                  <p className="text-sm text-muted-foreground">{rule.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="glass-card p-6 border-star-gold/30 text-center">
            <p className="text-muted-foreground">
              <span className="text-star-gold">✦</span> By booking a session, you agree to follow
              these rules and understand that this is peer support, not professional therapy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
