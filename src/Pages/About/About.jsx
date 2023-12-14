import React from 'react';
import { Typography, Image } from 'antd';
import styles from './About.module.css';

function About(){
    return (
        <div>
            <div className={styles.LeftColumn}></div>
            <div className={styles.RightColumn}></div>
            <Typography.Title className={styles.MidText}>
                About us
            </Typography.Title>
            <div className={styles.Image1}>
                <Image preview={false} src="/images/other/2.jpeg"></Image>
            </div>
            <div className={styles.Heading1}>
                <Typography.Title>We are</Typography.Title>
            </div>
            <div className={styles.Text1}>
                <Typography.Text>a team that will gladly help you and your pet. We care obout your little friends and therefore always provide you with access to a huge range of high-quality and proven products.</Typography.Text>
            </div>
            <div className={styles.Image2}>
                <Image preview={false} src="/images/other/3.jpeg"></Image>
            </div>
            <div className={styles.Heading2}>
                <Typography.Title>Caring for friends</Typography.Title>
            </div>
            <div className={styles.Text2}>
                <Typography.Text>Welcome to the place where you can easily find everything your little friend needs: from food to a comfortable place to stay. We are constantly updating our range and will be happy to help find you what you need.</Typography.Text>
            </div>
            <div className={styles.Image3}>
                <Image preview={false} src="/images/other/4.jpeg"></Image>
            </div>
            <div className={styles.Heading3}>
                <Typography.Title>Guarding quality</Typography.Title>
            </div>
            <div className={styles.Text3}>
                <Typography.Text>We always stand guard over the  quality of our products, as we always take care of your little friend. If you have any questions or suggestions, you can always contact us, we will be happy to help you.</Typography.Text>
            </div>
        </div>
    );
}

export default About;