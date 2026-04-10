import { useReveal } from "@/hooks/useReveal";

const VideoSection = () => {
  const ref = useReveal();

  return (
    <section id="video" className="section-padding bg-muted relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-1 gradient-primary" />

      <div className="container">
        <div className="text-center mb-12 reveal">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">See Us in Action</span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Discover <span className="text-gradient">AgriSack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Watch our manufacturing process and see the quality that sets us apart.
          </p>
        </div>

        <div className="reveal-scale max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl glow-primary">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/xWcha86G6Yk?rel=0"
                title="AgriSack Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
