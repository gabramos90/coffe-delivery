import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/PriceFormatter'
import { PriceAndDeliveryContainer } from './styles'

const DELIVERY_PRICE = 3.9

export function PriceAndDelivery() {
  const { cartItemsTotal, cartQuantity } = useCart()

  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedDeliveryTotal = formatMoney(DELIVERY_PRICE)
  const formattedCartTotal = formatMoney(cartTotal)
  return (
    <PriceAndDeliveryContainer>
      <div className="priceSummary">
        <div>
          <span>Total de itens</span>
          <span>{formattedItemsTotal}</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>{formattedDeliveryTotal}</span>
        </div>
        <div>
          <strong>Total</strong>
          <strong>{formattedCartTotal}</strong>
        </div>
      </div>
      <button
        type="submit"
        disabled={cartQuantity <= 0}
        className="orderButton"
      >
        CONFIRMAR PEDIDO
      </button>
    </PriceAndDeliveryContainer>
  )
}
