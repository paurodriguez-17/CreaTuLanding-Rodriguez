import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../asyncMock'
import ItemList from './ItemList'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaPaw } from 'react-icons/fa'

const ItemListContainer = ({ mensaje }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div className="container-fluid mt-5 py-5">
            <div className="text-center mb-5">
                <h2 className="fw-bold">
                    {mensaje} <FaPaw color="#ec407a" />
                </h2>
                <p className="fs-5 mt-3">
                    {categoryId ? `Explorando: ${categoryId}` : 'Cuidamos a tus mascotas con amor, estilo y los mejores productos. ✨🐶🐾'}
                </p>
            </div>

            {loading ? <p className="text-center">Cargando productos...</p> : <ItemList products={products} />}
        </div>
    )
}

export default ItemListContainer