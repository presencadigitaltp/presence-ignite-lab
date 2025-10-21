import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Criadora de Conteúdo",
      text: "Os ebooks da Presença Digital TP transformaram meu negócio. Consegui aumentar minha receita em 300% em apenas 3 meses!",
      avatar: "MS"
    },
    {
      name: "João Santos",
      role: "Coach Digital",
      text: "Os cursos online são incríveis! A plataforma é intuitiva e meus alunos adoram a qualidade do material.",
      avatar: "JS"
    },
    {
      name: "Ana Costa",
      role: "Designer",
      text: "Os packs editáveis do Canva economizam horas do meu trabalho. Super recomendo para quem quer escalar!",
      avatar: "AC"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink via-purple to-cyan bg-clip-text text-transparent">
              Resultados Reais
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja o que nossos clientes têm a dizer
          </p>
        </div>

        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index === activeIndex 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="p-10 rounded-3xl gradient-card border border-border hover:border-primary/50 transition-all">
                <div className="flex items-center gap-1 mb-6 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-lg text-foreground mb-8 text-center leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple to-pink flex items-center justify-center text-foreground font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-border hover:bg-muted'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-pink/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-cyan/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default TestimonialsSection;
