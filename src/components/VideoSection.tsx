import { Play } from "lucide-react";

const VideoSection = () => (
  <section id="video" className="py-20 bg-background">
    <div className="container text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Discover <span className="text-primary">AgriSack</span> in Action
      </h2>
      <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
        Watch our manufacturing process and see the quality that sets us apart.
      </p>
      <a
        href="https://www.youtube.com/@AgriSack"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group block max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl"
      >
        <div className="aspect-video bg-secondary flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play className="w-8 h-8 text-primary-foreground ml-1" />
          </div>
        </div>
        <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/10 transition-colors" />
      </a>
    </div>
  </section>
);

export default VideoSection;
