import { Factory, Cog, Package, Paintbrush } from "lucide-react";
import aboutImg from "@/assets/about-factory.jpg";

const highlights = [
  { icon: Factory, label: "Established April 2018" },
  { icon: Cog, label: "Advanced Machinery" },
  { icon: Package, label: "Bulk Manufacturing" },
  { icon: Paintbrush, label: "Customized Solutions" },
];

const AboutSection = () => (
  <section id="about" className="py-20 bg-muted">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            About <span className="text-primary">AgriSack</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            AgriSack is the flagship packaging brand of Gopal Polytech, dedicated to manufacturing high-quality industrial sacks with precision, durability, and innovation. We serve diverse industries with packaging solutions that meet the highest standards.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div key={h.label} className="flex items-center gap-3 p-3 bg-background rounded-lg">
                <div className="w-10 h-10 rounded-md bg-accent flex items-center justify-center">
                  <h.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{h.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img src={aboutImg} alt="AgriSack Factory" loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
