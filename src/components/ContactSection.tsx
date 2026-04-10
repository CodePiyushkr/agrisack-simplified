import { Button } from "@/components/ui/button";
import { Phone, Mail, Globe, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <div className="flex flex-col items-center gap-8 max-w-xl mx-auto">
          <div className="space-y-4 w-full">
            <a href="tel:+919414117231" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-5 h-5 text-primary" /> +91 9414117231
            </a>
            <a href="tel:+919636570398" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-5 h-5 text-primary" /> +91 9636570398
            </a>
            <a href="mailto:sales@agrisack.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5 text-primary" /> sales@agrisack.com
            </a>
            <a href="https://www.agrisack.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
              <Globe className="w-5 h-5 text-primary" /> www.agrisack.com
            </a>
          </div>
          <a
            href="https://wa.me/919414117231?text=Hi%20Agrisack%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button size="lg" className="w-full gap-2 text-lg">
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
