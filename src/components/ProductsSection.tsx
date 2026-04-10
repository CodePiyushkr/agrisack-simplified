import { Package, ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const products = [
  { name: "Woven PP Sacks", desc: "Durable polypropylene woven bags for bulk packaging" },
  { name: "FIBC Jumbo Bags", desc: "Heavy-duty flexible containers for large-scale transport" },
  { name: "Paper Sacks", desc: "Eco-friendly paper bags for food and chemicals" },
  { name: "HDPE Sacks", desc: "High-density polyethylene bags for strength" },
  { name: "BOPP Printed Bags", desc: "Premium printed bags for branded packaging" },
  { name: "Mulch Film", desc: "Agricultural films for crop protection" },
];

const ProductsSection = () => {
  const ref = useReveal();

  return (
    <section id="products" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">What We Make</span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Our <span className="text-gradient">Products</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fully customizable — size, design, weight, and printing tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {products.map((p, i) => (
            <div
              key={p.name}
              className="reveal group relative rounded-2xl p-8 bg-muted border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 overflow-hidden"
            >
              {/* Number accent */}
              <span className="absolute top-4 right-4 text-7xl font-black text-foreground/[0.03] group-hover:text-primary/10 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
                  <Package className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{p.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                <div className="flex items-center gap-2 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
