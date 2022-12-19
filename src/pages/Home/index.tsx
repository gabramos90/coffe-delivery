import {
  HomeContainer,
  Headline,
  Subheadline,
  MainBannerContainer,
  ProductsContainer,
  CardProductContainer,
} from './styles'
import { BoundingBox, Clock, Coffee, ShoppingCart } from 'phosphor-react'
import headlineCoffe from '../../assets/headline-coffe.svg'
import { Card } from './components/Card'
import { useEffect, useState } from 'react'

export interface TagProps {
  firstTag: string
  secTag: string
  thirdTag: string
}

export interface CoffeProps {
  image: string
  id: number
  tags: TagProps[]
  name: string
  description: string
  price: number
}

/* interface CoffesProviders {
  children: ReactNode
} */

export function Home() {
  const [coffes, setCoffes] = useState<CoffeProps[]>([])

  async function getData() {
    const response = await fetch('http://localhost:3000/coffes')
    const data = await response.json()

    setCoffes(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <HomeContainer>
      <MainBannerContainer>
        <Headline>
          <h1>Econtre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <Subheadline>
            <span>
              <ShoppingCart size={30} weight="fill" className="cart" />
              Compra simples e segura
            </span>
            <span>
              <Clock size={30} weight="fill" className="clock" />
              Entrega rápida e rastreada
            </span>
            <span>
              <BoundingBox size={30} weight="fill" className="boudingbox" />
              Embalagem mantém o café intacto
            </span>
            <span>
              <Coffee size={30} weight="fill" className="coffe" />O café chega
              fresquinho até você.
            </span>
          </Subheadline>
        </Headline>
        <img src={headlineCoffe} alt="" />
      </MainBannerContainer>
      <ProductsContainer>
        <h4>Nossos cafés</h4>
        <CardProductContainer>
          {coffes.map((coffe) => (
            <Card
              key={coffe.id}
              id={coffe.id}
              name={coffe.name}
              tags={coffe.tags}
              description={coffe.description}
              image={coffe.image}
              price={coffe.price}
            />
          ))}
        </CardProductContainer>
      </ProductsContainer>
    </HomeContainer>
  )
}
