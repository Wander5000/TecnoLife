import React, { useState, useEffect } from "react";

export function CRUD() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetchProducts();
    }, []);

    const fetchProducts = () => {
      fetch("http://localhost:524/products")
          .then((response) => {
              if (!response.ok) {
                  throw new Error("Error al consumir la API");
              }
              return response.json();
          })
          .then((data) => setProducts(data))
          .catch((error) => console.error("Error:", error));
  };

    const addProduct = () => {

      const newProduct = {
        name: prompt("Nombre del Producto:"),
        price: parseFloat(prompt("Precio del Producto:")),
        units: parseInt(prompt("Unidades del Producto:")),
        image: prompt("Imagen del Producto:")
      };

        alert('Se Agrego Un Nuevo Producto')
        fetch("http://localhost:524/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct),
        })
          .then((response) => {
              if (!response.ok) {
                  throw new Error("Error al agregar producto");
              }
              fetchProducts();
          })
          .catch((error) => console.error("Error:", error));
        };

  const updateProduct = (id, currentProduct) => {
    const updatedProduct = {
        name: prompt("Nombre del Producto:", currentProduct.name) || currentProduct.name,
        price: parseFloat(prompt("Precio:", currentProduct.price)) || currentProduct.price,
        units: parseInt(prompt("Unidades:", currentProduct.units)) || currentProduct.units,
        image: prompt("Imagen:", currentProduct.image) || currentProduct.image
    };

    alert('Se Actualizo Un Producto')

    fetch(`http://localhost:524/products/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error al actualizar producto");
            }
            fetchProducts();
        })
        .then(() => fetchProducts())
        .catch((error) => console.error("Error:", error));
  };

  const deleteProduct = (id) => {
    alert('Se Elimino el Producto')
    fetch(`http://localhost:524/products/${id}`, {
        method: "DELETE",
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error al eliminar producto");
            }
            fetchProducts();
        })
        .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      <button className="new-product" onClick={addProduct}>Agregar un producto</button>
      <table className="crud-table">
        <thead>
          <tr>
            <th className="crud-table-head name">Nombre</th>
            <th className="crud-table-head price">Precio</th>
            <th className="crud-table-head units">Unidades</th>
            <th className="crud-table-head image">Imagen</th>
            <th className="crud-table-head actions">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="crud-table-data">{product.name}</td>
              <td className="crud-table-data center">${product.price}</td>
              <td className="crud-table-data center">{product.units}</td>
              <td className="crud-table-data">{product.image}</td>
              <td className="crud-table-data-actions"><button className="edit-product" onClick={() => updateProduct(product._id,product)}><i class='bx bx-pencil'></i></button><button className="delete-product" onClick={()=> deleteProduct(product._id)}><i class='bx bx-trash'></i></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};