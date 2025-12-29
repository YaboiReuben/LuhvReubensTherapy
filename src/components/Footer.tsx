import { Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-nebula-pink flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-foreground font-semibold">💚 LuhvReuben's Therapy</span>
          </div>

          {/* Copyright & Disclaimer */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © 2025 LuhvReuben's Therapy. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Roblox-based peer support • Not a licensed mental health service
            </p>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-8 pt-6 border-t border-border/30">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors duration-200">
              Privacy Policy
            </a>
            <span className="text-border">•</span>
            <a href="#" className="hover:text-foreground transition-colors duration-200">
              Terms & Conditions
            </a>
            <span className="text-border">•</span>
            <a href="#contact" className="hover:text-foreground transition-colors duration-200">
              Contact
            </a>
          </div>
        </div>

        {/* Decorative star */}
        <div className="absolute bottom-4 right-4 text-star-gold opacity-30">
          ✦
        </div>
      </div>
    </footer>
  );
};
