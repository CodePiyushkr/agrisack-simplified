import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ShieldCheck, Truck, Sparkles } from "lucide-react";
import heroProduct from "@/assets/hero-product.jpg";

const stats = [
  { value: "8+", label: "Years" },
  { value: "584M", label: "Sacks" },
  { value: "10+", label: "Industries" },
  { value: "500+", label: "Clients" },
];

const features = [
  { icon: ShieldCheck, text: "ISO Certified Quality" },
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
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="relative z-10 container min-h-screen flex flex-col justify-center pt-28 pb-16">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left: Editorial text column */}
        <div className="lg:col-span-7">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8 animate-fade-in-up">
            <div className="h-px w-10 bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              A Brand by Gopal Polytech
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-black text-primary-foreground leading-[0.95] tracking-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s", fontSize: "clamp(2.75rem, 7vw, 5.5rem)" }}
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
            AgriSack manufactures premium woven, FIBC, and BOPP packaging trusted by leaders across agriculture, chemicals, and construction since 2018.
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

          {/* Inline stats — minimal editorial style */}
          <div
            className="flex flex-wrap items-center gap-x-10 gap-y-6 pt-8 border-t border-primary-foreground/10 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-black text-primary-foreground leading-none">
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
            {/* Number marker */}
            <div className="absolute -top-6 -left-6 z-20 text-[7rem] font-black leading-none text-primary/20 select-none">
              01
            </div>

            {/* Vertical label */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 z-20 hidden xl:block">
              <span className="text-[10px] uppercase tracking-[0.4em] text-primary-foreground/40 [writing-mode:vertical-rl] rotate-180">
                Premium · Durable · Certified
              </span>
            </div>

            {/* Image card */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-primary-foreground/10">
              <img
                src={heroProduct}
                alt="Premium AgriSack FIBC jumbo bag in industrial warehouse"
                className="w-full h-[600px] object-cover"
                width={960}
                height={1280}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent" />

              {/* Bottom caption inside image */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-2">
                      Featured Product
                    </div>
                    <div className="text-xl font-bold text-primary-foreground">
                      FIBC Jumbo Bags
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

            {/* Floating quality badge */}
            <div className="absolute -bottom-6 -right-6 glass rounded-2xl px-5 py-4 shadow-2xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                    Quality
                  </div>
                  <div className="text-sm font-bold text-foreground">ISO Certified</div>
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
