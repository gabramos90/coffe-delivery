import { Bank, CreditCard, CurrencyDollarSimple, Money } from 'phosphor-react'
import { PaymentInfoContainer } from './styles'

export function PaymentInfo() {
  return (
    <PaymentInfoContainer>
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
          <Bank size={18} />
          <label htmlFor="bank">CARTÃO DE DÉBITO</label>
        </button>
        <button>
          <input type="radio" id="cash" name="payment-infor" value="cash" />
          <Money size={18} />
          <label htmlFor="cash">DINHEIRO</label>
        </button>
      </form>
    </PaymentInfoContainer>
  )
}
