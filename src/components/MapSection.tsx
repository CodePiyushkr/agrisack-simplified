import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";

const MapSection = () => (
  <section className="py-20 bg-muted">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-10">
        Find <span className="text-primary">Us</span>
      </h2>
      <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.123456789!2d75.123456789!3d26.912345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzQ0LjQiTiA3NcKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Gopal Polytech Location"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <Button asChild>
          <a href="https://maps.google.com/?q=Gopal+Polytech" target="_blank" rel="noopener noreferrer">
            <MapPin className="w-4 h-4 mr-2" /> Get Directions
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="https://g.page/gopal-polytech/review" target="_blank" rel="noopener noreferrer">
            <Star className="w-4 h-4 mr-2" /> View Reviews
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default MapSection;
