import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price, stock }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
                <img src={img} className="card-img-top" alt={name} />
                <div className="card-body text-center">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text text-muted">Precio: ${price}</p>
                    <p className="card-text">Stock disponible: {stock}</p>
                    <Link to={`/item/${id}`} className="btn btn-primary">Ver Detalle</Link>
                </div>
            </div>
        </div>
    )
}

export default Item