import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaPaw } from 'react-icons/fa'

const ItemListContainer = ({ mensaje }) => {
    return (
        <div className="container-fluid text-center mt-5 py-5">
            <h2 className="fw-bold">
                {mensaje} <FaPaw color="#ec407a" />
            </h2>
            <p className="fs-5 mt-3">
                Cuidamos a tus mascotas con amor, estilo y los mejores productos. ✨🐶🐾
            </p>
        </div>
    )
}

export default ItemListContainer
