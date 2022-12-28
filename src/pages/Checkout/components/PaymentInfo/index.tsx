import { Bank, CreditCard, CurrencyDollarSimple, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

import { PaymentsMethods } from '../PaymentsMethods'
import { PaymentInfoContainer } from './styles'

export const paymentMethods = {
  credit: {
    label: 'Cartão de credito',
    icon: <CreditCard size={22} />,
  },
  debit: {
    label: 'Cartão de débito',
    icon: <Bank size={22} />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={22} />,
  },
}

export function PaymentInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string

  return (
    <PaymentInfoContainer>
      <header>
        <CurrencyDollarSimple size={22} />
        <div>
          <p>Endereço de Entrega</p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </header>
      <main>
        {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
          <PaymentsMethods
            key={label}
            id={key}
            icon={icon}
            label={label}
            value={key}
            {...register('paymentMethod')}
          />
        ))}
      </main>

      {paymentMethodError && <span>fodase</span>}
    </PaymentInfoContainer>
  )
}
