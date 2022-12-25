import { MapPinLine } from 'phosphor-react'
import { AdressInfoContainer } from './styles'

export function AdressInfo() {
  return (
    <AdressInfoContainer>
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
    </AdressInfoContainer>
  )
}
