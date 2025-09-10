import ShopItem from "./ShopItem";

export default function ListView ({ products, icon }) {
    if (icon == "view_module") {
    return (
        //формируем список товаров.
        <div className="shop-container">
        { products.map((product, index) => (
            <ShopItem key={index} product={product} icon={icon}/>
        ))}
        </div>
    );
    } //if view_module
    else {
        return ( 
            <div className="shop-container-list">
                 { products.map((product, index) => (
            <ShopItem key={index} product={product} icon={icon}/>
        ))}
            </div>
        );
    }
}