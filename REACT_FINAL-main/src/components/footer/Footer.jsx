import styles from "./Footer.module.css";
import "/src/index.css"

function Footer() {
    return(
        <>
            <div className={styles.footer}>
                <div className={`${styles.footer__container} center`}>
                    <p className={styles.footer__rights}>© 2022 Brand All Rights Reserved.</p>
                    <div className={styles.footer__links}>
                        <a href="" className={styles.footer__link}><img src="/src/static/img/fb.svg" alt="fb"/></a>
                        <a href="" className={styles.footer__link}><img src="/src/static/img/tw.svg" alt="ig"/></a>
                        <a href="" className={styles.footer__link}><img src="/src/static/img/pt.svg" alt="pt"/></a>
                        <a href="" className={styles.footer__link}><img src="/src/static/img/ig.svg" alt="tw"/></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;