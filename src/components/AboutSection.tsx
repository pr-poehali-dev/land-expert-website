import Icon from "@/components/ui/icon";

const achievements = [
  { icon: "GraduationCap", text: "Высшее образование по специальности «Землеустройство и кадастры»" },
  { icon: "Award", text: "Аттестат кадастрового инженера № 12345 (Росреестр)" },
  { icon: "BookOpen", text: "Регулярное повышение квалификации и участие в профессиональных конференциях" },
  { icon: "Users", text: "Член Ассоциации кадастровых инженеров России" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
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
              Ваш надёжный проводник
              <span className="text-primary block">в мире земельного права</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Меня зовут Елена Смирнова. Более 10 лет я помогаю людям разобраться
              в сложностях земельного законодательства, оформить права на землю
              и защитить свои интересы.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Я убеждена: каждый человек заслуживает ясности в вопросах своей земли.
              Поэтому объясняю всё простым языком, без юридического жаргона, и веду
              клиента от первой консультации до получения документов.
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
                  <Icon name="MapPin" size={22} className="text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground">10+ лет</div>
                  <div className="text-xs text-muted-foreground">практического опыта</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <Icon name="CheckCircle" size={22} className="text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground">500+</div>
                  <div className="text-xs text-muted-foreground">решённых дел</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;