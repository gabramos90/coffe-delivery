import { useCart } from '../../hooks/useCart'
import { AdressInfo } from './components/AdressInfo'
import { CoffeCartItem } from './components/CoffeContainer'
import { PaymentInfo } from './components/PaymentInfo'
import { PriceAndDelivery } from './components/PriceAndDelivery'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useForm, FormProvider } from 'react-hook-form'
import {
  AndressAndPayment,
  CheckoutContainer,
  CheckoutSummary,
  CoffeCardContainer,
} from './styles'
import { useNavigate } from 'react-router-dom'

const confirmOrderFormValidationSchema = z.object({
  cep: z.string().min(1, 'Informe o CEP'),
  street: z.string().min(1, 'Informe o Rua'),
  number: z.string().min(1, 'Informe o Número'),
  complement: z.string(),
  district: z.string().min(1, 'Informe o Bairro'),
  city: z.string().min(1, 'Informe a Cidade'),
  uf: z.string().min(1, 'Informe a UF'),
})

export type OrderData = z.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export function Checkout() {
  const navigate = useNavigate()
  const { cartItems } = useCart()

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })

  const { handleSubmit } = confirmOrderForm

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate('/finalization', {
      state: data,
    })

    console.log(data)
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutContainer>
        <form
          onSubmit={handleSubmit(handleConfirmOrder)}
          className="formProvider"
        >
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
        </form>
      </CheckoutContainer>
    </FormProvider>
  )
}
