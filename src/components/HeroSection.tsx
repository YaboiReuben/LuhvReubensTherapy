import { Button } from "@/components/ui/button";
import { Rocket, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-slide-up opacity-0" style={{ animationDelay: '0.1s' }}>
            <Sparkles className="w-4 h-4 text-star-gold" />
            <span className="text-sm font-medium text-muted-foreground">
              Roblox-based peer support
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
            Welcome to{" "}
            <span className="text-gradient">LuhvReuben's</span>
            <br />
            <span className="text-foreground">Therapy</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up opacity-0" style={{ animationDelay: '0.3s' }}>
            A calm, Roblox-based peer support space — explore your mind like the universe 🌌
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
            <Button variant="cosmic" size="xl" asChild>
              <a href="#book" className="flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                Book a Session
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-slide-up opacity-0" style={{ animationDelay: '0.5s' }}>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">🌌</div>
              <p className="text-sm text-muted-foreground mt-1">Safe Space</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">🪐</div>
              <p className="text-sm text-muted-foreground mt-1">Friendly</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">✨</div>
              <p className="text-sm text-muted-foreground mt-1">Respectful</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
};
