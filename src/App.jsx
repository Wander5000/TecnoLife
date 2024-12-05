import './App.css'
import React, { useState, useEffect } from "react";
import * as Scroll from 'react-scroll'
import { Product } from './components/ProductCard'
import { Header } from './components/Header'
import { Carrousel } from './components/Carrousel'
import { Nosotros } from './components/Nosotros'
import { CRUD } from './components/CRUD';
import { Footer } from './components/Footer'

const {Element} = Scroll;

export function App() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:524/products")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al consumir la API");
                }
                return response.json();
            })
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error:", error));
    }, [products])

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

  const CarrouselImages = [
    '../public/img/CarrouselImg1.png',
    '../public/img/CarrouselImg2.png',
    '../public/img/CarrouselImg3.png',
    '../public/img/AMOGUS.png'
  ];

  return (
    <>
      <Header/>
      <Element name="Inicio">
        <Carrousel images={CarrouselImages}/>
      </Element>
      <hr/>
      <Element name="Productos">
      <h1 className='sections-title'>Algunos de nuestros Productos!</h1>
      <section className='products-section'>
        {products.map(({ _id, name, price, image }) => (
                    <Product
                        key={_id}
                        image={image}
                        name={name}
                        price={price}
                    />
                ))
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
        <CRUD />
      </Element>
      <Footer/>
    </>
  )
}