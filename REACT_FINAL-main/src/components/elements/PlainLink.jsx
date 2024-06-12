import PropTypes from "prop-types";
import styles from "./PlainLink.module.css";

function PlainLink(props) {

    return(
        <>
            <a className={styles.plain_link} href={props.to}>{props.linkText}</a>
        </>
    )
}

PlainLink.propTypes = {
    to: PropTypes.string,
    linkText: PropTypes.string,
}

export default PlainLink;