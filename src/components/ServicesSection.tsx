import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: "MapPin",
    title: "Подбор и получение участка от государства",
    description: "Помогу получить земельный участок под ИЖС, ЛПХ, рекреацию и другие цели. Проверю реальную возможность.",
    price: "по договорённости",
    duration: "индивидуально",
  },
  {
    icon: "Search",
    title: "Проверка участка перед оформлением или покупкой",
    description: "Анализ участка: можно ли оформить, какие есть риски. Включая участки с Авито, ДомКлик или у частных лиц.",
    price: "от 5 000 ₽",
    duration: "1–3 дня",
  },
  {
    icon: "Map",
    title: "Схема СРЗУ в программе Argo",
    description: "Подготовка схемы расположения земельного участка на кадастровом плане территории.",
    price: "от 3 000 ₽/шт",
    duration: "до 1 суток",
  },
  {
    icon: "FileCheck",
    title: "Полная проверка градостроительной документации",
    description: "Анализ ПЗЗ, генерального плана, зон с особыми условиями использования территории.",
    price: "от 5 000 ₽",
    duration: "2–5 дней",
  },
  {
    icon: "FileText",
    title: "Подготовка и проверка документов",
    description: "Подготовка заявлений, схем и документов. Сопровождение процедуры предварительного согласования.",
    price: "по договорённости",
    duration: "индивидуально",
  },
  {
    icon: "Scale",
    title: "Разбор отказов администрации",
    description: "Объясню причину отказа и дам конкретное решение. Помогу с оформлением участка без торгов.",
    price: "по договорённости",
    duration: "индивидуально",
  },
  {
    icon: "MessageCircle",
    title: "Консультация",
    description: "Онлайн или письменный формат. Разбор вашей ситуации с пошаговыми рекомендациями по ВРИ, зонам, ограничениям.",
    price: "5 000 ₽",
    duration: "онлайн / письменно",
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
            Чем могу помочь
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Полный спектр услуг по земельным вопросам — работаю по всей России дистанционно
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
              <h3 className="font-semibold text-foreground text-lg mb-2 leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
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
          <p className="text-muted-foreground mb-4">Не нашли нужную услугу? Свяжитесь — разберём вашу ситуацию</p>
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
