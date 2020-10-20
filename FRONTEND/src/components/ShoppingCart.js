import React, { Component, useState } from 'react';
import {Link} from 'react-router-dom';
import '../App.css'

import renderCart from "./showCartBooks"
import BookDetails from "./BookDetails"



class ShoppingCartClass extends Component{

    
    constructor()
    {
        super();
        this.state = {
            books : []          // cart
        }

    }
        componentDidMount()
        {
            fetch('/books')
                .then(res => res.json())
                .then(books => this.setState({books}, () => console.log('books fetched..', books)));
        }

       
        
    render(props)
    {
        return <div className = "Cart"> 
    <h1 className = "Cart-header">Shopping Cart</h1>
    <div className = "Products">
    <table>
        <tr>
            <tr className = "headings"></tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
        </tr>
    
    </table>
    
    <itemNum/>
    </div>
    
    
    <h6 className = "cart-exit">Continue browsing<a href = "http://localhost:3000/" ><button className = "Atc-button">🏠</button> </a> </h6> 
        
   
        </div>
        
    }
}

export default ShoppingCartClass;

