import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const socials = [
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/agrisack" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/agrisack" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/@AgriSack" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/agrisack" },
];

const SocialSection = () => (
  <section className="py-16 bg-background">
    <div className="container text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
        Connect With <span className="text-primary">Us</span>
      </h2>
      <div className="flex justify-center gap-6">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-14 h-14 rounded-full bg-muted flex items-center justify-center hover:bg-primary transition-colors"
            aria-label={s.label}
          >
            <s.icon className="w-6 h-6 text-foreground group-hover:text-primary-foreground transition-colors" />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default SocialSection;
