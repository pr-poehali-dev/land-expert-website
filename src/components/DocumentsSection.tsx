import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const legalInfo = [
  {
    icon: "BookOpen",
    title: "Земельный кодекс РФ",
    description: "Основной закон, регулирующий земельные отношения в России. Права и обязанности собственников.",
    tag: "Законодательство",
  },
  {
    icon: "FileCheck",
    title: "Федеральный закон № 218-ФЗ",
    description: "О государственной регистрации недвижимости. Порядок кадастрового учёта и регистрации прав.",
    tag: "Законодательство",
  },
  {
    icon: "AlertCircle",
    title: "Дачная амнистия 2024",
    description: "Упрощённый порядок оформления садовых домов и земельных участков. Действует до 2031 года.",
    tag: "Актуально",
  },
  {
    icon: "Landmark",
    title: "КоАП — Земельные нарушения",
    description: "Ответственность за самовольный захват земли, нецелевое использование, отсутствие межевания.",
    tag: "Важно знать",
  },
];

const documents = [
  {
    icon: "FileText",
    title: "Заявление об уточнении границ",
    description: "Образец заявления в Росреестр для уточнения границ земельного участка",
    format: "DOCX",
    size: "42 КБ",
  },
  {
    icon: "FileText",
    title: "Согласие на межевание (соседи)",
    description: "Акт согласования местоположения границ с правообладателями смежных участков",
    format: "DOCX",
    size: "38 КБ",
  },
  {
    icon: "FileText",
    title: "Договор на кадастровые работы",
    description: "Типовой договор подряда на выполнение кадастровых работ",
    format: "DOCX",
    size: "55 КБ",
  },
  {
    icon: "FileText",
    title: "Жалоба в земельный надзор",
    description: "Образец обращения в государственный земельный надзор о нарушении границ",
    format: "DOCX",
    size: "29 КБ",
  },
  {
    icon: "FileSpreadsheet",
    title: "Чек-лист оформления участка",
    description: "Пошаговый список документов для регистрации права собственности",
    format: "PDF",
    size: "18 КБ",
  },
  {
    icon: "FileSpreadsheet",
    title: "Перечень для межевания",
    description: "Список документов, необходимых для проведения межевания участка",
    format: "PDF",
    size: "15 КБ",
  },
];

const DocumentsSection = () => {
  const [activeTab, setActiveTab] = useState<"docs" | "legal">("docs");

  return (
    <section id="documents" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium">
            <div className="w-8 h-px bg-primary" />
            Документы и право
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2
            className="text-4xl font-bold text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Полезные материалы
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Бесплатные шаблоны документов и правовая информация для решения земельных вопросов
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-muted rounded-2xl p-1 gap-1">
            <button
              onClick={() => setActiveTab("docs")}
              className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === "docs"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="flex items-center gap-2">
                <Icon name="FileText" size={16} />
                Шаблоны документов
              </span>
            </button>
            <button
              onClick={() => setActiveTab("legal")}
              className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === "legal"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="flex items-center gap-2">
                <Icon name="Scale" size={16} />
                Правовая информация
              </span>
            </button>
          </div>
        </div>

        {activeTab === "docs" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {documents.map((doc) => (
              <div
                key={doc.title}
                className="bg-background border border-border rounded-2xl p-5 hover:border-primary/40 hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Icon name={doc.icon} size={20} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground text-sm mb-1 leading-tight">
                      {doc.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                      {doc.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
                          {doc.format}
                        </span>
                        <span className="text-xs text-muted-foreground">{doc.size}</span>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-primary hover:bg-primary/10 h-7 px-2 text-xs"
                      >
                        <Icon name="Download" size={14} />
                        Скачать
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "legal" && (
          <div className="grid md:grid-cols-2 gap-6">
            {legalInfo.map((item) => (
              <div
                key={item.title}
                className="bg-background border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} size={22} className="text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 bg-primary/5 border border-primary/20 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Icon name="Info" size={22} className="text-primary" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h4 className="font-semibold text-foreground mb-1">Нужна помощь с документами?</h4>
            <p className="text-sm text-muted-foreground">
              Подготовлю полный пакет документов под вашу конкретную ситуацию
            </p>
          </div>
          <Button
            onClick={() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-primary text-primary-foreground hover:bg-primary/90 flex-shrink-0"
          >
            Обратиться за помощью
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
