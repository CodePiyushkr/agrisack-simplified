import { Button } from "@/components/ui/button";
import { ArrowDown, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "6+", label: "Years of Excellence" },
  { value: "10+", label: "Industries Served" },
  { value: "500+", label: "Happy Clients" },
  { value: "1M+", label: "Sacks Produced" },
];

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="Factory" className="w-full h-full object-cover scale-105" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/80 to-secondary/95" />
    </div>

    {/* Decorative elements */}
    <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

    {/* Content */}
    <div className="relative z-10 w-full">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            A Brand by Gopal Polytech
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground mb-6 leading-[0.9] animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Agri<span className="text-primary">Sack</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-4 font-heading font-semibold animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Your Trusted Packaging Partner
          </p>

          <p className="text-base md:text-lg text-primary-foreground/50 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Delivering Quality Since April 2018 — High-quality industrial sacks with precision, durability, and innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <Button size="lg" className="text-base px-8 rounded-full glow-primary" asChild>
              <a href="#contact">Contact Us</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 rounded-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 gap-2"
              asChild
            >
              <a href="#video">
                <Play className="w-4 h-4" /> Watch Video
              </a>
            </Button>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
          {stats.map((s) => (
            <div key={s.label} className="text-center p-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
              <div className="text-3xl md:text-4xl font-black text-primary mb-1">{s.value}</div>
              <div className="text-xs md:text-sm text-primary-foreground/60">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/40 animate-bounce">
      <ArrowDown className="w-6 h-6" />
    </a>
  </section>
);

export default HeroSection;
