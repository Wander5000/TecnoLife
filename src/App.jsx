import './App.css'
import { Product } from './components/ProductCard'
import { Header } from './components/Header'
import {Carrousel} from './components/Carrousel'

export function App() {

  const Products = [  {
    id: 1,
    name: "Sleek White & Orange Wireless Gaming Controller",
    price: 69,
    image: "https://i.imgur.com/ZANVnHE.jpeg",
  },
  {
    id: 2,
    name: "Sleek Wireless Headphone & Inked Earbud Set",
    price: 44,
    image: "https://i.imgur.com/yVeIeDa.jpeg",
  },
  {
    id: 3,
    name: "Sleek Comfort-Fit Over-Ear Headphones",
    price: 28,
    image: "https://i.imgur.com/SolkFEB.jpeg",
  }]

  return (
    <>
      <Header/>
      <Carrousel/>
      <hr/>
      <h1>Algunos de nuestros Productos!</h1>
      <section className='products-section'>
      {Products.map(productinfo => {
            const {image, price, name} =  productinfo
            return(
              <Product
                image={image}
                price={price}
                name={name} />
            )
          })
          }
      </section>
    </>
  )
}