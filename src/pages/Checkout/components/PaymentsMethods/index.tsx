import { PropsWithChildren, ReactNode } from 'react'
import { PaymentMethodContainer } from './styles'

interface PaymentProps {
  label: string
  id: string
  icon: ReactNode
  value: string
}

export function PaymentsMethods({
  label,
  icon,
  value,
  id,
}: PropsWithChildren<PaymentProps>) {
  return (
    <PaymentMethodContainer>
      <div className="input-group">
        <div className="text-group-field">
          <div className="inner-block">
            <input
              id={id}
              className="radio-custom input-group-field"
              type="radio"
              value={value}
              name="paymentMethod"
            />
            <label htmlFor={id} className="radio-custom-label">
              {icon}
              {label}
            </label>
          </div>
        </div>
      </div>
    </PaymentMethodContainer>
  )
}
