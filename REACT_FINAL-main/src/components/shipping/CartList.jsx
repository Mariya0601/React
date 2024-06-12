import styles from "./CartList.module.css";
// import {useSelector} from "react-redux";
import CartCard from "../elements/CartCard.jsx";
import catalog from "/src/data/products.js"


function CartList() {

    const cartFilter = catalog.filter(item => item.inCart === "true");

    return (
        <>
            <div className={`${styles.cart__container} center`}>
                <div className={styles.cart_cart__box}>
                    {
                        cartFilter.map((item) => (
                            <CartCard
                                key={item.id}
                                title={item.title}
                                price={item.price}
                                color={item.color}
                                size={item.size}
                                image={item.image}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default CartList;