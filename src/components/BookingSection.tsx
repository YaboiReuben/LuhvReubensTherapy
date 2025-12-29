import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Send, RotateCcw, CheckCircle, Loader2 } from "lucide-react";

const sessionTypes = [
  { value: "calm-chat", label: "Calm Chat 🌙 (10 Robux)" },
  { value: "deep-talk", label: "Deep Talk 🌌 (50 Robux)" },
  { value: "follow-up", label: "Follow-Up 🚀 (40 Robux)" },
];

const timeSlots = [
  "4:30 PM AEDT",
  "5:00 PM AEDT",
  "5:30 PM AEDT",
  "6:00 PM AEDT",
  "6:30 PM AEDT",
  "7:00 PM AEDT",
  "7:30 PM AEDT",
  "8:00 PM AEDT",
];

export const BookingSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    sessionType: "",
    preferredTime: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const webhookUrl = "https://discordapp.com/api/webhooks/1454959538569482382/lLjX4nW5_tEDZ2vCpQ250kTker38DhyX64oZ_8paQGktUOLH3ppUoynYVAH8lxtjdGkd";
      
      const embed = {
        title: "🌌 New Booking Request",
        color: 0x9945FF,
        fields: [
          { name: "👤 Roblox Username", value: formData.username, inline: true },
          { name: "📧 Email", value: formData.email || "Not provided", inline: true },
          { name: "🎫 Session Type", value: formData.sessionType, inline: false },
          { name: "⏰ Preferred Time", value: formData.preferredTime, inline: true },
          { name: "📝 Notes", value: formData.notes || "None", inline: false },
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: "LuhvReuben's Therapy Booking System",
        },
      };

      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ embeds: [embed] }),
      });

      setIsSubmitted(true);
      toast({
        title: "Booking Submitted! 🚀",
        description: "LuhvReuben will contact you within 1-3 days.",
      });
    } catch (error) {
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      username: "",
      email: "",
      sessionType: "",
      preferredTime: "",
      notes: "",
    });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <section id="book" className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto glass-card p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-nebula-pink flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
              <CheckCircle className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Thanks for Booking! 🌟
            </h2>
            <p className="text-muted-foreground mb-8">
              LuhvReuben will contact you via Roblox or email to confirm your session.
              Please allow 1–3 days for a response.
            </p>
            <Button variant="glass" onClick={handleReset}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Book Another Session
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book a <span className="text-gradient">Session</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you within 1-3 days
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-nebula-pink mx-auto rounded-full mt-4" />
        </div>

        {/* Booking Form */}
        <div className="max-w-2xl mx-auto glass-card p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Roblox Username */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Roblox Username *
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                placeholder="Enter your Roblox username"
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email (optional)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Contact email: luhreubenstherapy@gmail.com
              </p>
            </div>

            {/* Session Type */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Session Type *
              </label>
              <select
                name="sessionType"
                value={formData.sessionType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              >
                <option value="">Select a session type</option>
                {sessionTypes.map((type) => (
                  <option key={type.value} value={type.label}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Preferred Time */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Preferred Time (AEDT) *
              </label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              >
                <option value="">Select a time slot</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Notes (optional)
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                placeholder="Anything you'd like us to know before the session..."
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                type="submit"
                variant="cosmic"
                size="lg"
                className="flex-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Submit Booking
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="glass"
                size="lg"
                onClick={handleReset}
                disabled={isSubmitting}
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset Form
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
