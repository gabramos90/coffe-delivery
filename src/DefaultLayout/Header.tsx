import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <span>
          <MapPin size={20} weight="bold" />
          Porto Alegre, RS
        </span>
        <a href="#">
          <ShoppingCart size={20} weight="bold" />
        </a>
      </div>
    </div>
  )
}
