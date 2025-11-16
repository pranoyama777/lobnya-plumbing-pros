import { Phone, MapPin, Handshake, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Звонок или заявка",
    description: "Уточнение задачи, предварительная оценка стоимости и времени"
  },
  {
    icon: MapPin,
    number: "02",
    title: "Выезд мастера",
    description: "Прибытие в удобное для вас время, осмотр и оценка объема работ"
  },
  {
    icon: Handshake,
    number: "03",
    title: "Согласование цены",
    description: "Озвучиваю финальную стоимость, начинаю работу только после вашего согласия"
  },
  {
    icon: Wrench,
    number: "04",
    title: "Выполнение работ",
    description: "Чистая, качественная работа в установленные сроки"
  },
  {
    icon: CheckCircle,
    number: "05",
    title: "Сдача и гарантия",
    description: "Принятие работы, уборка территории, предоставление гарантии"
  }
];

export const Process = () => {
  return (
    <section className="py-20 bg-background" id="process">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Как мы работаем
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Простой и прозрачный процесс от заявки до результата
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="relative flex gap-6 pb-12 last:pb-0"
              >
                {/* Connector Line */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-[30px] top-[60px] bottom-0 w-0.5 bg-border" />
                )}
                
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-[60px] h-[60px] rounded-full bg-gradient-primary flex items-center justify-center shadow-soft">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-5xl font-bold text-primary/20">
                      {step.number}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
