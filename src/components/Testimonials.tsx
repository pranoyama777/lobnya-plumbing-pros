import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    name: "Анна Смирнова",
    text: "Отличный мастер! Быстро приехал, все объяснил, сделал качественно. Смеситель работает идеально, нет протечек. Рекомендую!",
    rating: 5
  },
  {
    name: "Дмитрий Петров",
    text: "Устанавливал полотенцесушитель. Работа выполнена на высшем уровне, аккуратно, чисто. Цена адекватная, без накруток. Буду обращаться еще!",
    rating: 5
  },
  {
    name: "Елена Васильева",
    text: "Срочно понадобилась замена раковины. Мастер приехал в тот же день! Все сделал быстро и качественно. Очень довольна результатом и отношением к работе.",
    rating: 5
  },
  {
    name: "Игорь Соколов",
    text: "Профессионал своего дела. Устранял протечку - сделал все быстро и надежно. После работы убрал за собой. Гарантию дал письменно. Отличный сервис!",
    rating: 5
  },
  {
    name: "Мария Козлова",
    text: "Очень довольна работой! Установка смесителя прошла без проблем, мастер все делал аккуратно. Цена оказалась даже ниже, чем ожидала. Спасибо!",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Что говорят о нашей работе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-strong transition-all duration-300 bg-card border-border">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-bold text-card-foreground">
                  — {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
