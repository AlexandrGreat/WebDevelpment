import React from "react";
import { Button, Form, Input,Typography } from "antd";

const {Title}=Typography;

class LogInForm extends React.Component{

    render(){
    return (
        <div align="center">

            <Title>Callback form</Title>
            <Form style={{width:'30%'}} onFinish={()=>{alert('Thanks, we will contact you soon')}}>
                <Form.Item label="Email:" name="mail" rules={[{required:true, message:'Please enter your email'}]}>
                <Input/>
                </Form.Item>
                
                <Form.Item label="Phone:" name="number" rules={[{required:true, message:'Please enter your phone number'}]}>
                <Input/>
                </Form.Item>

                <Form.Item label="Name:" name="name "rules={[{required:true, message:'Please enter your name'}]}>
                <Input/>
                </Form.Item>

                <Form.Item>
                <Button type="primary" htmlType="submit">Confirm</Button>
                </Form.Item>
            </Form>
        </div>
        )
    }
}
export default LogInForm;