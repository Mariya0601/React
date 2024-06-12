import styles from "./Features.module.css";
import ColoredLink from "../elements/ColoredLink.jsx";

function Features() {
    return(
        <>
            <div className="features">
                <div className={`${styles.features__container} center`}>
                    <div className={styles.features__menu}>
                        <a href="#" className={styles.features__menu_woman}>30% OFF <br/><span>FOR WOMEN</span></a>
                        <a href="#" className={styles.features__menu_man}>HOT DEAL <br/><span>FOR MEN</span></a>
                        <a href="#" className={styles.features__menu_kids}>NEW ARRIVALS <br/><span>FOR KIDS</span></a>
                        <a href="#" className={styles.features__menu_accessories}>LUXIROUS & TRENDY <br/><span>ACCESORIES</span></a>
                    </div>

                    <p className={styles.features__primary_text}>Featured Items</p>
                    <p className={styles.features__secondary_text}>Shop for items based on what we featured in this week</p>
                    <ColoredLink to={"/shop"} linkText="Browse All Products"/>
                </div>
            </div>
        </>
    )
}

export default Features;