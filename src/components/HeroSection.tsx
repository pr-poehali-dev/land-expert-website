import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/projects/ebc3b386-b5d4-4a32-8e3c-5ed0d532cccd/files/cc5fbfb6-cdb1-40d0-a21f-34c1d383b449.jpg)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/20" />

      <div className="absolute top-32 right-16 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute bottom-24 left-8 w-48 h-48 organic-shape bg-primary/10 blur-2xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-secondary/80 rounded-full px-4 py-2 text-sm text-secondary-foreground">
            <Icon name="Shield" size={14} />
            <span>Официальный кадастровый инженер</span>
          </div>

          <h1
            className="text-5xl md:text-6xl font-bold leading-tight text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Решаю земельные
            <span className="block text-primary">вопросы</span>
            с уверенностью
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            Помогаю оформить, разграничить и защитить вашу землю. Более 10 лет опыта
            в кадастровых работах, межевании и земельных спорах.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => scrollTo("contacts")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
            >
              Получить консультацию
              <Icon name="ArrowRight" size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("services")}
              className="border-primary text-primary hover:bg-primary/10"
            >
              Узнать об услугах
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-4">
            {[
              { value: "500+", label: "Решённых дел" },
              { value: "10 лет", label: "Опыта работы" },
              { value: "98%", label: "Довольных клиентов" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex justify-center items-center">
          <div className="relative">
            <div className="organic-shape-2 overflow-hidden w-80 h-80 shadow-2xl">
              <img
                src="https://cdn.poehali.dev/projects/ebc3b386-b5d4-4a32-8e3c-5ed0d532cccd/files/69360811-be23-44f1-9dce-96cebf57a301.jpg"
                alt="Земельный эксперт"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-foreground font-medium">Доступна сейчас</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
