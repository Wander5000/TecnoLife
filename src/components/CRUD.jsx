import React, { useState, useEffect } from "react";

export function CRUD() {
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
    }, [products]);

  return (
    <>
      <table className="table2">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio por Unidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};