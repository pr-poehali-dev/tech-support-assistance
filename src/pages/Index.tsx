import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const services = [
    {
      icon: "Monitor",
      title: "Ремонт компьютеров",
      description: "Диагностика и ремонт настольных ПК любой сложности",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: "Laptop",
      title: "Ремонт ноутбуков",
      description: "Замена комплектующих и восстановление ноутбуков",
      gradient: "from-red-500 to-pink-600"
    },
    {
      icon: "Wrench",
      title: "Апгрейд системы",
      description: "Модернизация и улучшение производительности",
      gradient: "from-purple-500 to-blue-600"
    },
    {
      icon: "HardDrive",
      title: "Восстановление данных",
      description: "Спасение информации с поврежденных носителей",
      gradient: "from-pink-500 to-red-600"
    },
    {
      icon: "Wifi",
      title: "Настройка сети",
      description: "Настройка роутеров, Wi-Fi и локальных сетей",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: "Shield",
      title: "Защита от вирусов",
      description: "Удаление вирусов и установка антивирусов",
      gradient: "from-red-500 to-orange-600"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="relative overflow-hidden bg-gradient-to-r from-primary via-purple-600 to-secondary py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        
        <div className="relative max-w-7xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Icon name="Zap" size={20} className="text-white" />
            <span className="text-white text-sm font-semibold">Быстро • Качественно • Надёжно</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            КОМПЬЮТЕРНАЯ
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-red-300 bg-clip-text text-transparent">
              ПОМОЩЬ
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-semibold">
            Профессиональный ремонт и обслуживание компьютерной техники
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-8 py-6 rounded-xl shadow-2xl hover:scale-105 transition-transform"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать звонок
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8 py-6 rounded-xl backdrop-blur-sm hover:scale-105 transition-transform"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в чат
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Наши услуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Решаем любые проблемы с компьютерной техникой
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="p-8 relative">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={service.icon as any} size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary via-purple-600 to-secondary rounded-3xl p-8 md:p-12 shadow-2xl animate-fade-in">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Оставьте заявку
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Мы свяжемся с вами в течение 10 минут и бесплатно проконсультируем
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Быстрый выезд</h4>
                    <p className="text-white/80">Приедем в течение часа</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl flex-shrink-0">
                    <Icon name="BadgeCheck" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Гарантия качества</h4>
                    <p className="text-white/80">3 месяца на все работы</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl flex-shrink-0">
                    <Icon name="Wallet" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Честные цены</h4>
                    <p className="text-white/80">Без скрытых платежей</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-foreground">
                    Ваше имя
                  </label>
                  <Input
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 text-base border-2 focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold mb-2 text-foreground">
                    Телефон
                  </label>
                  <Input
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 text-base border-2 focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold mb-2 text-foreground">
                    Опишите проблему
                  </label>
                  <Textarea
                    placeholder="Расскажите, что случилось с вашей техникой..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[120px] text-base border-2 focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 text-white font-bold text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>

      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-black mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                КОМПЬЮТЕРНАЯ ПОМОЩЬ
              </h3>
              <p className="text-gray-400">
                Профессиональный ремонт компьютеров и ноутбуков с гарантией качества
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (921) 733-22-53</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@компьютерная-помощь.рф</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Череповец</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Режим работы</h4>
              <div className="space-y-2 text-gray-400">
                <p>Пн-Пт: 9:00 - 21:00</p>
                <p>Сб-Вс: 10:00 - 20:00</p>
                <p className="text-primary font-semibold mt-4">Выезд 24/7</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Компьютерная помощь. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}