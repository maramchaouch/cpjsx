// src/Image.js
import React from "react";

const Image = ({ image }) => {
  return <img src={image} alt="Product" style={{ width: "100%", height: "150px", objectFit: "contain", margin: "auto", display: "block", padding: "10px", border: "2px solid black", borderRadius: "10px" }} />;
};

export default Image;
