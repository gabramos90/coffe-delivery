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
          Porto Alegre, RS
        </span>
        <a href="#">
          <ShoppingCart size={20} weight="fill" />
        </a>
      </div>
    </HeaderContainer>
  )
}
