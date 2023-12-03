import React, { useState, useEffect } from 'react'

function Tooted() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(json => setProducts(json.products))
    }, []);

    return (
        <div>
            { products.map(element => 
                <div key={element.id}>
                    <div>{element.title}</div>
                    <div>{element.price}</div>
                    <div>{element.thumbnail}</div>
                </div>)}
        </div>
    )
}

export default Tooted