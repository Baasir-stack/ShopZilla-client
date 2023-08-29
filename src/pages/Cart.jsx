/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-empty */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { styled } from "styled-components";
import Nav from "../components/Nav";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router";

const Container = styled.div`
  ${mobile({ paddingBottom: "15px" })}
`;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  /* border: 2px solid red; */
  ${mobile({ padding: "10px" })}
`;

const TopButton = styled.button`
  padding: 10px 15px;
  border: ${(props) => props.type === "filled" && "teal"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  ${mobile({ margin: "0px 10px" })}
`;
const TopTexts = styled.div`
  display: flex;
  ${mobile({ display: "none" })}
`;
const TopText = styled.div`
  margin: 0 5px;
`;

const Bottom = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3.5;
`;
const Product = styled.div`
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid #f1dcdc;
  margin: 20px 10px;
  justify-content: space-between;
  margin: 0 10px;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  display: flex;
  flex: 2;
`;
const Image = styled.img`
  width: 35vh;
  object-fit: cover;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 10px 20px;
  padding: 10px;
`;
const ProductName = styled.span`
  ${mobile({ marginBottom: "5px" })}
`;
const ProductId = styled.span`
  ${mobile({ marginBottom: "5px" })}
`;
const ProductColor = styled.span`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProductAmount = styled.span`
  margin: 15px 3px;
  font-size: 20px;
  font-weight: 700;
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.span`
  font-size: 38px;
  font-weight: 100;
`;

const Summary = styled.div`
  border: 2px solid red;
  flex: 1;
  /* display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px; */

  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 40px 20px;
  height: 50vh;
  ${mobile({ padding: "40px 10px", margin: "20px 0px" })}
`;

const SummaryTitle = styled.div`
  font-size: 32px;
  font-weight: 200;
`;
const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const Hr = styled.hr`
  border: none;
  margin: 20px 10px;
  height: 1px;
  background-color: #eee;
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
  width: 100%;
  padding: 10px 15px;
  background-color: black;
  color: white;
`;

const KEY =import.meta.env.VITE_REACT_STRIPE_KEY;
console.log(KEY)


const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null)
  const navigate = useNavigate()

  const onToken =(token)=>{
    setStripeToken(token)
  }

  useEffect(()=>{
    const makeRequest =async()=>{
      try {
        const res = await axios.post(`http://localhost:3000/api/v1/checkout/payment/`,{
          tokenId:stripeToken.id,
          amount:cart.total *100,
        })
        navigate('/success',{ state:{
          stripeData:res.data,
          products:cart,
        }});
      } catch (error) {
        console.log(error)
      }
    }

    stripeToken && makeRequest()
  },[stripeToken,navigate])
  
  return (
    <Container>
      <Nav />
      <Announcement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product key={product._id}>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>{product.price}</ProductPrice>
                </PriceDetail>
                <Hr />
              </Product>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>${cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Lama Shop"
              image="../../src/assets/logo.png"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <SummaryButton>CHECKOUT NOW</SummaryButton>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
