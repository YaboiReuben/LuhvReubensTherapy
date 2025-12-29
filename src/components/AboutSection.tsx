import { Shield, Heart, Users } from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "Friendly Listeners",
    description: "Connect with understanding peers who genuinely care",
    emoji: "🌌",
  },
  {
    icon: Shield,
    title: "Safe Space",
    description: "A judgment-free zone where you can be yourself",
    emoji: "🪐",
  },
  {
    icon: Heart,
    title: "Respect-First",
    description: "Every conversation is treated with kindness and respect",
    emoji: "✨",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient">Us</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-nebula-pink mx-auto rounded-full" />
          </div>

          {/* Main Content */}
          <div className="glass-card p-8 md:p-12 mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              <span className="text-foreground font-semibold">LuhvReuben's Therapy</span> is a 
              Roblox-based peer support space designed to be calm, respectful, and welcoming. 
              This is <span className="text-primary">not professional therapy</span> — it's a 
              place to talk, vent, and feel heard. Whether you're going through a tough time or 
              just need someone to listen, we're here for you.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300 hover:border-primary/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-nebula-pink/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
