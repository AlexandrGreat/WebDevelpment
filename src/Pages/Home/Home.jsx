import { Image, Typography, List, Rate, Card, Form, InputNumber, DatePicker, Input, Modal, Button, message, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import styles from "./Home.module.css";
import React, { useState, useContext, useEffect } from "react";
import { ProductContext } from "../../Context/ProductContext";

const handleDiscount=(price,percent)=>{
    if(percent!==0){
        return <Typography.Paragraph type="danger"><Typography.Text delete>{price}$</Typography.Text> {(price*(1-percent)).toFixed(2)}$</Typography.Paragraph>
    }
    return <Typography.Paragraph>{price}$</Typography.Paragraph>
}

const ItemCard=(product,index,percent)=>{
    if (percent!==0){
        return(
            <Badge.Ribbon className={styles.itemBadge} text={`-${product.discountPercentage*100}%`} color="red">
                <Card className={styles.itemCard} title={product.title} key={index} cover={<Image src={product.thumbnail} className={styles.image} />} actions={[<Rate value={product.rating}></Rate>, <BuyButton product={product}/>]}>
                    <Card.Meta title={handleDiscount(product.price,product.discountPercentage)} description={<Typography.Paragraph ellipsis={{rows:2,expandable:true,symbol:'Read more'}}>{product.description}</Typography.Paragraph>}></Card.Meta>
                </Card>
            </Badge.Ribbon>
        )
    }
    return(
    <Card className={styles.itemCard} title={product.title} key={index} cover={<Image src={product.thumbnail} className={styles.image}/>} actions={[<Rate value={product.rating} allowHalf></Rate>, <BuyButton product={product}/>]}>
        <Card.Meta title={handleDiscount(product.price,product.discountPercentage)} description={<Typography.Paragraph ellipsis={{rows:2,expandable:true,symbol:'Read more'}}>{product.description}</Typography.Paragraph>}></Card.Meta>
    </Card>
    )
}

function BuyButton({product}){
    const [loading,setLoading]=useState(false);
    const [loadingModal,setLoadingModal]=useState(false);
    const [open,setOpen]=useState(false);

    const handleBuy=()=>{
        setLoading(true);
        setOpen(true);
        setLoading(false);
    }

    return(
        <>
        <Button type='primary' loading={loading} onClick={()=>{handleBuy();}}> <ShoppingCartOutlined/> Buy</Button>
        <Modal destroyOnClose={true} footer={<Button loading={loadingModal} form="confirmForm" htmlType="submit">Buy</Button>} 
        title='Confirm purchase' confirmLoading={loadingModal} open={open}  onCancel={()=>{setOpen(false); message.error('Purchase canceled')}}>
            <Typography.Text className={styles.BoldText}>
                Contact and delivery data
            </Typography.Text>

            <Form layout='vertical' size='small' id="confirmForm" onFinish={()=>{setLoadingModal(true); setTimeout(()=>{setOpen(false);message.success(`${product.title} purchased successfully`);setLoadingModal(false)},2000);}}>
                <Form.Item label="Email:" name="mail" rules={[{required:true, message:'Please enter your email'}]}>
                <Input/>
                </Form.Item>
                
                <Form.Item label="Phone:" name="number" rules={[{required:true, message:'Please enter your phone number'}]}>
                <Input/>
                </Form.Item>

                <Form.Item label="Name:" name="name "rules={[{required:true, message:'Please enter your name'}]}>
                <Input/>
                </Form.Item>

                <Form.Item label="Address:" name="address "rules={[{required:true, message:'Please enter your address'}]}>
                <Input/>
                </Form.Item>

                <Typography.Text className={styles.BoldText}>
                    Payment data
                </Typography.Text>

                <Form.Item label="Card number:" name="card-number" rules={[{required:true, message:'Please enter your card number'}]}>
                <InputNumber min={0} maxLength={16} style={{width:'100%'}}/>
                </Form.Item>

                <Form.Item label="CVV/CVC:" name="card-code" rules={[{required:true, message:'Please enter your card CVV'}]}>
                <InputNumber min={0} max={9999} style={{width:'30%'}}/>
                </Form.Item>
                
                <Form.Item label="Expires:" name="card-expires" rules={[{required:true, message:'Please enter expirationDate'}]}>
                <DatePicker picker="month"/>
                </Form.Item>
            </Form>
        </Modal>
        </>
    )
}

function Home(){

    const [recentProducts,setRecentProducts]=useState([]);
    const productContextData=useContext(ProductContext);

    useEffect(()=>{
        const temp=[];
        temp.push(productContextData[0].products[productContextData[0].products.length-1]);
        temp.push(productContextData[0].products[productContextData[0].products.length-2]);
        temp.push(productContextData[0].products[productContextData[0].products.length-3]);
        setRecentProducts(temp);
        console.log("RECENT");
        console.log(recentProducts)
    },[recentProducts,productContextData])

    return (
        <div >
            <div className={styles.NiceBox}></div>
            <div className={styles.LeftColumn}></div>
            <div className={styles.RightColumn}></div>
            <Typography.Title className={styles.MidText}>
                Welcome
            </Typography.Title>
            <div className={styles.WelcomeImage}>
            <Image preview={false} src="/images/other/1.jpeg"></Image>
            </div>
            <div className={styles.WelcomeText}>
            <Typography.Text>Welcome to the place where you can easily find everything your little friend needs: from food to a comfortable place to stay. We are constantly updating our range and will be happy to help find you what you need.</Typography.Text>
            </div>
            <Typography.Title className={styles.RecentItems}>
                Recently added items:
            </Typography.Title>
            <div className={styles.RecentMenu}>
            <List grid={{column:3}} renderItem={(product,index)=>{return (
            ItemCard(product,index,product.discountPercentage)
            )}} dataSource={recentProducts}></List>
            </div>
            <div className={styles.LowText}>
            <Typography.Text>We're sure that you will find you what you need.</Typography.Text>
            </div>
        </div>
    );
}

export default Home;