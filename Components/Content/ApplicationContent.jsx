import ApplicationRoutes from "../Routes/Routes";
import styles from '../../App.module.css'

function ApplicationContent(){
    return (
    <div className={styles.Content}>
        <ApplicationRoutes />    
    </div>
    );
}

export default ApplicationContent;