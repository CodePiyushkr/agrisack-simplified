import logo from "@/assets/agrisack-logo.png";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground py-10">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="AgriSack" className="h-8 brightness-200" />
        </div>
        <div className="text-center">
          <p className="text-sm text-secondary-foreground/70">
            AgriSack by Gopal Polytech © 2018–2026. All Rights Reserved.
          </p>
          <p className="text-xs text-secondary-foreground/50 mt-1">
            Developed by Rudraksh Services
          </p>
        </div>
        <div className="flex gap-6 text-sm text-secondary-foreground/70">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#products" className="hover:text-primary transition-colors">Products</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
