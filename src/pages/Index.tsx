import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">Maison Culinaire</h1>
          <p className="text-xl text-slate-600">Элегантные кухонные приборы для современного дома</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
const products = [
  {
    id: 1,
    name: "Кофемашина Deluxe",
    price: "49 990",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop",
    description: "Автоматическая кофемашина для идеального эспрессо",
  },
  {
    id: 2,
    name: "Блендер ProMix",
    price: "15 900",
    image:
      "https://images.unsplash.com/photo-1585515656973-79d26327c59a?w=400&h=300&fit=crop",
    description: "Мощный блендер для смузи и коктейлей",
  },
  {
    id: 3,
    name: "Мультиварка Smart",
    price: "23 500",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    description: "Умная мультиварка с 12 программами",
  },
  {
    id: 4,
    name: "Миксер Kitchen Pro",
    price: "8 990",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    description: "Планетарный миксер для выпечки",
  },
  {
    id: 5,
    name: "Соковыжималка Fresh",
    price: "12 900",
    image:
      "https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=400&h=300&fit=crop",
    description: "Медленная соковыжималка для максимальной пользы",
  },
  {
    id: 6,
    name: "Тостер Premium",
    price: "6 490",
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
    description: "Стильный тостер с 6 режимами прожарки",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-light">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-light text-black tracking-wide">
              Kitchen Store
            </h1>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-black hover:text-gray-600 transition-colors font-light"
              >
                Каталог
              </a>
              <a
                href="#"
                className="text-black hover:text-gray-600 transition-colors font-light"
              >
                О нас
              </a>
              <a
                href="#"
                className="text-black hover:text-gray-600 transition-colors font-light"
              >
                Контакты
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-light text-black mb-6 tracking-tight">
            Премиальные кухонные приборы
          </h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Откройте новые возможности на вашей кухне с нашей коллекцией
            современных приборов
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="border-gray-100 hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-light text-black mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 font-light text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-light text-black">
                      {product.price} ₽
                    </span>
                    <Button
                      variant="outline"
                      className="border-black text-black hover:bg-black hover:text-white transition-colors font-light"
                    >
                      Предзаказ
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-light text-black mb-4">
                Kitchen Store
              </h4>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                Премиальные кухонные приборы для современного дома
              </p>
            </div>
            <div>
              <h4 className="text-lg font-light text-black mb-4">Контакты</h4>
              <p className="text-gray-600 font-light text-sm">
                +7 (495) 123-45-67
              </p>
              <p className="text-gray-600 font-light text-sm">
                info@kitchenstore.ru
              </p>
            </div>
            <div>
              <h4 className="text-lg font-light text-black mb-4">Доставка</h4>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                Бесплатная доставка по Москве от 5000 ₽
              </p>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-500 font-light text-sm">
              © 2024 Kitchen Store. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
