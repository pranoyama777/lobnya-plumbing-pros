import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Benefits } from "@/components/Benefits";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Benefits />
      <Portfolio />
      <Process />
      <Testimonials />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-card/50 backdrop-blur-xl border-t border-border/50 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl text-muted-foreground">
            © 2024 Сантехнические услуги в Лобне. Все права защищены.
          </p>
          <p className="text-lg text-muted-foreground/60 mt-2">
            Профессионально • Надежно • С гарантией
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
