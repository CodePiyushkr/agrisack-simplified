import { Wheat, Droplets, Building2, FlaskConical, Dog, UtensilsCrossed, Mountain, PackageCheck, Apple, Landmark } from "lucide-react";

const industries = [
  { icon: Wheat, label: "Agriculture & Agro Products" },
  { icon: Droplets, label: "Fertilizer & Pesticide" },
  { icon: Building2, label: "Cement & Construction" },
  { icon: FlaskConical, label: "Chemical & Industrial" },
  { icon: Dog, label: "Animal & Cattle Feed" },
  { icon: UtensilsCrossed, label: "Food Processing & FMCG" },
  { icon: Mountain, label: "Mining & Minerals" },
  { icon: PackageCheck, label: "Packaging & Export Houses" },
  { icon: Apple, label: "Fruits & Vegetable Supply" },
  { icon: Landmark, label: "Government & Institutional" },
];

const IndustriesSection = () => (
  <section id="industries" className="py-20 bg-muted">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Industries We <span className="text-primary">Serve</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From agriculture to exports, AgriSack provides reliable packaging solutions across diverse sectors.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {industries.map((ind) => (
          <div key={ind.label} className="group bg-background rounded-xl p-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-accent mx-auto mb-3 flex items-center justify-center group-hover:bg-primary transition-colors">
              <ind.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <span className="text-sm font-medium text-foreground">{ind.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
