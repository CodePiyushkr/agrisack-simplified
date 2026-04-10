import logo from "@/assets/agrisack-logo.png";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

const socialIcons = [
  { icon: Facebook, href: "https://facebook.com/agrisack" },
  { icon: Instagram, href: "https://instagram.com/agrisack" },
  { icon: Youtube, href: "https://youtube.com/@AgriSack" },
  { icon: Linkedin, href: "https://linkedin.com/company/agrisack" },
];

const Footer = () => (
  <footer className="gradient-dark text-secondary-foreground relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

    <div className="container py-16">
      <div className="grid md:grid-cols-3 gap-12 items-start">
        {/* Brand */}
        <div>
          <img src={logo} alt="AgriSack" className="h-12 brightness-200 mb-4" />
          <p className="text-secondary-foreground/50 text-sm leading-relaxed">
            Your Trusted Packaging Partner — delivering quality industrial sacks since 2018.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-primary mb-4">Quick Links</h4>
          <div className="grid grid-cols-2 gap-2">
            {quickLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors py-1"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-bold text-primary mb-4">Follow Us</h4>
          <div className="flex gap-3">
            {socialIcons.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-all duration-300 hover:-translate-y-1"
              >
                <s.icon className="w-5 h-5 text-secondary-foreground/70" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-secondary-foreground/10">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-secondary-foreground/40">
          AgriSack by Gopal Polytech © 2018–2026. All Rights Reserved.
        </p>
        <p className="text-xs text-secondary-foreground/30">
          Developed by Rudraksh Services
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
