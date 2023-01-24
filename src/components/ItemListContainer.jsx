const ItemListContainer = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="card" style={{width: "18rem"}}>
          <img src="../accest/celular.jpg" className="card-img-top" alt="..."/>
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
