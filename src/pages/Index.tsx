import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const REFERRAL_LINK = "https://irwinway3.com/c3ac5cee5?btag=";

const Index = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(REFERRAL_LINK, '_blank');
  };

  const popularSlots = [
    {
      id: 1,
      title: "Book of Ra Deluxe",
      provider: "Novomatic",
      rating: 4.8,
      jackpot: "€2,500,000",
      rtp: "95.10%"
    },
    {
      id: 2,
      title: "Starburst",
      provider: "NetEnt",
      rating: 4.9,
      jackpot: "€50,000",
      rtp: "96.09%"
    },
    {
      id: 3,
      title: "Gonzo's Quest",
      provider: "NetEnt",
      rating: 4.7,
      jackpot: "€125,000",
      rtp: "95.97%"
    },
    {
      id: 4,
      title: "Mega Moolah",
      provider: "Microgaming",
      rating: 4.6,
      jackpot: "€5,200,000",
      rtp: "88.12%"
    },
    {
      id: 5,
      title: "Dead or Alive 2",
      provider: "NetEnt",
      rating: 4.8,
      jackpot: "€100,000",
      rtp: "96.82%"
    },
    {
      id: 6,
      title: "Immortal Romance",
      provider: "Microgaming",
      rating: 4.5,
      jackpot: "€75,000",
      rtp: "96.86%"
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Алексей М.",
      rating: 5,
      text: "Отличное казино! Выплаты быстрые, поддержка работает круглосуточно. Играю уже полгода, очень доволен.",
      date: "15 января 2024",
      verified: true
    },
    {
      id: 2,
      name: "Мария К.",
      rating: 5,
      text: "Большой выбор слотов, щедрые бонусы. Выиграла в Mega Moolah 50,000€ - деньги перевели за 2 дня!",
      date: "8 января 2024",
      verified: true
    },
    {
      id: 3,
      name: "Дмитрий П.",
      rating: 4,
      text: "Казино надёжное, лицензированное. Иногда бывают технические сбои, но в целом всё отлично.",
      date: "3 января 2024",
      verified: true
    },
    {
      id: 4,
      name: "Елена С.",
      rating: 5,
      text: "Прекрасная мобильная версия, удобно играть с телефона. VIP программа очень выгодная.",
      date: "28 декабря 2023",
      verified: true
    }
  ];

  const promotions = [
    {
      title: "Приветственный бонус",
      description: "200% до 100,000₽ + 200 фриспинов",
      code: "WELCOME200",
      expires: "31 декабря 2024"
    },
    {
      title: "Еженедельный кэшбэк",
      description: "До 25% возврат от проигрышей",
      code: "CASHBACK25",
      expires: "Постоянно"
    },
    {
      title: "Турнир слотов",
      description: "Призовой фонд 1,000,000₽",
      code: "TOURNAMENT",
      expires: "15 февраля 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-red-900 to-black text-white font-open-sans">
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-md border-b border-yellow-500/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent font-montserrat">
                CASINO X
              </div>
              <Badge className="bg-yellow-500 text-black font-semibold">ROYAL</Badge>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" onClick={handleClick} className="hover:text-yellow-400 transition-colors">Слоты</a>
              <a href="#" onClick={handleClick} className="hover:text-yellow-400 transition-colors">Столы</a>
              <a href="#" onClick={handleClick} className="hover:text-yellow-400 transition-colors">Live</a>
              <a href="#" onClick={handleClick} className="hover:text-yellow-400 transition-colors">Турниры</a>
              <a href="#" onClick={handleClick} className="hover:text-yellow-400 transition-colors">Акции</a>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="outline" onClick={handleClick} className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black">
                Войти
              </Button>
              <Button onClick={handleClick} className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold hover:from-yellow-600 hover:to-yellow-700">
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/50 to-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              CASINO X
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Элитное казино с лицензией Кюрасао. Более 3000 игр, мгновенные выплаты, VIP-обслуживание.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <Button 
                size="lg" 
                onClick={handleClick}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-lg px-8 py-4 hover:from-yellow-600 hover:to-yellow-700 transform hover:scale-105 transition-all"
              >
                Получить бонус 200%
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleClick}
                className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black font-semibold text-lg px-8 py-4"
              >
                Демо игры
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-green-400" />
                <span>Лицензия Кюрасао</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Zap" size={16} className="text-yellow-400" />
                <span>Мгновенные выплаты</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} className="text-blue-400" />
                <span>500,000+ игроков</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Slots */}
      <section className="py-16 bg-black/40">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Популярные слоты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularSlots.map((slot) => (
              <Card key={slot.id} className="bg-gray-900/80 border-yellow-500/30 hover:border-yellow-500 transition-all duration-300 transform hover:scale-105 cursor-pointer" onClick={handleClick}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-lg">{slot.title}</CardTitle>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                      <span className="text-yellow-400 text-sm">{slot.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">{slot.provider}</p>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gradient-to-br from-red-800 to-red-900 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                    {slot.id <= 3 ? (
                      <img 
                        src={`/img/${slot.id === 1 ? '57877f77-90d3-4f42-882a-77d48fc06298.jpg' : slot.id === 2 ? '482aea89-09f6-44ea-a5bb-c5b4a036e24e.jpg' : 'dca75c15-c5e3-4426-b6fb-c4b33f0bb286.jpg'}`}
                        alt={slot.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <Icon name="Gamepad2" size={48} className="text-yellow-400" />
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Джекпот:</span>
                      <span className="text-yellow-400 font-semibold">{slot.jackpot}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">RTP:</span>
                      <span className="text-green-400">{slot.rtp}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold hover:from-yellow-600 hover:to-yellow-700" onClick={handleClick}>
                    Играть
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Отзывы игроков
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="bg-gray-900/80 border-yellow-500/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-white">{review.name}</h3>
                          {review.verified && (
                            <Icon name="BadgeCheck" size={16} className="text-green-400" />
                          )}
                        </div>
                        <p className="text-gray-400 text-sm">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i} 
                          name="Star" 
                          size={16} 
                          className={i < review.rating ? "text-yellow-400 fill-current" : "text-gray-600"} 
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className="py-16 bg-black/40">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Акции и бонусы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promotions.map((promo, index) => (
              <Card key={index} className="bg-gradient-to-br from-red-900/80 to-black/80 border-yellow-500/30 hover:border-yellow-500 transition-all duration-300 transform hover:scale-105 cursor-pointer" onClick={handleClick}>
                <CardHeader>
                  <CardTitle className="text-white text-xl">{promo.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{promo.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400">Код:</span>
                      <Badge className="bg-yellow-500 text-black font-semibold">{promo.code}</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400">До:</span>
                      <span className="text-yellow-400">{promo.expires}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold hover:from-yellow-600 hover:to-yellow-700" onClick={handleClick}>
                    Получить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="bg-gray-900/80 border-yellow-500/30">
              <CardHeader>
                <CardTitle className="text-2xl text-center bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Регистрация
                </CardTitle>
                <p className="text-center text-gray-400">Начните играть прямо сейчас!</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    placeholder="Пароль"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold hover:from-yellow-600 hover:to-yellow-700" 
                  onClick={handleClick}
                >
                  Зарегистрироваться
                </Button>
                <p className="text-xs text-gray-400 text-center">
                  Регистрируясь, вы соглашаетесь с{" "}
                  <a href="#" onClick={handleClick} className="text-yellow-400 hover:underline">
                    правилами и условиями
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-yellow-500/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-yellow-400 mb-4">CASINO X</h3>
              <p className="text-gray-400 text-sm">
                Лицензированное казино с лучшими играми и честными выплатами.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Игры</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" onClick={handleClick} className="hover:text-yellow-400 transition-colors">Слоты</a></li>
                <li><a href="#" onClick={handleClick} className="hover:text-yellow-400 transition-colors">Рулетка</a></li>
                <li><a href="#" onClick={handleClick} className="hover:text-yellow-400 transition-colors">Блэкджек</a></li>
                <li><a href="#" onClick={handleClick} className="hover:text-yellow-400 transition-colors">Live Casino</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" onClick={handleClick} className="hover:text-yellow-400 transition-colors">Чат 24/7</a></li>
                <li><a href="#" onClick={handleClick} className="hover:text-yellow-400 transition-colors">FAQ</a></li>
                <li><a href="#" onClick={handleClick} className="hover:text-yellow-400 transition-colors">Правила</a></li>
                <li><a href="#" onClick={handleClick} className="hover:text-yellow-400 transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Безопасность</h4>
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Shield" size={16} className="text-green-400" />
                <span className="text-sm text-gray-400">SSL защита</span>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Award" size={16} className="text-yellow-400" />
                <span className="text-sm text-gray-400">Лицензия Кюрасао</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={16} className="text-blue-400" />
                <span className="text-sm text-gray-400">Проверенные игры</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Casino X. Все права защищены. Играйте ответственно. 18+</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;