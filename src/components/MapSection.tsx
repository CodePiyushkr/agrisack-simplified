import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const MapSection = () => {
  const ref = useReveal();

  return (
    <section className="section-padding bg-background relative overflow-hidden" ref={ref}>
      <div className="container">
        <div className="text-center mb-12 reveal">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">Location</span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Find <span className="text-gradient">Us</span>
          </h2>
        </div>

        <div className="reveal-scale max-w-4xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-border/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.123456789!2d75.123456789!3d26.912345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzQ0LjQiTiA3NcKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gopal Polytech Location"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button size="lg" className="rounded-full gap-2 glow-primary" asChild>
              <a href="https://maps.google.com/?q=Gopal+Polytech" target="_blank" rel="noopener noreferrer">
                <MapPin className="w-4 h-4" /> Get Directions
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full gap-2" asChild>
              <a href="https://g.page/gopal-polytech/review" target="_blank" rel="noopener noreferrer">
                <Star className="w-4 h-4" /> View Reviews
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
