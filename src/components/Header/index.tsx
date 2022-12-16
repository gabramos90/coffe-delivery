import { MapPin, ShoppingCart } from 'phosphor-react'
import logoCoffe from '../../assets/logo-coffe.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={logoCoffe} alt="" />
      </div>
      <div>
        <span>
          <MapPin size={20} weight="fill" />
          São Paulo, SP
        </span>
        <a href="#">
          <span>1</span>
          <ShoppingCart size={20} weight="fill" />
        </a>
      </div>
    </HeaderContainer>
  )
}
