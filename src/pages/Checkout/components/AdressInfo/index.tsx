import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { AdressInfoContainer } from './styles'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function AdressInfo() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

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
            {...register('cep')}
            className="cep"
          />
          <span> {errors.cep?.message}</span>

          <input
            type="text"
            placeholder="Rua"
            {...register('street')}
            className="rua"
          />
          <span> {errors.street?.message}</span>

          <input
            type="text"
            placeholder="Número"
            {...register('number')}
            className="numero"
          />
          <span> {errors.number?.message}</span>

          <input
            type="text"
            placeholder="Complemento"
            {...register('complement')}
            className="complemento"
          />
          <span> {errors.complement?.message}</span>

          <input
            type="text"
            placeholder="Bairro"
            {...register('district')}
            className="bairro"
          />
          <span> {errors.district?.message}</span>

          <input
            type="text"
            placeholder="Cidade"
            {...register('city')}
            className="cidade"
          />
          <span> {errors.city?.message}</span>

          <input
            type="text"
            placeholder="UF"
            {...register('uf')}
            className="uf"
          />
          <span> {errors.uf?.message}</span>
        </form>
      </div>
    </AdressInfoContainer>
  )
}
