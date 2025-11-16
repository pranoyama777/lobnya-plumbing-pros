import { Wrench, Droplets, Shield, Unplug, Sparkles, Settings } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: Droplets,
    title: "Замена раковин и моек",
    description: "Профессиональная установка любых типов раковин и моек с гарантией качества"
  },
  {
    icon: Settings,
    title: "Установка и ремонт смесителей",
    description: "Монтаж, ремонт и замена смесителей любой сложности"
  },
  {
    icon: Unplug,
    title: "Замена сифонов и гибкой подводки",
    description: "Быстрая замена сифонов, гибких шлангов и подводки"
  },
  {
    icon: Wrench,
    title: "Установка полотенцесушителей",
    description: "Монтаж электрических и водяных полотенцесушителей"
  },
  {
    icon: Shield,
    title: "Герметизация и устранение протечек",
    description: "Надежное устранение протечек любой сложности"
  },
  {
    icon: Sparkles,
    title: "Комплексные работы",
    description: "Полный спектр сантехнических услуг под ключ"
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-secondary" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Наши услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полный спектр профессиональных сантехнических работ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="hover:shadow-strong transition-all duration-300 hover:-translate-y-1 border-border bg-card"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
