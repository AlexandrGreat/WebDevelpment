import React, {useState} from "react";
import { Typography, Form, Input, Button, message } from "antd";
import styles from './Contact.module.css';

function Contact(){
    const [form]=Form.useForm();
    const [loading,setLoading]=useState(false);
    
    return (
        <div>
            <div className={styles.LeftColumn}></div>
            <div className={styles.RightColumn}></div>
            <div className={styles.NiceBox}></div>
            <Typography.Title>Contact and support</Typography.Title>
            <Form className={styles.Form} form={form} layout="vertical" onFinish={()=>{setLoading(true); setTimeout(()=>{form.resetFields();message.success('Feedback sent successfully');setLoading(false)},1000);}}>

                <Typography.Text className={styles.BoldText}>
                    Contact data:
                </Typography.Text>

                <Form.Item label="Email:" name="mail" rules={[{required:true, message:'Please enter your email'}]}>
                <Input/>
                </Form.Item>
                
                <Form.Item label="Phone:" name="number" rules={[{required:true, message:'Please enter your phone number'}]}>
                <Input/>
                </Form.Item>

                <Form.Item label="Name:" name="name "rules={[{required:true, message:'Please enter your name'}]}>
                <Input/>
                </Form.Item>

                <Typography.Text className={styles.BoldText}>
                    Your message:
                </Typography.Text>

                <Form.Item label="How can we help you?" name="msg" rules={[{required:true, message:'Please enter your message'}]}>
                <Input/>
                </Form.Item>

                <Form.Item>
                <Button loading={loading} type="primary" htmlType="submit">Confirm</Button>
                </Form.Item>
            </Form>
    
            <Typography.Title className={styles.Often}>Most often questions</Typography.Title>
            <div className={styles.QnA}>
            <Typography.Text className={styles.BoldText}>Q: I cant find a specific product on the site. When it will apear?</Typography.Text>
            <Typography.Text className={styles.BoldText}>A: We constantly updating our range. Within 2 days your product should appear.</Typography.Text>
            <br/>
            <Typography.Text className={styles.BoldText}>Q: What to do if an error accured when making a payment, although all data was enter correctly?</Typography.Text>
            <Typography.Text className={styles.BoldText}>A: Most likely there was an error on the server side. Don't worry, our specialists are already working to fix it.</Typography.Text>
            <br/>
            <Typography.Text className={styles.BoldText}>Q: I received the ordered product in poor condition or expired. Can i get a refund?</Typography.Text>
            <Typography.Text className={styles.BoldText}>A: We stand guard over quality and are always ready to compensate the client's losses if there is evidence (purchase receipt and tag not removed from the product).</Typography.Text>
            </div>

            <Typography.Title className={styles.BottomText}>Thank You!</Typography.Title>
        </div>
    );
}

export default Contact;