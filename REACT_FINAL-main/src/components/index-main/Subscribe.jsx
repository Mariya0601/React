import styles from "./Subscribe.module.css";
import "/src/index.css";

function Subscribe() {
    return(
        <>
            <div className={styles.main__subscribe}>
                <div className={`${styles.main__subscribe_container} center`}>
                    <div className={styles.main__subscribe_info}>
                        <div className={styles.main__subscribe_img}>
                            <img src="/src/static/img/page_img/face.png" alt=""/>
                        </div>
                        <p className={styles.main__subscribe_text}>“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“</p>
                    </div>
                    <div className={styles.main__subscribe_block}>
                        <div className={styles.main__subscribe_block_title}>
                            <p className={styles.main__subscribe_title_primary}>SUBSCRIBE</p>
                            <p className={styles.main__subscribe_title_secondary}>FOR OUR NEWLETTER AND PROMOTION</p>
                        </div>
                        <form action="#" className={styles.main__subscribe_form}>
                            <input placeholder="Enter Your Email" type="text" className={styles.main__subscribe_input}/>
                            <button className={styles.main__subscriber_btn}>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subscribe;