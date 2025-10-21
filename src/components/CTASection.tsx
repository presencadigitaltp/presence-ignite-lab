import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div className="relative p-12 md:p-20 rounded-3xl overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 gradient-hero animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40" />

          {/* Content */}
          <div className="relative z-10 text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-foreground/10 backdrop-blur-sm mb-8 animate-glow">
              <Rocket className="w-10 h-10 text-foreground" />
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-6 text-foreground">
              Sua presença digital<br />começa agora
            </h2>

            <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
              Junte-se a centenas de criadores que já estão monetizando seu conhecimento
            </p>

            <Button 
              size="xl" 
              variant="secondary"
              className="text-lg font-bold shadow-2xl hover:shadow-pink/50 animate-glow"
            >
              Quero Criar Meu Negócio Digital
            </Button>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-foreground/10 rounded-full blur-xl animate-float" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-foreground/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
