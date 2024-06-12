import styles from "./CartCard.module.css";
import PropTypes from "prop-types";
import CloseIcon from '@mui/icons-material/Close';
import {IconButton} from "@mui/material";
import {useDispatch} from "react-redux";
import {cartSum} from "../../reducers/CartSlice.jsx";

function CartCard(props) {

    const dispatch = useDispatch();
    const DEFAULT_PRODUCT_AMOUNT = 1;

    let itemQty = DEFAULT_PRODUCT_AMOUNT;

    function handleChangeItemQty(e) {
        if (e.target.value < 0) e.target.value = 0;
        dispatch(cartSum(props.price * (e.target.value - itemQty)));
        itemQty = e.target.value
    }

    return (
        <>
            <div className={styles.cart_card}>
                <img className={styles.cart_card__img} src={`${props.image}`} alt="product pic"/>
                <div className={styles.cart_card__info}>
                    <p className={styles.cart_card__title}>{props.title}</p>
                    <p className={styles.cart_card__price}>Price: <span>{`$${props.price}`}</span></p>
                    <p>Color: {props.color}</p>
                    <p>Size: {props.size}</p>
                    <div className={styles.cart_card__qty_box}>
                        <p className={styles.cart_card__qty_title}>Quantity: </p>
                        <input className={styles.cart_card__qty_input} type="number" defaultValue={DEFAULT_PRODUCT_AMOUNT} onChange={(e) => handleChangeItemQty(e)}/>
                    </div>
                </div>
                <div className={styles.cart_card__close}>
                    <IconButton
                        color="primary"
                        sx={{p: '10px'}}
                        aria-label="directions">
                        <CloseIcon/>
                    </IconButton>
                </div>
            </div>
        </>
    )
}

CartCard.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    price: PropTypes.number,
}

export default CartCard;