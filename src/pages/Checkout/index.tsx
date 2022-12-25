import { useCart } from '../../hooks/useCart'
import { AdressInfo } from './components/AdressInfo'
import { CoffeCartItem } from './components/CoffeContainer'
import { PaymentInfo } from './components/PaymentInfo'
import { PriceAndDelivery } from './components/PriceAndDelivery'
import {
  AndressAndPayment,
  CheckoutContainer,
  CheckoutSummary,
  CoffeCardContainer,
} from './styles'

export function Checkout() {
  const { cartItems } = useCart()

  return (
    <CheckoutContainer>
      <AndressAndPayment>
        <strong>Complete seu pedido</strong>
        <AdressInfo />
        <PaymentInfo />
      </AndressAndPayment>
      <div>
        <strong>Cafés selecionados</strong>
        <CheckoutSummary>
          <CoffeCardContainer>
            {cartItems.map((item) => (
              <CoffeCartItem key={item.id} coffe={item} />
            ))}
          </CoffeCardContainer>
          <PriceAndDelivery />
        </CheckoutSummary>
      </div>
    </CheckoutContainer>
  )
}
