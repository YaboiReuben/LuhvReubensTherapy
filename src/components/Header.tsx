import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Sessions", href: "#sessions" },
  { label: "Book", href: "#book" },
  { label: "Hours", href: "#hours" },
  { label: "Rules", href: "#rules" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-nebula-pink flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground hidden sm:block">
              💚 LuhvReuben's Therapy
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="cosmic" size="default" asChild>
              <a href="#book">Book Session</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-foreground hover:bg-secondary rounded-lg transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <Button variant="cosmic" className="mt-2" asChild>
              <a href="#book" onClick={() => setIsMobileMenuOpen(false)}>
                Book Session
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
