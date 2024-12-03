export function Product({name, price, image}){
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
        <h3 className="product-color">Colores:</h3>
      </section>
      <section className="product-unity">
        <button className="one-unity">-</button>
        <section className="unities-on-cart">
          <span>X Unidad(es)</span>
        </section>
        <button className="one-unity">+</button>
      </section>
    </article>
  )
}