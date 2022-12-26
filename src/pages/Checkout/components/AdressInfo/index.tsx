import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { AdressInfoContainer } from './styles'

export function AdressInfo() {
  const { register } = useFormContext()

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
        <form>
          <input
            type="text"
            placeholder="CEP"
            className="cep"
            {...register('cep')}
          />

          <input
            type="text"
            placeholder="Rua"
            className="rua"
            {...register('street')}
          />
          <input
            type="text"
            placeholder="Número"
            className="numero"
            {...register('number')}
          />
          <input
            type="text"
            placeholder="Complemento"
            className="complemento"
            {...register('complement')}
          />
          <input
            type="text"
            placeholder="Bairro"
            className="bairro"
            {...register('district')}
          />
          <input
            type="text"
            placeholder="Cidade"
            className="cidade"
            {...register('city')}
          />
          <input
            type="text"
            placeholder="UF"
            className="uf"
            {...register('uf')}
          />
        </form>
      </div>
    </AdressInfoContainer>
  )
}
