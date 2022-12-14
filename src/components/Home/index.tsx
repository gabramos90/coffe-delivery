import {
  HomeContainer,
  Headline,
  Subheadline,
  MainBannerContainer,
  ProductsContainer,
} from './styles'
import { BoundingBox, Clock, Coffee, ShoppingCart } from 'phosphor-react'
import headlineCoffe from '../../assets/headline-coffe.svg'
import { Card } from './components/Card'

export interface ICoffe {
  id: string
  tag: string
  name: string
  description: string
  price: number
}

const coffes = [
  {
    id: 'skaska',
    tag: 'Tradicional',
    name: 'Café Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 990,
  },
]

export function Home() {
  console.log(coffes)

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
        {coffes.map((coffe) => (
          <Card key={coffe.id} coffe={coffe} />
        ))}
      </ProductsContainer>
    </HomeContainer>
  )
}
