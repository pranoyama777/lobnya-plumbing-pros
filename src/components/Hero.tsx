import { Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const phoneNumber = "+7 (999) 123-45-67";
  
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber.replace(/\D/g, '')}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/79991234567`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-primary-foreground">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Профессиональные сантехнические услуги в Лобне
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
          Чисто, надежно, с гарантией. Выезд в день обращения.
        </p>
        
        {/* Phone Number Display */}
        <div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <a 
            href={`tel:${phoneNumber.replace(/\D/g, '')}`}
            className="inline-flex items-center gap-3 text-3xl md:text-4xl font-bold text-primary-foreground hover:text-primary-glow transition-colors"
          >
            <Phone className="w-10 h-10" />
            {phoneNumber}
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <Button 
            size="lg" 
            onClick={handleCall}
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 h-auto shadow-strong hover:shadow-soft transition-all duration-300 hover:scale-105"
          >
            <Phone className="w-5 h-5 mr-2" />
            Позвонить сейчас
          </Button>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={handleWhatsApp}
            className="bg-background/90 hover:bg-background text-foreground text-lg px-8 py-6 h-auto shadow-strong hover:shadow-soft transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Написать в WhatsApp
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
