import React,{useState} from "react";
import './Header.css';
import { Button, Modal } from "antd";
import { useLocation } from "react-router-dom";

const Header=()=>{
        const location=useLocation();
        console.log(location.pathname);

        const [open,setOpen]=useState(false);
        const [cofirmLogging,setConfirmLogging]=useState(false);
        const [modalText,setModalText]=useState('');
        const [name,setName]=useState('');
        const [buttonText,setButtonText]=useState('LogIn');
        const [password,setPassword]=useState('');

        const showModal=()=>{
                setModalText('');
                setOpen(true);
        }

        const handleOk=()=>{
                if (name.length!==0 && password.length!==0){
                setModalText('Logging in...');
                setConfirmLogging(true);
                setTimeout(()=>{setOpen(false); setConfirmLogging(false)},2000);
                setName(''); setPassword(''); setButtonText('LogIn as another user');
                }
                else
                setModalText('Invalid username or password')
        }

        const handleCancel=()=>{
                setOpen(false);
        }

        const handleUserUpdate=(event)=>{
                setName(event.target.value);
        }

        const handlePasswordUpdate=(event)=>{
                setPassword(event.target.value);
                console.log(name)
        }

        return(<div>  
        <h1>Welcome to LR6-7</h1>
        <Button type='primary' style={{position:'absolute',right:0,top:20}} onClick={showModal}>{buttonText}</Button>
        <Modal title='Welcome back' open={open} onOk={handleOk} confirmLoading={cofirmLogging} onCancel={handleCancel}>
                <table>
                        <tr><td>Username</td><td><input type="text" onChange={handleUserUpdate} value={name}/></td></tr>
                        <tr><td>Password</td><td><input type="password" onChange={handlePasswordUpdate} value={password}/></td></tr>
                </table>
                <p>{modalText}</p><br/>
        </Modal>
        </div>
        );
}
export default Header;