import React from 'react'
import products from './Product'

const Price = ({price}) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" , fontWeight: "bold", fontSize: "20px", padding: "10px",color: "black", border: "2px solid black", borderRadius: "10px", margin: "0px", width: "100%"}}>{price}</h2>
    </div>
  )
}

export default Price
