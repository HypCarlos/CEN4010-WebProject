import React from "react";

const renderCart = (cart) => (
    <>
    <h1> Cart </h1>
    <div className= "products"></div>
    {cart.map((books,idx) => (
        <div className = "product" key={idx}>
            <h3>{books.name}</h3>
            <h4>{books.price}</h4>
            <img src = {books.image} alt= {books.name} ></img>
    
            </div>
    ))}
       
    </>
);
export default renderCart;