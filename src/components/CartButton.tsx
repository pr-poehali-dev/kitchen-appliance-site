import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface CartButtonProps {
  itemCount: number;
  onClick: () => void;
}

const CartButton = ({ itemCount, onClick }: CartButtonProps) => {
  return (
    <Button
      variant="outline"
      onClick={onClick}
      className="relative border-black text-black hover:bg-black hover:text-white transition-colors font-light"
    >
      <Icon name="ShoppingCart" size={20} />
      {itemCount > 0 && (
        <Badge className="absolute -top-2 -right-2 bg-black text-white text-xs px-1.5">
          {itemCount}
        </Badge>
      )}
    </Button>
  );
};

export default CartButton;
