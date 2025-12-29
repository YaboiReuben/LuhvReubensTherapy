import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this professional therapy?",
    answer:
      "No, LuhvReuben's Therapy is peer support only. We are not licensed therapists or mental health professionals. If you're experiencing a mental health emergency, please contact a professional helpline or emergency services.",
  },
  {
    question: "How do I pay for sessions?",
    answer:
      "Payment is made in Robux via gamepasses or group funds. After your booking is confirmed, we'll provide you with instructions on how to complete your payment through Roblox.",
  },
  {
    question: "Is my information private?",
    answer:
      "Yes, we treat all conversations and personal information with respect and confidentiality within Roblox's platform rules. However, please note that we may need to break confidentiality if there's a safety concern.",
  },
  {
    question: "Can I reschedule my session?",
    answer:
      "Yes! If you need to reschedule, please contact us via Roblox message or email (luhreubenstherapy@gmail.com) at least 24 hours before your scheduled session.",
  },
  {
    question: "What happens during a session?",
    answer:
      "Sessions take place in a private Roblox environment. You can talk about anything that's on your mind - we're here to listen, support, and help you feel heard in a judgment-free space.",
  },
  {
    question: "What if I need more support than peer support can provide?",
    answer:
      "If we feel you need more support than we can offer, we'll encourage you to seek help from a professional. We can provide resources and helpline information for your region.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-nebula-pink mx-auto rounded-full mt-4" />
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border-border/50 px-6 rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="text-foreground font-semibold text-left hover:text-primary transition-colors py-6">
                  <span className="flex items-center gap-3">
                    <span className="text-star-gold">✦</span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
