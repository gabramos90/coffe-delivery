import { Minus, Plus, Trash } from 'phosphor-react'
import { CartItem } from '../../../../context/CartContext'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/PriceFormatter'
import { CoffeCartContainer } from './styles'

interface CoffeCardItem {
  coffe: CartItem
}

export function CoffeCartItem({ coffe }: CoffeCardItem) {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  const coffeTotal = coffe.price * coffe.quantity

  const formattedPrice = formatMoney(coffeTotal)

  function handleCartIncrement() {
    changeCartItemQuantity(coffe.id, 'increment')
  }

  function handleCartDecrement() {
    if (coffe.quantity <= 1) {
      return console.log('limite')
    } else changeCartItemQuantity(coffe.id, 'decrement')
  }

  function handleRemoveCartItems() {
    removeCartItem(coffe.id)
  }

  return (
    <CoffeCartContainer>
      <img src={`/coffes/${coffe.photo}`} alt="" />
      <div>
        <p>{coffe.name}</p>
        <div className="handleButtons">
          <div>
            <button onClick={handleCartDecrement}>
              <Minus size={16} />
            </button>
            <span>{coffe.quantity}</span>
            <button onClick={handleCartIncrement}>
              <Plus size={16} />
            </button>
          </div>
          <div>
            <button onClick={handleRemoveCartItems} className="trashButton">
              <Trash size={16} />
              REMOVER
            </button>
          </div>
        </div>
      </div>
      <span className="productPrice">{formattedPrice}</span>
    </CoffeCartContainer>
  )
}
