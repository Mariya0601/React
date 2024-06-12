import styles from "./Shipping.module.css";
import "/src/index.css";
import PlainLink from "../elements/PlainLink.jsx";
import InputField from "../elements/InputField.jsx";
import ColoredLink from "../elements/ColoredLink.jsx";
import {useSelector} from "react-redux";

function Shipping() {

    const totalAmount = useSelector(state => state.cartSlice.sum)

    return (
        <>
            {/*<div className="shipping">*/}
                <div className={`${styles.shipping__container} center`}>
                    <div className={styles.shipping__infobox}>
                        <h5 className={styles.shipping__title}>SHIPPING ADDRESS</h5>
                        <div className={styles.shipping__info}>
                            <div className={styles.shipping__quote}>
                                <InputField placeholder="Country"/>
                                <InputField placeholder="State"/>
                                <InputField placeholder="Postcode / Zip code"/>
                                <PlainLink to='#' linkText="GET A QUOTE"/>
                            </div>
                            <div className={styles.shipping__checkout}>
                                <div className={styles.shipping__total}>
                                    <p className={styles.shipping__subtotal}><span>SUB TOTAL $</span>{totalAmount}</p>
                                    <p className={styles.shipping__grandtotal}>GRAND TOTAL <span>{`$${totalAmount}`}</span></p>
                                </div>
                                <div className={styles.shipping__checkout_box}>
                                    <ColoredLink to="#" linkText="PROCEED TO CHECKOUT"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/*</div>*/}
        </>
    )
}

export default Shipping