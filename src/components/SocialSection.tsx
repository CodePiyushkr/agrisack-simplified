import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const socials = [
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/agrisack", color: "hover:bg-[hsl(221,44%,41%)]" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/agrisack", color: "hover:bg-[hsl(326,78%,48%)]" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/@AgriSack", color: "hover:bg-[hsl(0,100%,50%)]" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/agrisack", color: "hover:bg-[hsl(201,100%,35%)]" },
];

const SocialSection = () => {
  const ref = useReveal();

  return (
    <section className="py-20 gradient-dark relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.1),transparent_70%)]" />

      <div className="container relative text-center">
        <div className="reveal">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">Stay Connected</span>
          <h2 className="text-4xl md:text-5xl font-black text-secondary-foreground mb-4">
            Connect With <span className="text-primary">Us</span>
          </h2>
          <p className="text-secondary-foreground/50 mb-10 max-w-md mx-auto">Follow us on social media for updates, behind-the-scenes, and more.</p>
        </div>

        <div className="flex justify-center gap-5 stagger-children">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal-scale group w-16 h-16 rounded-2xl bg-secondary-foreground/10 border border-secondary-foreground/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-transparent ${s.color}`}
              aria-label={s.label}
            >
              <s.icon className="w-7 h-7 text-secondary-foreground/70 group-hover:text-secondary-foreground transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
