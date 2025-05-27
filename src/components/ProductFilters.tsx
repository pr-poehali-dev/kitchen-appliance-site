import { Button } from "@/components/ui/button";

interface ProductFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: "all", name: "Все товары" },
  { id: "coffee", name: "Кофемашины" },
  { id: "blenders", name: "Блендеры" },
  { id: "cookers", name: "Мультиварки" },
  { id: "mixers", name: "Миксеры" },
  { id: "other", name: "Другое" },
];

const ProductFilters = ({
  selectedCategory,
  onCategoryChange,
}: ProductFiltersProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          onClick={() => onCategoryChange(category.id)}
          className={
            selectedCategory === category.id
              ? "bg-black text-white"
              : "border-gray-300 text-gray-700 hover:bg-gray-50"
          }
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default ProductFilters;
