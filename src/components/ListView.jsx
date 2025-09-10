import ShopItem from "./ShopItem";
export default function ListView ({ products }) {
    return (
        //формируем список товаров.
        <div className="shop-container">
        { products.map((product) => (
            <ShopItem key={product} product={product} />
        ))}
        </div>
    );
}