import { Zap, Shield, Paintbrush, BarChart3, Users } from "lucide-react";

const points = [
  { icon: Zap, title: "Advanced Manufacturing Technology" },
  { icon: Shield, title: "High Strength & Durability" },
  { icon: Paintbrush, title: "Custom Design & Printing" },
  { icon: BarChart3, title: "Bulk Production Capacity" },
  { icon: Users, title: "Trusted by Multiple Industries" },
];

const WhyChooseSection = () => (
  <section className="py-20 bg-secondary text-secondary-foreground">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Why Choose <span className="text-primary">AgriSack</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {points.map((p) => (
          <div key={p.title} className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
              <p.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-sm text-secondary-foreground">{p.title}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
