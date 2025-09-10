import React from "react";
function ShopItem({product, icon}) {
    if(icon == "view_module") {
    return (
        //module style
        <React.Fragment>
        <div className="product-card">
            <h2 className="product-title">{product.name}</h2>
            <p className="product-color">{product.color}</p>
            <img className="product-image" src={product.img} alt={product.name}></img>
            <div className="product-footer">
                <span className="product-price">${product.price}</span>
                <button className="add-to-cart">ADD TO CART</button>
            </div>
        </div>
        </React.Fragment>
    )
        } //if icon view_module;
        else {
            return (
                //line style
                <React.Fragment>
                    <div className="product-card-list">
                    <img src={product.img} alt={product.img} className="product-image-list" />
                    <div className="product-title">{product.name}</div>
                    <div className="product-color">{product.color}</div>
                     <div className="product-price">${product.price}</div>
                     <button className="add-to-cart">ADD TO CART</button>
                     </div>
                </React.Fragment>
            )
        }
}
export default ShopItem;
