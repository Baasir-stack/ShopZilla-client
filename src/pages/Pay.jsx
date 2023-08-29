import StripeCheckout from "react-stripe-checkout";
import { useState,useEffect } from "react";
import axios from 'axios'
const KEY = "pk_test_51NQM73CWxHX0euRxnx3goXRlmQFOgFcUB8OBAl9pEt4VnBrqdNIQzNCYND6RqmKHW6RNCDWUgmBPoIr0RVF3EdwA00qFTrpNkb"

const Pay = () => {

    const [stripeToken,setStripeToken] = useState(null)



    const onToken = (token)=>{
        setStripeToken(token)
    }

    useEffect(()=>{
        const makeRequest = async()=>{
            try {
                const res = await axios.post(
                    "http://localhost:3000/api/v1/checkout/payment",{
                        tokenId:stripeToken.id,
                        amount:12000,
                    }
                )
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }  
        }
        stripeToken && makeRequest()

    },[stripeToken])

  return (
 
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <StripeCheckout
            name="ShopZilla"
            image="../../src/assets/logo.png"
            billingAddress
            shippingAddress
            description="Your total is 120$"
            amount={12000}
            token={onToken}
            stripeKey={KEY}
        >

        <button 
            style={{
                border:"none",
                width:"none",
                borderRadius:"5px",
                padding:"15px",
                backgroundColor:"black",
                color:"white",
                fontWeight:"600",
                cursor:"pointer"
            }}
        >
            Pay Now
        </button>
        </StripeCheckout>
      </div>
   
  );
};

export default Pay;
