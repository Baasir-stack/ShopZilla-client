/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { styled } from "styled-components";
import Nav from "../components/Nav";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../redux/features/cart/cartSlice";
import selectAllProducts from "../redux/features/cart/cartSlice";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
  /* padding: 10px 0px; */
  text-align: center;
`;
const Image = styled.img`
  width: fit-content;
  height: 85vh;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px 10px" })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
  letter-spacing: 1px;
`;
const Price = styled.span`
  font-size: 40px;
  font-weight: 100;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.h3`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  background-color: ${(props) => props.color};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 10px;
`;
const FilterTitleSize = styled.select`
  margin-left: 10px;
  padding: 4px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;
  ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
`;
const Amount = styled.span`
  width: 20px;
  border: 1px solid teal;
  border-radius: 5px;
  text-align: center;
  margin: 0px 5px;
  font-weight: 700;
`;
const Button = styled.button`
  padding: 10px;
  border: 2px solid teal;
  font-weight: 500;
  background-color: white;
  transition: all 0.5s ease;
  &:hover {
    background-color: #dae6e6;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  const all = useSelector((state) => state.cart.entities);

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const getIndividualProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/v1/products/` + id
        );
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getIndividualProduct();
  }, [id]);

  const handleQuantity = (type) => {
    type === "inc"
      ? setQuantity((prev) => prev + 1)
      : quantity > 1 && setQuantity((prev) => prev - 1);
  };

  const getColorHexCode = (colorName) => {
    const colorMapping = {
      White: "#ebdddd",
      Black: "#000000",
      Red: "#FF0000",
      Blue: "#0000FF",
      Yellow: "#FFFF00",
      Purple: "#800080",
      Orange: "#FFA500",
      Gray: "#808080",
      Maroon: "#800000",
      Mustard: "#FFDB58",
      "Olive Green": "#808000",
    };

    return colorMapping[colorName] || "black"; // Default to 'black' if color is not found in mapping
  };
  //"https://i.ibb.co/S6qMxwr/jean.jpg"

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
    setQuantity
  };
  return (
    <Container>
      <Nav />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
            The Denim Jumpsuit is the epitome of casual yet stylish fashion.
            Crafted from high-quality denim fabric, this jumpsuit offers a
            perfect blend of comfort and trendiness.<br></br>
            Embrace comfort, versatility, and timeless fashion with the Denim
            Jumpsuit – a must-have addition to your wardrobe that effortlessly
            combines style and functionality.
          </Desc>
          <Price>{product.price}$</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor
                  color={c}
                  key={c}
                  value={color}
                  onClick={() => {
                    setColor(c);
                  }}
                />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterTitleSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterTitleSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={() => handleClick(product.id)}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
