import { Shield, Sparkles, Trophy, Clock, BadgeCheck } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Гарантия на все работы",
    description: "Предоставляем официальную гарантию на выполненные работы"
  },
  {
    icon: Sparkles,
    title: "Чистый монтаж",
    description: "Убираю за собой после завершения работ"
  },
  {
    icon: Trophy,
    title: "Качественные материалы",
    description: "Использую только проверенные материалы"
  },
  {
    icon: Clock,
    title: "Удобное время",
    description: "Работаю в удобное для вас время, включая выходные"
  },
  {
    icon: BadgeCheck,
    title: "Прозрачные цены",
    description: "Финальная стоимость без скрытых доплат"
  }
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-background" id="benefits">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Профессиональный подход к каждому клиенту
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center shadow-soft group-hover:shadow-strong transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
