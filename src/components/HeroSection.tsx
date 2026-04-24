import { Button } from "@/components/ui/button";
import { ArrowDown, Play, Package, Factory, Award, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/agrisack-logo.png";

const stats = [
  { value: "8+", label: "Years of Excellence", icon: Award },
  { value: "10+", label: "Industries Served", icon: Factory },
  { value: "500+", label: "Happy Clients", icon: Users },
  { value: "584M", label: "Sacks Produced", icon: Package },
];

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background with parallax-like layers */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="Factory" className="w-full h-full object-cover scale-110" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/85 to-primary/30" />
    </div>

    {/* Animated geometric shapes */}
    <div className="absolute top-1/4 -left-20 w-96 h-96 border border-primary/20 rounded-full animate-[spin_30s_linear_infinite]" />
    <div className="absolute top-1/3 -left-10 w-72 h-72 border border-primary/10 rounded-full animate-[spin_25s_linear_infinite_reverse]" />
    <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
    <div className="absolute top-10 right-1/4 w-3 h-3 bg-primary rounded-full animate-float" />
    <div className="absolute top-1/3 right-10 w-2 h-2 bg-primary/60 rounded-full animate-float" style={{ animationDelay: "1s" }} />
    <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-float" style={{ animationDelay: "2s" }} />

    {/* Diagonal accent line */}
    <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden pointer-events-none">
      <div className="absolute -top-1/2 -right-1/4 w-full h-[200%] bg-gradient-to-b from-primary/5 to-transparent rotate-12 origin-top-right" />
    </div>

    {/* Content */}
    <div className="relative z-10 w-full py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-primary text-sm font-medium mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              A Brand by Gopal Polytech
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground mb-6 leading-[0.95] tracking-tight animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Agri
              <span className="relative inline-block text-primary">
                Sack
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C40 2 100 2 198 8" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" className="animate-[draw_1s_ease-out_0.8s_forwards]" strokeDasharray="200" strokeDashoffset="200" />
                </svg>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-3 font-heading font-semibold animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Your Trusted Packaging Partner
            </p>

            <p className="text-base md:text-lg text-primary-foreground/50 mb-10 max-w-lg animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Delivering Quality Since April 2018 — High-quality industrial sacks with precision, durability, and innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <Button size="lg" className="text-base px-8 rounded-full glow-primary group" asChild>
                <a href="#contact">
                  Contact Us
                  <ArrowDown className="w-4 h-4 ml-2 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 rounded-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 gap-2 group"
                asChild
              >
                <a href="#video">
                  <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <Play className="w-3 h-3 text-primary fill-primary" />
                  </span>
                  Watch Video
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Logo showcase with glow */}
          <div className="hidden lg:flex items-center justify-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] scale-150 animate-pulse" />
              <div className="relative w-80 h-80 rounded-full glass-dark flex items-center justify-center border-2 border-primary/20 p-8">
                <img src={logo} alt="AgriSack Logo" className="w-full h-full object-contain drop-shadow-2xl animate-float" />
              </div>
              {/* Orbiting dots */}
              <div className="absolute inset-0 animate-[spin_15s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50" />
              </div>
              <div className="absolute inset-[-20px] animate-[spin_20s_linear_infinite_reverse]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary/60 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip - glassmorphism cards */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          {stats.map((s) => (
            <div key={s.label} className="group relative text-center p-6 rounded-2xl glass-dark hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
              <s.icon className="w-5 h-5 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl md:text-4xl font-black text-primary mb-1">{s.value}</div>
              <div className="text-xs md:text-sm text-primary-foreground/60">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/40 hover:text-primary transition-colors">
      <span className="text-xs uppercase tracking-widest">Scroll</span>
      <div className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center p-1">
        <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
      </div>
    </a>
  </section>
);

export default HeroSection;
