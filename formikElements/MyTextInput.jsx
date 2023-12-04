import { useField } from "formik"
import styles from "./Formik.module.css";

const MyTextInput=({label,...props})=>{
    const [field,meta]=useField(props);
    return(<>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input" {...field} {...props}/>
        {meta.touched && meta.error ? (<div className={styles.error}>{meta.error}</div>):null}
    </>)
}

export default MyTextInput;