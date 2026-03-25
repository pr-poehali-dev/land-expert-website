import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center">
              <Icon name="MapPin" size={16} className="text-background" />
            </div>
            <div>
              <div className="font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Земельный эксперт
              </div>
              <div className="text-xs opacity-60">Калинина Анна Владимировна · Земельный эксперт</div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm opacity-70">
            {["О себе", "Услуги", "Документы", "Контакты"].map((item, i) => (
              <button
                key={item}
                onClick={() =>
                  document
                    .getElementById(["about", "services", "documents", "contacts"][i])
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="hover:opacity-100 transition-opacity"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="text-xs opacity-50">
            © 2024 Земельный эксперт. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;