import { Bank, CreditCard, CurrencyDollarSimple, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { PaymentInfoContainer } from './styles'

export function PaymentInfo() {
  const { register } = useFormContext()

  return (
    <PaymentInfoContainer>
      <header>
        <CurrencyDollarSimple size={22} />
        <div>
          <p>Endereço de Entrega</p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </header>
      <div className="input-group">
        <div className="text-group-field">
          <div className="inner-block">
            <input
              id="pickup-1"
              className="radio-custom input-group-field"
              type="radio"
              value="cartão de crédito"
              {...register('paymentMethod')}
            />
            <label htmlFor="pickup-1" className="radio-custom-label">
              <CreditCard />
              CARTÃO DE CRÉDITO
            </label>
          </div>
        </div>
        <div className="text-group-field pickup-day choose-time">
          <div className="inner-block">
            <input
              id="pickup-2"
              className="radio-custom input-group-field"
              type="radio"
              value="cartão de débito"
              {...register('paymentMethod')}
            />
            <label htmlFor="pickup-2" className="radio-custom-label">
              <Bank />
              CARTÃO DE DÉBITO
            </label>
          </div>
        </div>
        <div className="text-group-field pickup-day choose-time">
          <div className="inner-block">
            <input
              id="pickup-3"
              className="radio-custom input-group-field"
              type="radio"
              {...register('paymentMethod')}
              value="dinheiro"
            />
            <label htmlFor="pickup-3" className="radio-custom-label">
              <Money />
              DINHEIRO
            </label>
          </div>
        </div>
      </div>
    </PaymentInfoContainer>
  )
}
