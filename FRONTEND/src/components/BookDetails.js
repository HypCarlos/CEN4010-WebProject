import React, {useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css';
import {Link, Router} from 'react-router-dom';


import showCartBooks from "./showCartBooks"

function BookDetails(props){
    const [books, setBooks] = useState([])
    const [id, setId] = useState()

    useEffect(() => {
        axios
        .get(`/books/${props.match.params.bookid}`)
        .then(res => {
            console.log(res)
            setBooks(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

const [cart,setCart] = useState([]);
const [page, setPage] = useState('products');

const addToCart = (books) => {
    alert( books.name + " has been added to your Cart! " + " There are " + (cart.length + 1) + " items in your cart." );
setCart([...cart,books]);
console.log(cart);
}

function itemNum() {
    return <h1>{cart.length}</h1>
}




const renderCart = () => (
    <>
    <h1> Cart </h1>
    <div className= "products"></div>
    {cart.map((books,index) => (
        <div className = "product" key={index}>
            <h3>{books.name}</h3>
            <h4>{books.price}</h4>
            <img src = {books.image} alt= {books.name} ></img>
    
            </div>
    ))}
       
    </>
);

return (

<div className = "details">
    <header>
        
    </header>
    {page === 'cart' && renderCart}
    <div className = "back-to-home">
    <Link to="/" Back to home page></Link>
    </div>
    <div className="details">

     <div className="details-image">
        <img src={books.image} alt="book"></img>
     </div>
<div className = "Test">
{/* <showCartBooks name = {books.price} /> */}
</div>
    <div className="details-info">
       <ul>
           <li>
               <h4>{books.name}</h4>
           </li>
           
           <li>
              Price: <b>${books.price}</b>
           </li>

           <li>
              Description:
              <div>
                  {books.desc}
              </div> 
           </li>

           <div className="details-action">
                <ul>
                    <li>
                        Price: {books.price}
                     <button onClick = {() => addToCart(books) }className = "Atc-button">Add to Cart</button>
                        
                     <button onClick = {() => renderCart(cart) } className = "Atc-button">Add to Wish List</button>
                    </li>
                    <li>
                        Qty: <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </li>
                </ul>
           </div>


       </ul> 
    </div>


</div>

</div>
    )
}

export default BookDetails;