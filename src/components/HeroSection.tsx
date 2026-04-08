import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Factory" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-secondary/80" />
    </div>
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-4 leading-tight">
        Agri<span className="text-primary">Sack</span>
      </h1>
      <p className="text-xl md:text-2xl text-primary-foreground/90 mb-2 font-heading font-semibold">
        Your Trusted Packaging Partner
      </p>
      <p className="text-base md:text-lg text-primary-foreground/70 mb-8">
        A Brand by Gopal Polytech — Delivering Quality Since April 2018
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="text-base px-8" asChild>
          <a href="#contact">Contact Us</a>
        </Button>
        <Button size="lg" variant="outline" className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
          <a href="#video">Watch Introduction Video</a>
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
