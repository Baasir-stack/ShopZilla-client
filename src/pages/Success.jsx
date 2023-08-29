/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-empty */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import axios from "axios";
import {styled} from 'styled-components'
// height: "100vh",
// display: "flex",
// flexDirection: "column",
// alignItems: "center",
// justifyContent: "center",

const Container = styled.div`
  /* height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  position: relative;
  
`
const ImageContainer = styled.div`

  /* position: absolute;
  top: 0;
  left: 0;
  
  width: 50%;
  height: 50%;
  z-index: -1;
  background-image: url("../../src/assets/undraw_Order_confirmed_re_g0if.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: contain; */


  /* position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 100px); */
  
  /* margin-top: 3rem; */
  margin: 0;
  padding:0;
  height: 70vh;
`;


const Image = styled.img`
max-width: 100%;
max-height: 100%;
object-fit: contain;

`
const Button = styled.button`
font-size: 1rem;
`


const Success = () => {
  const location = useLocation();
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  const data = location.state?.stripeData;
  const cart = location.state?.products;
  const currentUser = useSelector((state) => state.user?.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await axios.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  return (
    
    <Container>
       <ImageContainer>
        <Image src={"../../src/assets/undraw_Order_confirmed_re_g0if.png"} />
      </ImageContainer>
        {orderId
          ? `Order has been created successfully. Your order number is ${orderId}`
          : `Successfull. Your order is being prepared...`}
          

        <Button style={{ padding: 10, marginTop: 10 }}>Go to Homepage</Button>
    
    </Container>
  );
};

export default Success;