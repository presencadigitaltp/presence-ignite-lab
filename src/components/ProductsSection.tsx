import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ebookIcon from "@/assets/ebook-icon.png";
import courseIcon from "@/assets/course-icon.png";
import templateIcon from "@/assets/template-icon.png";
import audioIcon from "@/assets/audio-icon.png";

const ProductsSection = () => {
  const products = [
    {
      title: "CanvaBoss",
      description: "O maior pack do Canva com mais de 2.670 templates 100% editáveis divididos em 60 packs temáticos. Crie posts, e-books, carrosséis e muito mais.",
      icon: templateIcon,
      color: "from-purple to-cyan"
    },
    {
      title: "Packs Temáticos Nichados",
      description: "Coleções especializadas para profissionais: Saúde, Estética, Artes, Negócios, Marketing Digital e muito mais. Templates personalizáveis para qualquer nicho.",
      icon: courseIcon,
      color: "from-pink to-purple"
    },
    {
      title: "Pack Feed Magnético",
      description: "Guia completo de psicologia das cores + 140 paletas prontas para criar uma identidade visual que atrai e converte.",
      icon: audioIcon,
      color: "from-purple to-pink"
    },
    {
      title: "Ebook Transforme sua Vida",
      description: "Guia prático sobre hábitos que mudam destinos. Estratégias testadas para desenvolvimento pessoal e produtividade.",
      icon: ebookIcon,
      color: "from-cyan to-purple"
    }
  ];

  return (
    <section id="products" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan via-purple to-pink bg-clip-text text-transparent">
              Catálogo de Infoprodutos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Packs de Canva profissionais, guias estratégicos e conteúdos exclusivos para transformar sua presença digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-3xl gradient-card border border-border hover:border-primary/50 transition-all duration-500 animate-slide-in-right hover:scale-105 cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl p-4 group-hover:scale-110 transition-transform duration-500">
                  <img 
                    src={product.icon} 
                    alt={product.title}
                    className="w-full h-full object-contain animate-float"
                    style={{ animationDelay: `${index * 1}s` }}
                  />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-foreground">{product.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                >
                  Ver Detalhes
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-gradient-to-r from-purple/10 via-cyan/10 to-pink/10 blur-3xl -z-10" />
    </section>
  );
};

export default ProductsSection;
