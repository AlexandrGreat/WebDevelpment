import React,{useState} from "react";
import './Header.css';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "../../formikElements/MyTextInput";
import { Button, Modal } from "antd";
import { useLocation } from "react-router-dom";

const Header=()=>{
        const location=useLocation();
        console.log(location.pathname);

        const [open,setOpen]=useState(false);
        const [buttonText,setButtonText]=useState('SignUp');

        const showModal=()=>{
                setOpen(true);
        }

        return(<div>  
        <h1>Welcome to LR8-9</h1>
        <Button type='primary' style={{position:'absolute',right:0,top:20}} onClick={showModal}>{buttonText}</Button>
        <Modal destroyOnClose title='Registration' open={open} footer={''} onCancel={()=>setOpen(false)}>
        <Formik 
            initialValues={{name:'',surname:'',password:'',email:''}} 
            validationSchema={Yup.object({
                name:Yup.string()
                .min(3,'Name must be 3 characters at least')
                .required('Please input your name'),
                surname:Yup.string()
                .max(40,'Surname must be 40 characters maximum')
                .required('Please input your surname'),
                email:Yup.string()
                .email('Invalid email provided')
                .required('Please input your email'),
                password:Yup.string()
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,"Must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 non letter symbol")
                .required('Please input your password'),
            })}
            onSubmit={()=>{setOpen(false); setButtonText('LogOut and Register');}}
            >
                <Form>
                <MyTextInput label='Name' name='name' type='text' placeholder='sample name'/><br/>
                <MyTextInput label='Surname' name='surname' type='text' placeholder='sample surname'/><br/>
                <MyTextInput label='Email' name='email' type='email' placeholder='sample@gmail.com'/><br/>
                <MyTextInput label='Password' name='password' type='password' placeholder='password'/><br/>
                <button type='submit'>Submit</button>
                </Form>
                </Formik>
        </Modal>
        </div>
        );
}
export default Header;