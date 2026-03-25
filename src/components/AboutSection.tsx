import Icon from "@/components/ui/icon";

const achievements = [
  { icon: "GraduationCap", text: "Юридическое образование, специализация — земельное право" },
  { icon: "MapPin", text: "Специалист по оформлению земельных участков" },
  { icon: "Globe", text: "Работаю по всей России дистанционно" },
  { icon: "MessageCircle", text: "Объясняю без лишней «воды» — только по делу" },
];

const faq = [
  {
    q: "Можно ли получить землю бесплатно?",
    a: "Да, в ряде случаев. Всё зависит от основания, региона и цели — сначала проверяю реальную возможность.",
  },
  {
    q: "Если уже был отказ — есть ли шанс?",
    a: "В большинстве случаев да. Часто причина — ошибки в подаче.",
  },
  {
    q: "Можно ли проверить участок перед покупкой?",
    a: "Да, это обязательный этап — помогу избежать проблем и потери денег.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium">
              <div className="w-8 h-px bg-primary" />
              О себе
            </div>
            <h2
              className="text-4xl font-bold text-foreground leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Калинина Анна Владимировна
              <span className="text-primary block">Земельный эксперт</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Здравствуйте! Меня зовут Анна. Я земельный эксперт с юридическим образованием,
              специалист по оформлению земельных участков.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Помогаю разобраться с землёй и оформить участок законно и без лишних рисков —
              от первого вопроса до результата. Моя задача — не просто продать услугу,
              а помочь вам принять грамотное и безопасное решение.
            </p>

            <div className="grid grid-cols-1 gap-4 pt-4">
              {achievements.map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={item.icon} size={18} className="text-primary" />
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://cdn.poehali.dev/projects/ebc3b386-b5d4-4a32-8e3c-5ed0d532cccd/files/cc5fbfb6-cdb1-40d0-a21f-34c1d383b449.jpg"
                alt="Земельный участок"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>

            <div className="absolute -top-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Globe" size={22} className="text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground">Вся Россия</div>
                  <div className="text-xs text-muted-foreground">дистанционно</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <Icon name="CheckCircle" size={22} className="text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground">Без рисков</div>
                  <div className="text-xs text-muted-foreground">законное оформление</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3
            className="text-2xl font-bold text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Частые вопросы
          </h3>
          <div className="grid md:grid-cols-3 gap-5">
            {faq.map((item) => (
              <div key={item.q} className="bg-background border border-border rounded-2xl p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="HelpCircle" size={14} className="text-primary" />
                  </div>
                  <p className="font-semibold text-foreground text-sm">{item.q}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pl-10">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
