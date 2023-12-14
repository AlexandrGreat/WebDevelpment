import { Drawer, Menu, Typography } from "antd";
import {HomeFilled, MenuFoldOutlined} from '@ant-design/icons'
import { useNavigate } from "react-router-dom";
import styles from '../../App.module.css';
import header from './Header.module.css';
import { useState } from "react";

function RightMenu(){
    const [rightWindow,setRightWindow]=useState(false);

    const navigate=useNavigate();

    const handleMenuSelect=(item)=>{
        navigate(`/${item.key}`);
    }

    return(
    <div>
        <MenuFoldOutlined className={header.Menu} onClick={()=>setRightWindow(true)}/>
        <Drawer open={rightWindow} onClose={()=>setRightWindow(false)} title="Activities">
            <Menu mode='vertical' onClick={handleMenuSelect} items={[
            {label:'Home',key:'home'},
            {label:'Products',key:'products'},
            {label:'About us',key:'about'},
            {label:'Contact & Support',key:'contact'},
            ]}/>
        </Drawer>
    </div>
    );
}

function ApplicationHeader(){

    const navigate=useNavigate();

    const handleMenuSelect=(item)=>{
        navigate(`/${item.key}`);
    }

    return (
    <div className={styles.Header}>
        <Menu mode="horizontal" className={header.HorizontalMenu} onClick={handleMenuSelect} items={[
            {label:<HomeFilled/>,key:'home'},
            {label:'Products',key:'products'},
            {label:'Food',key:'food',children:[{label:'Cat food',key:'cat-food'},{label:'Dog food',key:'dog-food'},{label:'Bird food',key:'bird-food'},{label:'Rodent food',key:'rodent-food'}]},
            {label:'Houses',key:'houses',children:[{label:'Rodent cages',key:'rodent-cages'},{label:'Mats',key:'mats'},{label:'Bird cages',key:'bird-cages'}]},
            {label:'Accessories',key:'accessories',children:[{label:'Leashes',key:'leashes'},{label:'Clothes',key:'clothes'}]}
        ]}/>

        <Typography.Text className={header.ShopName}>
            My Little Friend
        </Typography.Text>

        <RightMenu />
    </div>);
}

export default ApplicationHeader;