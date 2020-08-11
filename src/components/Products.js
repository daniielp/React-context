import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext'
import { Link } from 'react-router-dom'



const Products = () => {

    const { products, delProduct } = useContext(ProductContext);


    const productList = products.map(product => {
        return (
            <div key={product.produktid}>
                <Link to={"/product/" + product.produktid}><h4>{product.produkttitel}</h4></Link>
                <p>{product.produktinfo}</p>
                <p>{product.produktpris}</p>
                <button onClick={() => delProduct(product.produktid)}>Delete Product</button>
            </div>
        );
    });

    return (
        <div className="Nyheder">

            <h2>Products</h2>

            {productList}

        </div>
    );
}

export default Products;