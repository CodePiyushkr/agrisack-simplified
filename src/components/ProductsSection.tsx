import { Package } from "lucide-react";

const products = [
  "Woven PP Sacks",
  "FIBC Jumbo Bags",
  "Paper Sacks",
  "HDPE Sacks",
  "BOPP Printed Bags",
  "Mulch Film",
];

const ProductsSection = () => (
  <section id="products" className="py-20 bg-background">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Our <span className="text-primary">Products</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Fully customizable — size, design, weight, and printing tailored to your needs.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p} className="group relative bg-muted rounded-xl p-6 text-center hover:bg-primary hover:shadow-xl transition-all duration-300">
            <Package className="w-10 h-10 text-primary mx-auto mb-4 group-hover:text-primary-foreground transition-colors" />
            <h3 className="font-semibold text-foreground group-hover:text-primary-foreground transition-colors">{p}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
