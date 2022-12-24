import { MapPin } from 'phosphor-react'
import bikeImg from '../../assets/bike.svg'
import { OrderConfirmationContainer, UserInformations } from './styles'

export function OrderConfirmation() {
  return (
    <OrderConfirmationContainer>
      <div>
        <h1>Uhu! Pedido Confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>
      <UserInformations>
        <div className="userInfo">
          <div>
            <MapPin weight="fill" size={22} />
            <p>
              Entrega em Rua João Daniel Martinelli, 102 - Farrapos - Porto
              Alegre, RS
            </p>
          </div>
          <div>
            <MapPin weight="fill" size={22} />
            <p>Previsão de entrega</p>
            <p>20 min - 30 min</p>
          </div>
          <div>
            <MapPin weight="fill" size={22} />
            <p>Pagamento na entrega</p>
            <p>Cartão de Crédito</p>
          </div>
        </div>
        <img src={bikeImg} alt="" />
      </UserInformations>
    </OrderConfirmationContainer>
  )
}
