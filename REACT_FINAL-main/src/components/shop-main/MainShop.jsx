
import {useSelector} from "react-redux";
import Card from "/src/components/elements/Card.jsx";
import styles from "./MainShop.module.css";
import "/src/index.css";

function MainShop() {

    const catalog = useSelector(state => state.productSlice);

    return (
        <>
            <div className={styles.shop}>
                <div className={`${styles.shop__container} center`}>
                    {
                        catalog.map((item) => (
                            <Card
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            price={item.price}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default MainShop;