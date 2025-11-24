import { Target, Users, Zap } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Infoprodutos práticos e eficazes para o seu sucesso digital"
    },
    {
      icon: Users,
      title: "Para Criadores",
      description: "Ferramentas profissionais para empreendedores digitais"
    },
    {
      icon: Zap,
      title: "Rápido e Fácil",
      description: "Comece a vender seus produtos em minutos"
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent">
              Nossa Missão
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Criamos a maior coleção de templates profissionais do Canva e materiais estratégicos 
            para empreendedores que querem posts profissionais, identidade visual marcante e um feed de autoridade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl gradient-card border border-border hover:border-primary/50 transition-all duration-500 animate-slide-in-left hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple to-pink p-3 mb-6 group-hover:animate-glow">
                <feature.icon className="w-full h-full text-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default AboutSection;
