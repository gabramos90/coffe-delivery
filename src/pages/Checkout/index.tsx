import {
  CurrencyDollarSimple,
  MapPin,
  Minus,
  Plus,
  Trash,
} from 'phosphor-react'
import {
  AdressInfo,
  AndressAndPayment,
  CheckoutContainer,
  CheckoutSummary,
  PaymentInfo,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <AndressAndPayment>
        <AdressInfo>
          <strong>Complete seu pedido</strong>
          <div>
            <div>
              <p>
                <MapPin size={24} />
                Endereço de Entrega
              </p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
            <form action="">
              <input type="text" placeholder="CEP" />
              <input type="text" placeholder="Rua" />
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </form>
          </div>
        </AdressInfo>
        <PaymentInfo>
          <div>
            <p>
              <CurrencyDollarSimple size={24} />
              Endereço de Entrega
            </p>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
          <form action="">
            <div>
              <input
                type="radio"
                id="credit-card"
                name="payment-infor"
                value="credit-card"
              />
              <label htmlFor="credit-card">CARTÃO DE CRÉDITO</label>
            </div>
            <div>
              <input type="radio" id="bank" name="payment-infor" value="bank" />
              <label htmlFor="bank">CARTÃO DE DÉBITO</label>
            </div>
            <div>
              <input type="radio" id="cash" name="cash" value="credit-card" />
              <label htmlFor="cash">DINHEIRO</label>
            </div>
          </form>
        </PaymentInfo>
      </AndressAndPayment>
      <CheckoutSummary>
        <strong>Cafés selecionados</strong>
        <div>
          <img src="" alt="" />
          <div>
            <p>Expresso Tradicional</p>
            <div>
              <div>
                <button>
                  <Plus />
                </button>
                <span>1</span>
                <button>
                  <Minus />
                </button>
              </div>
              <button>
                <Trash />
                REMOVER
              </button>
            </div>
          </div>
          <span>R$ 9,90</span>
        </div>
        <div>
          <div>
            <span>Toral de itens</span>
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
          <button>CONFIRMAR PEDIDO</button>
        </div>
      </CheckoutSummary>
    </CheckoutContainer>
  )
}
