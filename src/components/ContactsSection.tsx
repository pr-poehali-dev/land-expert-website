import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ContactsSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contacts" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium">
            <div className="w-8 h-px bg-primary" />
            Контакты
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2
            className="text-4xl font-bold text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Давайте обсудим вашу ситуацию
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Оставьте заявку — перезвоню в течение часа в рабочее время
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-5">
              {[
                {
                  icon: "Phone",
                  label: "Телефон",
                  value: "+7 (922) 661-66-11",
                  sub: "Работаю по всей России",
                },
                {
                  icon: "Mail",
                  label: "Email",
                  value: "Kalininaanna86@yandex.ru",
                  sub: "Ответ в течение 24 часов",
                },
                {
                  icon: "Globe",
                  label: "Формат работы",
                  value: "Онлайн или письменный формат",
                  sub: "Большинство вопросов решается дистанционно",
                },
              ].map((contact) => (
                <div key={contact.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Icon name={contact.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">{contact.label}</div>
                    <div className="font-semibold text-foreground">{contact.value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{contact.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-sm text-muted-foreground mb-4">Также доступна в мессенджерах:</p>
              <div className="flex gap-3">
                {[
                  { icon: "MessageCircle", label: "WhatsApp" },
                  { icon: "Send", label: "Telegram" },
                ].map((messenger) => (
                  <button
                    key={messenger.label}
                    className="flex items-center gap-2 bg-secondary hover:bg-accent text-secondary-foreground rounded-xl px-4 py-2.5 text-sm font-medium transition-colors"
                  >
                    <Icon name={messenger.icon} size={16} />
                    {messenger.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Icon name="Clock" size={18} className="text-primary" />
                <span className="font-semibold text-foreground">Время работы</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-foreground">
                  <span className="text-muted-foreground">Понедельник – Пятница</span>
                  <span>9:00 – 18:00</span>
                </div>
                <div className="flex justify-between text-foreground">
                  <span className="text-muted-foreground">Суббота</span>
                  <span>10:00 – 15:00</span>
                </div>
                <div className="flex justify-between text-foreground">
                  <span className="text-muted-foreground">Воскресенье</span>
                  <span className="text-muted-foreground">выходной</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-3xl p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full min-h-64 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                  <Icon name="CheckCircle" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Заявка отправлена!
                </h3>
                <p className="text-muted-foreground">Перезвоню вам в течение часа в рабочее время</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Оставить заявку
                </h3>
                <div className="space-y-1">
                  <label className="text-sm text-muted-foreground">Ваше имя *</label>
                  <Input
                    required
                    placeholder="Как вас зовут?"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="rounded-xl border-border bg-background"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm text-muted-foreground">Телефон *</label>
                  <Input
                    required
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="rounded-xl border-border bg-background"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm text-muted-foreground">Опишите вашу ситуацию</label>
                  <textarea
                    rows={4}
                    placeholder="Что вас беспокоит? Расскажите кратко..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base rounded-xl"
                >
                  Отправить заявку
                  <Icon name="ArrowRight" size={18} />
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;