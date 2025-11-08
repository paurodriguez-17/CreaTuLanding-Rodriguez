import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const CartWidget = () => {
  return (
    <div className="position-relative">
      <FaShoppingCart size={24} color="#ff4081" />
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        style={{ fontSize: '0.7rem' }}
      >
        3
      </span>
    </div>
  )
}

export default CartWidget
