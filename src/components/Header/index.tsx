import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logoCoffe from '../../assets/logo-coffe.svg'
import { useCart } from '../../hooks/useCart'
import { HeaderContainer, PositionFixed } from './styles'

export function Header() {
  const { cartQuantity } = useCart()

  return (
    <HeaderContainer>
      <PositionFixed>
        <NavLink to="/">
          <img src={logoCoffe} alt="" />
        </NavLink>
        <div>
          <span>
            <MapPin size={20} weight="fill" />
            São Paulo, SP
          </span>
          <NavLink to="/checkout">
            <div>
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </div>
          </NavLink>
        </div>
      </PositionFixed>
    </HeaderContainer>
  )
}
