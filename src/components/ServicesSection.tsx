import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: "Ruler",
    title: "Межевание участка",
    description: "Установление и закрепление границ земельного участка. Подготовка межевого плана для Росреестра.",
    price: "от 8 000 ₽",
    duration: "5–14 рабочих дней",
  },
  {
    icon: "FileText",
    title: "Кадастровые работы",
    description: "Постановка на кадастровый учёт, снятие с учёта, уточнение границ и площади участка.",
    price: "от 6 000 ₽",
    duration: "7–10 рабочих дней",
  },
  {
    icon: "Home",
    title: "Оформление прав собственности",
    description: "Помощь в регистрации права собственности на земельный участок, дом, дачу.",
    price: "от 5 000 ₽",
    duration: "10–30 рабочих дней",
  },
  {
    icon: "Scale",
    title: "Земельные споры",
    description: "Консультации и представление интересов в земельных спорах с соседями и органами власти.",
    price: "от 3 000 ₽",
    duration: "индивидуально",
  },
  {
    icon: "Map",
    title: "Схема расположения участка",
    description: "Подготовка схемы для предоставления земельного участка в аренду или собственность.",
    price: "от 7 000 ₽",
    duration: "5–7 рабочих дней",
  },
  {
    icon: "Search",
    title: "Консультация",
    description: "Разбор вашей ситуации, проверка документов, пошаговый план действий.",
    price: "2 000 ₽",
    duration: "1 час",
  },
];

const ServicesSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium">
            <div className="w-8 h-px bg-primary" />
            Услуги
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2
            className="text-4xl font-bold text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Что я могу для вас сделать
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Полный спектр кадастровых и земельно-правовых услуг для физических лиц и организаций
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-3xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <Icon name={service.icon} size={22} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <span className="font-bold text-primary">{service.price}</span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Icon name="Clock" size={12} />
                  {service.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Не нашли нужную услугу? Свяжитесь со мной — обсудим вашу ситуацию</p>
          <Button
            onClick={() => scrollTo("contacts")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
          >
            Задать вопрос
            <Icon name="MessageCircle" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
