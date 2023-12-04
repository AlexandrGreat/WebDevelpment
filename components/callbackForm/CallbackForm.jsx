import React from "react";
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import { Typography } from "antd";
import MyTextInput from "../../formikElements/MyTextInput";

class LogInForm extends React.Component{

    render(){
    return (
        <div align="center">

            <Typography.Title>Callback form</Typography.Title>
            <Formik 
            initialValues={{name:'',email:'',phone:''}} 
            validationSchema={Yup.object({
                name:Yup.string()
                .min(3,'Name must be 3 characters at least')
                .max(40,'Name must be shorter than 40')
                .required('Please input your name'),
                email:Yup.string()
                .email('Invalid email provided')
                .required('Please input your email'),
                phone:Yup.number()
                .moreThan(1000,'Phone number must be more than 1000')
                .lessThan(1000000000,'Phone number must be lest than 10000000000')
                .required('Please input your phone'),
            })}
            onSubmit={()=>{setTimeout(()=>{alert("Thanks, we will contact you soon")},1000)
            }}
            >
                <Form>
                <MyTextInput label='Name' name='name' type='text' placeholder='sample name'/><br/>
                <MyTextInput label='Email' name='email' type='email' placeholder='sample@gmail.com'/><br/>
                <MyTextInput label='Phone' name='phone' type='number' placeholder='0000000000'/><br/>
                <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </div>
        )
    }
}
export default LogInForm;