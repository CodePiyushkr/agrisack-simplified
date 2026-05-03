import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Truck, Sparkles, Factory, Award } from "lucide-react";
import heroProduct from "@/assets/hero-product.jpg";

const stats = [
  { value: "8+", label: "Years" },
  { value: "584M", label: "Sacks" },
  { value: "10+", label: "Industries" },
  { value: "500+", label: "Clients" },
];

const features = [
  { icon: Factory, text: "In-House Manufacturing" },
  { icon: Truck, text: "Pan-India Delivery" },
  { icon: Sparkles, text: "Custom Printing" },
];

const HeroSection = () => (
  <section id="home" className="relative min-h-screen bg-secondary overflow-hidden">
    {/* Subtle grid background */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />

    {/* Ambient glows */}
    <div className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="relative z-10 container min-h-screen flex flex-col justify-center pt-28 pb-16">
      {/* Top heritage strip */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-primary-foreground/10 animate-fade-in-up">
        <div className="flex items-center gap-3">
          <div className="h-px w-10 bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            A Brand by Gopal Polytech
          </span>
        </div>
        <div className="flex items-center gap-2 text-primary-foreground/60 text-xs uppercase tracking-[0.2em]">
          <Award className="w-4 h-4 text-primary" />
          A Unit of Gopal Flexo Group · Trusted Since 1990
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left: Editorial text column */}
        <div className="lg:col-span-7">
          {/* Headline */}
          <h1
            className="font-black text-primary-foreground leading-[0.95] tracking-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s", fontSize: "clamp(2.75rem, 7.5vw, 6rem)" }}
          >
            Industrial Sacks
            <br />
            <span className="text-gradient">Built to Endure.</span>
          </h1>

          {/* Subhead */}
          <p
            className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-8 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            AgriSack manufactures premium woven, FIBC, and BOPP packaging trusted by leaders across agriculture, chemicals, and construction.
          </p>

          {/* Feature pills */}
          <div
            className="flex flex-wrap gap-3 mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            {features.map((f) => (
              <div
                key={f.text}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground/80 text-sm"
              >
                <f.icon className="w-4 h-4 text-primary" />
                {f.text}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-14 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button size="lg" className="text-base px-8 h-14 rounded-full glow-primary group" asChild>
              <a href="#contact">
                Request a Quote
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-base px-6 h-14 rounded-full text-primary-foreground hover:bg-primary-foreground/10 gap-3 group"
              asChild
            >
              <a href="#video">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </span>
                Watch Our Story
              </a>
            </Button>
          </div>

          {/* Inline stats */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-primary-foreground/10 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-black text-gradient leading-none">
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-primary-foreground/50 mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product showcase */}
        <div
          className="lg:col-span-5 hidden lg:block animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="relative">
            {/* Image card */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-primary-foreground/10">
              <img
                src={heroProduct}
                alt="Premium AgriSack FIBC jumbo bag in industrial warehouse"
                className="w-full h-[620px] object-cover"
                width={960}
                height={1280}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/30 to-transparent" />

              {/* Top corner tag */}
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
                Featured
              </div>

              {/* Bottom caption inside image */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-2">
                      Flagship Product
                    </div>
                    <div className="text-2xl font-black text-primary-foreground leading-tight">
                      FIBC Jumbo Bags
                    </div>
                    <div className="text-xs text-primary-foreground/60 mt-1">
                      Up to 2000 kg load capacity
                    </div>
                  </div>
                  <a
                    href="#products"
                    className="shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                    aria-label="See all products"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
