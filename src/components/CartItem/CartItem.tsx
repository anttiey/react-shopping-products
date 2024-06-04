import QuantityStepper from '../QuantityStepper/QuantityStepper';
import { Cart } from '../../types/Cart.type';

import * as S from './CartItem.style';

interface CartItemProps {
  cartItem: Cart;
  onRemoveItem: (cartItemId: number) => void;
  onUpdateQuantity: (cartItemId: number, quantity: number) => void;
}

function CartItem({ cartItem, onRemoveItem, onUpdateQuantity }: CartItemProps) {
  const { id, quantity, product } = cartItem;

  return (
    <S.Layout>
      <S.Body>
        <S.ItemImage src={product.imageUrl} />
        <S.ItemContainer>
          <S.ItemInfoContainer>
            <S.ItemText>{product.name}</S.ItemText>
            <S.ItemPriceText>{product.price.toLocaleString()}원</S.ItemPriceText>
          </S.ItemInfoContainer>
          <QuantityStepper
            quantity={quantity}
            onMinusButtonClick={() => onUpdateQuantity(id, quantity - 1)}
            onPlusButtonClick={() => onUpdateQuantity(id, quantity + 1)}
          />
        </S.ItemContainer>
      </S.Body>
      <S.DeleteButton onClick={() => onRemoveItem(id)}>삭제</S.DeleteButton>
    </S.Layout>
  );
}

export default CartItem;