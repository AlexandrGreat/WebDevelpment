import { useContext, useEffect, useState } from "react";
import { Badge, Button, Card, Image, List, Modal, Rate, Typography, message, Form, Input, InputNumber, DatePicker, Select } from "antd";
import styles from './Products.module.css';
import { useParams } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
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

function Products(){
    const [products,setProducts]=useState([]);
    const [sort,setSort]=useState('az');
    const [category,setCategory]=useState("");
    const params=useParams();

    const productContextData=useContext(ProductContext);

    useEffect(()=>{
        if(params.categoryID==="products") {setProducts(productContextData[0].products); setCategory("All Products");}
        if(params.categoryID==="cat-food") {setProducts(productContextData[1].products); setCategory("Cat food");}
        if(params.categoryID==="dog-food") {setProducts(productContextData[2].products); setCategory("Dog food");}
        if(params.categoryID==="bird-food") {setProducts(productContextData[3].products); setCategory("Bird food");}
        if(params.categoryID==="rodent-food") {setProducts(productContextData[4].products); setCategory("Rodent food");}
        if(params.categoryID==="bird-cages") {setProducts(productContextData[5].products); setCategory("Bird cages");}
        if(params.categoryID==="rodent-cages") {setProducts(productContextData[6].products); setCategory("Rodent cages");}
        if(params.categoryID==="mats") {setProducts(productContextData[7].products); setCategory("Mats");}
        if(params.categoryID==="leashes") {setProducts(productContextData[8].products); setCategory("Leashes");}
        if(params.categoryID==="clothes") {setProducts(productContextData[9].products); setCategory("Clothes");}
    },[params,productContextData])

    const sortItems=()=>{
        const sorted=[...products];
        sorted.sort((a,b)=>{
            if(sort==='az'){
                return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : a.title.toLowerCase() === b.title.toLowerCase() ? 0 : -1
            }
            else if(sort==='za'){
                return a.title.toLowerCase() < b.title.toLowerCase() ? 1 : a.title.toLowerCase() === b.title.toLowerCase() ? 0 : -1
            }
            else if(sort==='lh'){
                return (a.price*(1-a.discountPercentage)).toFixed(2) > (b.price*(1-b.discountPercentage)).toFixed(2) ? 1 : (a.price*(1-a.discountPercentage)).toFixed(2) === (b.price*(1-b.discountPercentage)).toFixed(2) ? 0 : -1
            }
            else if(sort==='hl'){
                return (a.price*(1-a.discountPercentage)).toFixed(2) < (b.price*(1-b.discountPercentage)).toFixed(2) ? 1 : (a.price*(1-a.discountPercentage)).toFixed(2) === (b.price*(1-b.discountPercentage)).toFixed(2) ? 0 : -1
            }
            else return 0;
        })
        return sorted;
    }

    return(
        <div>
            <div className={styles.NiceBox}>
                <Typography.Text className={styles.CategoryText}>
                    Category: {category}
                </Typography.Text>
            </div>
            <div className={styles.ShopArea}>
            <div className={styles.ShopMain}>
                <Typography.Text>
                    Sort items by:
                </Typography.Text>
                <Select defaultValue='az' onChange={(value)=>{setSort(value)}} options={[
                    {label:'Alphabet (A-Z)',value:'az'},
                    {label:'Alphabet (Z-A)',value:'za'},
                    {label:'Price (low-high)',value:'lh'},
                    {label:'Price (high-low)',value:'hl'},
                ]}></Select> 
            <List grid={{column:4}} renderItem={(product,index)=>{return (
            ItemCard(product,index,product.discountPercentage)
            )}} dataSource={sortItems()}>
            </List>
            </div>
            </div>
        </div>
    );
}

export default Products;