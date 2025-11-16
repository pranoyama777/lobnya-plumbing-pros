import { Phone, MessageCircle, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const phoneNumber = "+7 (999) 123-45-67";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      toast.error("Пожалуйста, заполните все поля");
      return;
    }
    
    // Simulate form submission
    toast.success("Спасибо! Мы свяжемся с вами в ближайшее время");
    setName("");
    setPhone("");
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber.replace(/\D/g, '')}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/79991234567`, '_blank');
  };

  const handleTelegram = () => {
    window.open(`https://t.me/79991234567`, '_blank');
  };

  return (
    <section className="py-20 bg-background" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Готовы ответить на ваши вопросы и выполнить работу качественно
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="shadow-soft bg-card border-border">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">
                Оставьте заявку
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input 
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Номер телефона"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-background border-border"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="shadow-soft bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-card-foreground">
                  Контакты
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-muted-foreground mb-2">Телефон:</p>
                    <a 
                      href={`tel:${phoneNumber.replace(/\D/g, '')}`}
                      className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
                    >
                      {phoneNumber}
                    </a>
                  </div>

                  <div>
                    <p className="text-muted-foreground mb-2">Зона обслуживания:</p>
                    <p className="text-lg font-semibold text-card-foreground">
                      Работаю по всей Лобне
                    </p>
                  </div>

                  <div className="pt-4">
                    <p className="text-muted-foreground mb-3">Или напишите нам:</p>
                    <div className="flex gap-3">
                      <Button 
                        onClick={handleCall}
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        Позвонить
                      </Button>
                      <Button 
                        onClick={handleWhatsApp}
                        variant="outline"
                        className="flex-1"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        WhatsApp
                      </Button>
                    </div>
                    <Button 
                      onClick={handleTelegram}
                      variant="outline"
                      className="w-full mt-3"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Telegram
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft bg-gradient-primary text-primary-foreground border-0">
              <CardContent className="p-6 text-center">
                <p className="text-xl font-bold mb-2">
                  Нужна консультация?
                </p>
                <p className="mb-4 text-primary-foreground/90">
                  Звоните прямо сейчас!
                </p>
                <Button 
                  onClick={handleCall}
                  size="lg"
                  className="bg-background hover:bg-background/90 text-foreground w-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {phoneNumber}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
