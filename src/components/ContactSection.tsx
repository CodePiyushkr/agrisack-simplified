import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Globe } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", requirement: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Name: ${form.name}%0APhone: ${form.phone}%0ARequirement: ${form.requirement}`;
    window.open(`https://wa.me/919414117231?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Contact Details</h3>
            <div className="space-y-4">
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
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            <Input placeholder="Phone Number" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
            <Textarea placeholder="Your Requirement" rows={4} value={form.requirement} onChange={(e) => setForm({ ...form, requirement: e.target.value })} required />
            <Button type="submit" size="lg" className="w-full">Send Enquiry via WhatsApp</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
