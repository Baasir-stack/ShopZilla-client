/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { popularProducts } from "../../data/db";
import Product from "./Product";
import axios from "axios";
import { useEffect,useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px;
  padding: 15px;
`;

const Products = ({category, filters, sort}) => {

  const [products,setProducts]  = useState([])
  const [filteredProducts,setFilteredProducts] = useState([])

  
  const sortFunction = (a, b) => {
    if (sort === "newest") {
      return a.createdAt - b.createdAt;
    } else if (sort === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  };
  

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:3000/api/v1/products?category=${category}`  
            : "http://localhost:3000/api/v1/products"
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err)
      }
    };
    getProducts();
  }, [category]);


  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);

  useEffect(() => {
 
    setFilteredProducts((prev) => [...prev].sort(sortFunction));
  }, [sort]);
  return (
    <Container>
      
      { category 
      ? filteredProducts.map((product) => (
        <Product key={product._id} product={product} />
      )) :   
      products.slice(0,8).map((product) => (
        <Product key={product._id} product={product} />
      ))
      }  
    </Container>
  );
};

export default Products;
