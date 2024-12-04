import './App.css'
import * as Scroll from 'react-scroll'
import { Product } from './components/ProductCard'
import { Header } from './components/Header'
import { Carrousel } from './components/Carrousel'
import { Nosotros } from './components/Nosotros'
import { Footer } from './components/Footer'

const {Element} = Scroll;

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

  const Acerca = [{
    id: 1,
    title: "Mision",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis vero est distinctio hic vel fugit dicta numquam libero. Magni dolore earum minima iste, quae ipsa! Fugiat, dolore deleniti? Temporibus, quibusdam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis vero est distinctio hic vel fugit dicta numquam libero. Magni dolore earum minima iste, quae ipsa! Fugiat, dolore deleniti? Temporibus, quibusdam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis vero est distinctio hic vel fugit dicta numquam libero. Magni dolore earum minima iste, quae ipsa! Fugiat, dolore deleniti? Temporibus, quibusdam!"
  },{
    id: 2,
    title: "Vision",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis vero est distinctio hic vel fugit dicta numquam libero. Magni dolore earum minima iste, quae ipsa! Fugiat, dolore deleniti? Temporibus, quibusdam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis vero est distinctio hic vel fugit dicta numquam libero. Magni dolore earum minima iste, quae ipsa! Fugiat, dolore deleniti? Temporibus, quibusdam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis vero est distinctio hic vel fugit dicta numquam libero. Magni dolore earum minima iste, quae ipsa! Fugiat, dolore deleniti? Temporibus, quibusdam!"
  },{
    id: 3,
    title: "Valores",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis vero est distinctio hic vel fugit dicta numquam libero. Magni dolore earum minima iste, quae ipsa! Fugiat, dolore deleniti? Temporibus, quibusdam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis vero est distinctio hic vel fugit dicta numquam libero. Magni dolore earum minima iste, quae ipsa! Fugiat, dolore deleniti? Temporibus, quibusdam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis vero est distinctio hic vel fugit dicta numquam libero. Magni dolore earum minima iste, quae ipsa! Fugiat, dolore deleniti? Temporibus, quibusdam!"
  }]


  return (
    <>
      <Header/>
      <Element name="Inicio">
        <Carrousel/>
      </Element>
      <hr/>
      <Element name="Productos">
      <h1 className='sections-title'>Algunos de nuestros Productos!</h1>
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
      </Element>
      <hr/>
      <Element name="Nosotros">
      <h1 className='sections-title'>Un poco sobre nosotros!</h1>
      <section className="about-section">
          {Acerca.map(x => {
              const {title, desc} =  x
              return(
                <Nosotros
                  Titulo={title}
                  Descripcion={desc}/>
              )
            })
          }
      </section>
      </Element>

      <hr />
      <h1 className='sections-title'>CRUD</h1>
      <Element name="CRUD">

      </Element>
      <Footer/>
    </>
  )
}