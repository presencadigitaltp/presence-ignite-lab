import { Button } from "@/components/ui/button";
import { Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlackFridayBanner = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple/20 via-pink/20 to-cyan/20 animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.2),transparent_70%)]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="gradient-card border-2 border-purple/50 rounded-3xl p-8 md:p-12 text-center hover:border-pink/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple/30">
          {/* Lightning Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple to-pink mb-6 animate-pulse">
            <Zap className="w-10 h-10 text-foreground" />
          </div>
          
          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-purple via-pink to-cyan bg-clip-text text-transparent">
              BLACK FRIDAY
            </span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-3xl font-bold text-foreground mb-6 animate-glow">
            Promo no ar, venha conferir!
          </p>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Descontos imperdíveis em todos os nossos infoprodutos. Não perca esta oportunidade única!
          </p>
          
          {/* CTA Button */}
          <Link to="/black-friday">
            <Button 
              size="xl" 
              variant="hero"
              className="animate-glow group"
            >
              Ver Todas as Ofertas
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-purple/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-pink/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default BlackFridayBanner;
