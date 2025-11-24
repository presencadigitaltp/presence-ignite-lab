import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import ebookIcon from "@/assets/ebook-icon.png";
import templateIcon from "@/assets/template-icon.png";
import audioIcon from "@/assets/audio-icon.png";
import courseIcon from "@/assets/course-icon.png";

const BlackFriday = () => {
  const products = [
    {
      name: "CanvaBoss",
      description: "Maior pack do Canva com mais de 2.670 templates editáveis",
      icon: templateIcon,
      color: "from-purple to-cyan",
      variants: [
        {
          language: "Português",
          currency: "R$",
          oldPrice: "97",
          newPrice: "67",
          discount: "31%",
          link: "https://pay.hotmart.com/B102547905H?off=ex47g9oj&checkoutMode=10"
        },
        {
          language: "English",
          currency: "$",
          oldPrice: "27",
          newPrice: "19",
          discount: "30%",
          link: "https://pay.hotmart.com/N103008689Y?off=2cthfkj9&checkoutMode=10"
        },
        {
          language: "Español",
          currency: "€",
          oldPrice: "21",
          newPrice: "15",
          discount: "29%",
          link: "https://pay.hotmart.com/G103036211C?off=2jwruh50&checkoutMode=10"
        }
      ]
    },
    {
      name: "Pack Feed Magnético",
      description: "Psicologia das cores + 140 paletas prontas",
      icon: audioIcon,
      color: "from-pink to-purple",
      variants: [
        {
          language: "Português",
          currency: "R$",
          oldPrice: "30",
          newPrice: "15",
          discount: "50%",
          link: "https://pay.hotmart.com/J102705054X?off=yj482nxl&checkoutMode=10"
        },
        {
          language: "English",
          currency: "$",
          oldPrice: "10",
          newPrice: "5",
          discount: "50%",
          link: "https://pay.hotmart.com/S103088456G?off=op1869ln&checkoutMode=10"
        },
        {
          language: "Español",
          currency: "€",
          oldPrice: "9",
          newPrice: "4,90",
          discount: "46%",
          link: "https://pay.hotmart.com/G103097862M?off=ms10u5tk&checkoutMode=10"
        }
      ]
    },
    {
      name: "Pack Saúde, Estética e Bem-estar",
      description: "Templates especializados para profissionais da saúde",
      icon: courseIcon,
      color: "from-cyan to-purple",
      variants: [
        {
          language: "Português",
          currency: "R$",
          oldPrice: "19,90",
          newPrice: "12",
          discount: "40%",
          link: "https://pay.hotmart.com/W103001851C?off=wdl7wxur&checkoutMode=10"
        }
      ]
    },
    {
      name: 'Ebook "Transforme sua Vida"',
      description: "Hábitos que mudam destinos - Guia prático completo",
      icon: ebookIcon,
      color: "from-purple to-pink",
      variants: [
        {
          language: "Português",
          currency: "R$",
          oldPrice: "20",
          newPrice: "10",
          discount: "50%",
          link: "https://pay.hotmart.com/I102492323T?off=6c9u4356&checkoutMode=10"
        },
        {
          language: "English",
          currency: "$",
          oldPrice: "10",
          newPrice: "5",
          discount: "50%",
          link: "https://pay.hotmart.com/X103098630X?off=tekliasf&checkoutMode=10"
        },
        {
          language: "Español",
          currency: "€",
          oldPrice: "10",
          newPrice: "5",
          discount: "50%",
          link: "https://pay.hotmart.com/A103098636I?off=okfzy93j&checkoutMode=10"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple/20 via-background to-cyan/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
            ← Voltar para Home
          </Link>
          
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-6 px-6 py-2 text-lg bg-gradient-to-r from-purple to-pink border-none">
              <Sparkles className="w-5 h-5 mr-2" />
              BLACK FRIDAY 2024
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan via-purple to-pink bg-clip-text text-transparent">
                Ofertas Especiais
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Descontos imperdíveis em todos os nossos infoprodutos. Aproveite esta oportunidade única!
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl gradient-card border border-border hover:border-primary/50 transition-all duration-500 animate-slide-in-right overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Product Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-20 h-20 rounded-2xl p-3 bg-background/50 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                      <img 
                        src={product.icon} 
                        alt={product.name}
                        className="w-full h-full object-contain animate-float"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-foreground">{product.name}</h3>
                      <p className="text-muted-foreground text-sm">{product.description}</p>
                    </div>
                  </div>

                  {/* Variants */}
                  <div className="space-y-4">
                    {product.variants.map((variant, vIndex) => (
                      <div
                        key={vIndex}
                        className="p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-muted-foreground">{variant.language}</span>
                          <Badge className="bg-gradient-to-r from-pink to-purple border-none">
                            <Zap className="w-3 h-3 mr-1" />
                            {variant.discount} OFF
                          </Badge>
                        </div>
                        
                        <div className="flex items-end justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-3">
                              <span className="text-sm text-muted-foreground line-through">
                                {variant.currency}{variant.oldPrice}
                              </span>
                              <span className="text-3xl font-bold bg-gradient-to-r from-cyan to-purple bg-clip-text text-transparent">
                                {variant.currency}{variant.newPrice}
                              </span>
                            </div>
                          </div>
                        </div>

                        <a href={variant.link} target="_blank" rel="noopener noreferrer">
                          <Button 
                            variant="hero" 
                            size="lg"
                            className="w-full"
                          >
                            Comprar Agora
                            <ArrowRight className="ml-2 w-5 h-5" />
                          </Button>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-gradient-to-r from-purple/10 via-cyan/10 to-pink/10 blur-3xl -z-10" />
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="p-12 rounded-3xl gradient-card border border-border animate-fade-in">
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-primary animate-pulse" />
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan via-purple to-pink bg-clip-text text-transparent">
                Não perca esta oportunidade!
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Promoções válidas por tempo limitado. Garanta já seus produtos com desconto especial de Black Friday.
            </p>
            <Link to="/">
              <Button variant="outline" size="lg">
                Ver Todos os Produtos
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlackFriday;
