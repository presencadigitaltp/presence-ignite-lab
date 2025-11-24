import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 gradient-hero opacity-30 animate-pulse" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 animate-slide-in-left">
          <span className="bg-gradient-to-r from-purple via-cyan to-pink bg-clip-text text-transparent">
            Presença Digital TP
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-in-right">
          Mais de 2.670 templates editáveis no Canva, packs nichados e conteúdos estratégicos para elevar sua presença digital.
        </p>

        <Button 
          size="xl" 
          variant="hero" 
          onClick={scrollToProducts}
          className="animate-glow"
        >
          Começar Agora
        </Button>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-pink/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-cyan/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>
    </section>
  );
};

export default HeroSection;
