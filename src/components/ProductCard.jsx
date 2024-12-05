import {React, useState} from "react";

export function Product({name, price, image}){

  const [Qproduct, setQproduct] = useState(0);

  const AddOne = () => {
    setQproduct(Qproduct + 1);
  }

  const RemoveOne = () => {
    if (Qproduct < 1) {
      alert("A la madre, no sabia que existian los productos negativos xd, en lo que buscamos que es, puedes añadir uno (no seas baboso >:V)")
    }else{
      setQproduct(Qproduct - 1);
    }
  }

  return(
    <article className="product-card-body">
      <header className="product-header">
        <h1 className="product-name">{name}</h1>
        <section className="product-image-center">
          <section className="product-image-border">
            <img src={image} className="product-image" />
          </section>
        </section>
      </header>
      <section className="product-info">
        <h2 className="product-price">Precio por unidad: {price}$</h2>
      </section>
      <section className="product-unity">
        <button className="one-unity" onClick={RemoveOne}>-</button>
        <section className="unities-on-cart">
          <span>{Qproduct} Unidad(es)</span>
        </section>
        <button className="one-unity" onClick={AddOne}>+</button>
      </section>
    </article>
  )
}