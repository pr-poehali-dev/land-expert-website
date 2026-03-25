import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <Icon name="MapPin" size={16} className="text-primary-foreground" />
          </div>
          <span className="font-semibold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
            Земельный эксперт
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "О себе", id: "about" },
            { label: "Услуги", id: "services" },
            { label: "Документы", id: "documents" },
            { label: "Контакты", id: "contacts" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        <Button
          onClick={() => scrollTo("contacts")}
          className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Получить консультацию
        </Button>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon name={isOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4">
          {[
            { label: "О себе", id: "about" },
            { label: "Услуги", id: "services" },
            { label: "Документы", id: "documents" },
            { label: "Контакты", id: "contacts" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left text-foreground hover:text-primary transition-colors py-1"
            >
              {item.label}
            </button>
          ))}
          <Button
            onClick={() => scrollTo("contacts")}
            className="bg-primary text-primary-foreground w-full"
          >
            Получить консультацию
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
