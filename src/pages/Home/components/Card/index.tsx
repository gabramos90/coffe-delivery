import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/PriceFormatter'
import {
  AddToCartAndQuantity,
  CardAddToCart,
  CardContainer,
  CardDescription,
  TagsPerCoffe,
} from './styles'

export interface Coffe {
  photo: string
  id: number
  name: string
  description: string
  price: number
  tags: string[]
}

export interface CoffeProps {
  coffe: Coffe
}

export function Card({ coffe }: CoffeProps) {
  const [quantity, setQuantity] = useState(1)
  const { addCoffeToCart } = useCart()

  function handleIncrement() {
    setQuantity((state) => state + 1)
  }

  function handleDecrement() {
    setQuantity((state) => state - 1)
  }

  function handleAddToCart() {
    const coffeToAd = {
      ...coffe,
      quantity,
    }
    addCoffeToCart(coffeToAd)
  }

  return (
    <CardContainer className="card">
      <CardDescription>
        <img src={`/coffes/${coffe.photo}`} alt="" />

        <TagsPerCoffe>
          {coffe.tags.map((tag) => (
            <span key={`${coffe.id}${tag}`}>{tag}</span>
          ))}
        </TagsPerCoffe>

        <h5>{coffe.name}</h5>
        <p>{coffe.description}</p>
      </CardDescription>
      <CardAddToCart>
        <div>
          <span>R$</span>
          <span className="productPrice">{formatMoney(coffe.price)}</span>
        </div>
        <AddToCartAndQuantity>
          <div className="quantitySelector">
            <button disabled={quantity <= 1} onClick={handleDecrement}>
              {' '}
              <Minus size={18} />
            </button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}>
              {' '}
              <Plus size={18} />
            </button>
          </div>{' '}
          <button className="addToCartButton" onClick={handleAddToCart}>
            <ShoppingCart size={20} weight="fill" />
          </button>
        </AddToCartAndQuantity>
      </CardAddToCart>
    </CardContainer>
  )
}
