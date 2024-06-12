import styles from "./Card.module.css";
import "/src/index.css";
import PropTypes from "prop-types";

function Card(props) {
    return(
        <>
            <a className={styles.card}>
                <img  className={`${styles.card__infobox_margins}`} src={`${props.image}`} alt="product pic" />
                <div className={styles.card__infobox}>
                    <h5 className={`${styles.product__title} ${styles.card__infobox_margins}`}>{props.title}</h5>
                    <p className={`${styles.product__description} ${styles.card__infobox_margins}`}>{props.description}</p>
                    <p className={`${styles.product__price} ${styles.card__infobox_margins}`}>{`$${props.price}`}</p>
                </div>
            </a>

        </>
    )
}

Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
}

export default Card;