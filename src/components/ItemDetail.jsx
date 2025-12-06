import React from 'react'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="row g-0">
                            <div className="col-md-6">
                                <img src={img} className="img-fluid rounded-start" alt={name} />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h2 className="card-title fw-bold">{name}</h2>
                                    <p className="card-text text-muted">Categoría: {category}</p>
                                    <h4 className="my-3">${price}</h4>
                                    <p className="card-text">{description}</p>
                                    <p className="card-text"><small className="text-muted">Stock disponible: {stock}</small></p>
                                    
                                    {/* Aquí irá el ItemCount más adelante */}
                                    <button className="btn btn-dark w-100 mt-3">Agregar al Carrito</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail