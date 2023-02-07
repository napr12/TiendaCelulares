import { useEffect } from 'react';
import { useState } from 'react';
import Productos from './../../logic/Productos/index';
const ItemListContainer = () => {
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    Productos.Consultar().then(data => setProducts(data))
  },g[])
  console.log(products)
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="card" style={{width: "18rem"}}>
          <img src="" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Producto</h5>
              <p className="card-text">
                Detalles del producto.  
              </p>
              <a href="#" clasName="btn btn-primary">
                Agregar producto
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemListContainer;
