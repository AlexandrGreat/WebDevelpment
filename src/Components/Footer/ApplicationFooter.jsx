import { Image, Typography } from 'antd';
import styles from '../../App.module.css';
import footer from './Footer.module.css';
import { useNavigate } from 'react-router-dom';

function ApplicationFooter(){
    const navigate=useNavigate();

    return (
    <div className={styles.Footer}>
        <Typography.Link className={footer.FooterLink} style={{color:'white'}} onClick={()=>navigate("/home")}>Home</Typography.Link>
        <Typography.Link className={footer.FooterLink} style={{color:'white'}} onClick={()=>navigate("/products")}>Products</Typography.Link>
        <Typography.Link className={footer.FooterLink} style={{color:'white'}} onClick={()=>navigate("/about")}>About us</Typography.Link>
        <Typography.Link className={footer.FooterLink} style={{color:'white'}} onClick={()=>navigate("/contact")}>Contact & Support</Typography.Link>    
        <div className={footer.FooterLinks}>
            <Typography.Link className={footer.FooterLink2} style={{color:'white'}}>Youtube</Typography.Link>
            <Typography.Link className={footer.FooterLink2} style={{color:'white'}}>Faccebook</Typography.Link>
            <Typography.Link className={footer.FooterLink2} style={{color:'white'}}>Instagram</Typography.Link>
            <Typography.Link className={footer.FooterLink2} style={{color:'white'}}>Email</Typography.Link>
            <Typography.Link className={footer.FooterLink2} style={{color:'white'}}>Phone</Typography.Link>
        </div>
        <div className={footer.Powered}>
            <Image preview={false} src="logo192.png"/>
        </div>
    </div>
    );
}

export default ApplicationFooter;