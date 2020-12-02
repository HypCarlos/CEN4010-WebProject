import React, {useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css';
import {Link, Router} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';



function BookDetails(props){
    const [qty, setQty] = useState(1);      // DEFAULT QTY = 1  
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
const productList = useSelector(state => state.productList);
const {products, loading, error} = productList;
const dispatch = useDispatch();


const handleAddToCart = () => {
    props.history.push("/ShoppingCart/" + props.match.params.bookid + "?qty=" + qty);
}

function itemNum() {
    return <h1>{cart.length}</h1>
}



return (

<div className = "details">
    <header>
        
    </header>
    
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
                     <button onClick = {handleAddToCart} className = "Atc-button">Add to Cart</button>
                        
                     <button className = "Atc-button">Add to Wish List</button>
                    </li>
                    <li>
                        Qty: <select value= {qty} onChange= {(e) => {setQty(e.target.value)}}>
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