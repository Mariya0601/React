import styles from "./MainHeader.module.css";
import "../../index.css";

function MainHeader() {
    return(
        <>
            <div className={styles.main__header}>
                <div className={`${styles.main__header_container}`}>
                    <div className={styles.main__header_img}>
                        <img src="/src/static/img/page_img/main-pic.png" alt=""/>
                    </div>
                    <div className={styles.main__header_title}>
                        <div className={styles.main__header_title_bar}></div>
                        <p className={styles.main__header_title_text}>THE BRAND
                            <span className={styles.main__header_title_span}><br/>OF LUXERIOUS </span>
                            <span className={styles.main__header_title_colored_span}>FASHION</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainHeader;