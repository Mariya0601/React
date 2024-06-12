import styles from "./ColoredLink.module.css";
import PropTypes from "prop-types";
import "/src/index.css";

function ColoredLink(props) {
    return (
        <>
            <a className={styles.colored_link} href={props.to}>{props.linkText}</a>
        </>
    )
}

ColoredLink.propTypes = {
    to: PropTypes.string,
    linkText: PropTypes.string,
}

export default ColoredLink;