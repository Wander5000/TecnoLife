import './App.css'
import { Product } from './components/ProductCard'

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