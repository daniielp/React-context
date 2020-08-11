import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';



const Product = (props) => {

    let ProductID = +props.match.params.productid;

    const { findProduct } = useContext(ProductContext);
    const product = findProduct(ProductID);
    // Ternary expression
    return (product ? (
            <div className="Product">
    
    
                <h1>Udvalgt produkt</h1>
    
                <h2>{product.produkttitel}</h2>
                <p>{product.produktpris}</p>
                <p>{product.produktinfo}</p>
                <p>{product.produktbeskrivelse}</p>
    
            </div>
    
    ) : (
        <h1>Vi kunne desværre ikke finde det ønskede produkt</h1>
    ));

}

export default Product;