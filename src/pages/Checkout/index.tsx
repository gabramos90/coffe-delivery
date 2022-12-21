import {
  CreditCard,
  CurrencyDollarSimple,
  MapPinLine,
  Minus,
  Plus,
  Trash,
} from 'phosphor-react'
import {
  AdressInfo,
  AndressAndPayment,
  CheckoutContainer,
  CheckoutSummary,
  CoffeContainer,
  PaymentInfo,
  PriceAndDelivery,
} from './styles'

import logoCoffe from '../../../public/coffes/americano.png'

export function Checkout() {
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
          <CoffeContainer>
            <img src={logoCoffe} alt="" />
            <div>
              <p>Expresso Tradicional</p>
              <div className="handleButtons">
                <div>
                  <button>
                    <Minus size={16} />
                  </button>
                  <span>1</span>
                  <button>
                    <Plus size={16} />
                  </button>
                </div>
                <div>
                  <button className="trashButton">
                    <Trash size={16} />
                    REMOVER
                  </button>
                </div>
              </div>
            </div>
            <span className='productPrice'>R$ 9,90</span>
          </CoffeContainer>
          <PriceAndDelivery>
            <div className='priceSummary'>
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
            <button>CONFIRMAR PEDIDO</button>
          </PriceAndDelivery>
        </CheckoutSummary>
      </div>
    </CheckoutContainer>
  )
}
