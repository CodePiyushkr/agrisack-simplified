import { Button } from "@/components/ui/button";
import { ArrowDown, Play, Package, Factory, Award, Users, CheckCircle2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import sacksImg from "@/assets/hero-sacks.jpg";

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
                className="text-base px-8 rounded-full border-primary/40 bg-primary-foreground/5 backdrop-blur-sm text-primary-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary gap-2 group"
                asChild
              >
                <a href="#video">
                  <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-primary group-hover:bg-primary-foreground/20 transition-colors">
                    <Play className="w-3 h-3 text-primary-foreground fill-primary-foreground" />
                  </span>
                  Watch Video
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Image showcase */}
          <div className="hidden lg:flex items-center justify-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-8 bg-primary/20 rounded-3xl blur-[80px]" />

              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/40 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary/30 rounded-2xl" />

              {/* Main image */}
              <div className="relative w-[420px] h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-primary-foreground/10">
                <img src={sacksImg} alt="AgriSack industrial woven sacks stacked in factory" className="w-full h-full object-cover" width={1024} height={1024} />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
              </div>

              {/* Floating badge top */}
              <div className="absolute -top-5 -right-5 glass rounded-2xl px-4 py-3 shadow-2xl animate-float">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">ISO Quality</div>
                    <div className="text-sm font-bold text-foreground">Certified</div>
                  </div>
                </div>
              </div>

              {/* Floating badge bottom */}
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl px-4 py-3 shadow-2xl animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                    <Package className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-foreground leading-none">Bulk</div>
                    <div className="text-[11px] text-muted-foreground">Manufacturing</div>
                  </div>
                </div>
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

  </section>
);

export default HeroSection;
