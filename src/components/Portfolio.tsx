import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

const resultWorks = [
  { image: work2, title: "Установка современного смесителя" },
  { image: work4, title: "Монтаж полотенцесушителя" },
];

const processWorks = [
  { image: work1, title: "Установка раковины" },
  { image: work3, title: "Герметизация соединений" },
];

export const Portfolio = () => {
  return (
    <section className="py-20 bg-secondary" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Наши работы
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Примеры выполненных проектов
          </p>
        </div>

        {/* Results Gallery */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
            Готовые результаты
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resultWorks.map((work, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-strong transition-all duration-300"
              >
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-primary-foreground text-xl font-semibold px-4 text-center">
                    {work.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Gallery */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
            Процесс работы
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {processWorks.map((work, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-strong transition-all duration-300"
              >
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-primary-foreground text-xl font-semibold px-4 text-center">
                    {work.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
