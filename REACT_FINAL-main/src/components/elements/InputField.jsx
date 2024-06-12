import styles from "./InputField.module.css";
import PropTypes from "prop-types";

function InputField(props) {

    const styles = {
        padding: "1rem",
        marginTop: ".5rem",
        marginBottom: ".5rem",
        outline: "none",
        border: "1px solid #A4A4A4",
        color: "#A4A4A4",
    }

    return (
        <>
            <input type="text" placeholder={props.placeholder} style={styles}></input>
        </>
    )
}

InputField.propTypes = {
    placeholder: PropTypes.string,
}
export default InputField;