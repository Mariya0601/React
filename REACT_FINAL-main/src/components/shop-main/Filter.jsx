import styles from "./Filter.module.css";
import '/src/index.css';
import {useDispatch} from "react-redux";
import {filterItems} from "../../reducers/ProductSlice.jsx";

function Filter() {

    const dispatch = useDispatch();

    const filteredItems = [];

    function handleOnChange(e) {
        if (e.target.checked) filteredItems.push(e.target.getAttribute("id"));
        else filteredItems.splice(filteredItems.indexOf(e.target.getAttribute("id")), 1);
        dispatch(filterItems(filteredItems));
    }

    return(
        <>
            <div className={styles.filter}>
                <div className={`${styles.filter__container} center`}>

                    <div className={styles.filter__container_box}>
                        <div className={styles.filter__filter_box}>
                            <details className={styles.filter__box_details}>
                                <summary className={styles.filter__box_summary}><span>FILTER</span>
                                    <svg width="15" height="23" viewBox="0 0 15 10" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
                                            fill="black"/>
                                    </svg>
                                </summary>
                                <div className={styles.filter__box_content}>
                                    <details className={styles.filter__box_content__details}>
                                        <summary className={styles.filter__box_content__summary}>CATEGORY</summary>
                                        <div className={styles.filter__box_content__items}>
                                            <a href="#" className={styles.filter__box_content_link}>Accesories</a>
                                            <a href="#" className={styles.filter__box_content_link}>Bags</a>
                                            <a href="#" className={styles.filter__box_content_link}>Denim</a>
                                            <a href="#" className={styles.filter__box_content_link}>Hoodies &
                                                Sweatshirts</a>
                                            <a href="#" className={styles.filter__box_content_link}>Jackets & Coats</a>
                                            <a href="#" className={styles.filter__box_content_link}>Polos</a>
                                            <a href="#" className={styles.filter__box_content_link}>Shirts</a>
                                            <a href="#" className={styles.filter__box_content_link}>Shoes</a>
                                            <a href="#" className={styles.filter__box_content_link}>Sweaters & Knits</a>
                                            <a href="#" className={styles.filter__box_content_link}>T-Shirts</a>
                                            <a href="#" className={styles.filter__box_content_link}>Tanks</a>
                                        </div>
                                    </details>
                                    <details className={styles.filter__box_content__details}>
                                        <summary className={styles.filter__box_content__summary}>BRAND</summary>
                                    </details>
                                    <details className={styles.filter__box_content__details}>
                                        <summary className={styles.filter__box_content__summary}>DESIGNER</summary>
                                    </details>
                                </div>
                            </details>
                        </div>

                        <div className={styles.filter__sort_block}>
                            <div className={`${styles.filter__sort_box} ${styles.filter__sort_trending}`}>
                                <details className={styles.filter__sort_parameter}>
                                    <summary>TRENDING NOW</summary>
                                </details>
                            </div>
                            <div className={`${styles.filter__sort_box} ${styles.filter__sort_size}`}>
                                <details className={styles.filter__sort_parameter}  onChange={(e) => handleOnChange(e)}>
                                    <summary>SIZE</summary>
                                    <div className={styles.filter__sort_parameter_content}>
                                        <div className={styles.filter__sort_parameter_box}>
                                            <input type="checkbox" id="XS"/>
                                            <label htmlFor="xs">XS</label>
                                        </div>
                                        <div className={styles.filter__sort_parameter_box}>
                                            <input type="checkbox" id="S"/>
                                            <label htmlFor="s">S</label>
                                        </div>
                                        <div className={styles.filter__sort_parameter_box}>
                                            <input type="checkbox" id="L"/>
                                            <label htmlFor="l">L</label>
                                        </div>
                                    </div>
                                </details>
                            </div>
                            <div className={`${styles.filter__sort_box} ${styles.filter__sort_size}`}>
                                <details className={styles.filter__sort_parameter}>
                                    <summary>PRICE</summary>
                                </details>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Filter;