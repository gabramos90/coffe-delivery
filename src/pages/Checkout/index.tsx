import { CreditCard, CurrencyDollarSimple, MapPinLine } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { CoffeCartItem } from './components/CoffeContainer'
import {
  AdressInfo,
  AndressAndPayment,
  CheckoutContainer,
  CheckoutSummary,
  PaymentInfo,
  PriceAndDelivery,
} from './styles'

export function Checkout() {
  const { cartItems } = useCart()

  return (
    <CheckoutContainer>
      <AndressAndPayment>
        <strong>Complete seu pedido</strong>
        <AdressInfo>
          <div>
            <header>
              <MapPinLine size={22} />
              <div>
                <p>Endereço de Entrega</p>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </header>
            <form action="">
              <input type="text" placeholder="CEP" className="cep" />
              <input type="text" placeholder="Rua" className="rua" />
              <input type="text" placeholder="Número" className="numero" />
              <input
                type="text"
                placeholder="Complemento"
                className="complemento"
              />
              <input type="text" placeholder="Bairro" className="bairro" />
              <input type="text" placeholder="Cidade" className="cidade" />
              <input type="text" placeholder="UF" className="uf" />
            </form>
          </div>
        </AdressInfo>
        <PaymentInfo>
          <header>
            <CurrencyDollarSimple size={22} />
            <div>
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>
          <form action="">
            <button>
              <input
                type="radio"
                id="credit-card"
                name="payment-infor"
                value="credit-card"
              />
              <CreditCard size={18} />
              <label htmlFor="credit-card">CARTÃO DE CRÉDITO</label>
            </button>
            <button>
              <input type="radio" id="bank" name="payment-infor" value="bank" />
              <CreditCard size={18} />
              <label htmlFor="bank">CARTÃO DE DÉBITO</label>
            </button>
            <button>
              <input type="radio" id="cash" name="payment-infor" value="cash" />
              <CreditCard size={18} />
              <label htmlFor="cash">DINHEIRO</label>
            </button>
          </form>
        </PaymentInfo>
      </AndressAndPayment>
      <div>
        <strong>Cafés selecionados</strong>
        <CheckoutSummary>
          {cartItems.map((item) => (
            <CoffeCartItem key={item.id} coffe={item} />
          ))}
          <PriceAndDelivery>
            <div className="priceSummary">
              <div>
                <span>Total de itens</span>
                <span>R$ 99,90</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ 99,90</span>
              </div>
              <div>
                <strong>Total</strong>
                <strong>R$ 99,90</strong>
              </div>
            </div>
            <NavLink to="/finalization">
              <button>CONFIRMAR PEDIDO</button>
            </NavLink>
          </PriceAndDelivery>
        </CheckoutSummary>
      </div>
    </CheckoutContainer>
  )
}
