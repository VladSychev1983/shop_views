function ShopItem({product}) {
    return (
        <div className="product-card">
            <h2 className="product-title">{product.name}</h2>
            <p className="product-color">{product.color}</p>
            <img className="product-image" src={product.img} alt={product.name}></img>
            <div className="product-footer">
                <span className="product-price">${product.price}</span>
                <button className="add-to-cart">ADD TO CART</button>
            </div>
        </div>
    );
}
export default ShopItem;
