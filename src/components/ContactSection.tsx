import { Button } from "@/components/ui/button";
import { Mail, User, MessageCircle } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions? Reach out to us through any of these channels
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-nebula-pink mx-auto rounded-full mt-4" />
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Roblox Contact */}
          <div className="glass-card p-8 text-center group hover:scale-105 transition-all duration-300 hover:border-primary/50">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-nebula-pink/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <User className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Roblox</h3>
            <p className="text-muted-foreground mb-4">Message us on Roblox</p>
            <div className="glass-card px-4 py-2 inline-block mb-6">
              <span className="text-foreground font-medium">LuhvReuben</span>
            </div>
            <div>
              <Button variant="cosmic" asChild>
                <a
                  href="https://www.roblox.com/users/profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Send Message
                </a>
              </Button>
            </div>
          </div>

          {/* Email Contact */}
          <div className="glass-card p-8 text-center group hover:scale-105 transition-all duration-300 hover:border-accent/50">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-nebula-blue/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground mb-4">For inquiries and support</p>
            <div className="glass-card px-4 py-2 inline-block mb-6">
              <span className="text-foreground font-medium text-sm md:text-base">
                luhreubenstherapy@gmail.com
              </span>
            </div>
            <div>
              <Button variant="accent" asChild>
                <a
                  href="mailto:luhreubenstherapy@gmail.com"
                  className="flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  📩 Send a Message
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Response Time Notice */}
        <div className="mt-12 max-w-xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            ✨ We typically respond within 1-3 days. For urgent matters, please use Roblox messaging
            for faster responses during our available hours.
          </p>
        </div>
      </div>
    </section>
  );
};
