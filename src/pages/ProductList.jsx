/* eslint-disable no-unused-vars */
import { styled } from "styled-components";
import Nav from "../components/Nav";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState } from "react";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  height: 100%;

  ${mobile({
    margin: "0px 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  })}
`;
const FilterText = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  margin-right: 30px;
  padding: 10px;
  font-size: 16px;
  ${mobile({ margin: "10px 0px", width: "100%" })}
`;

const Option = styled.option``;

const ProductList = () => {

  const location = useLocation()
  const category = location.pathname.split("/")[2];

  const [filters, setFilters]  = useState({})
  const [sort, setSort]  = useState('Newest')

  const handleFilters = (e)=>{
    const value = e.target.value

    setFilters({
      ...filters,
      [e.target.name]:value
    })
    
  }


  return (
    <Container>
      <Nav />
      <Announcement />
      <Title> Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>

          <Select name='color' onChange={handleFilters}>
            <Option disabled value="Color">
              Color
            </Option>
            <Option value="White">White</Option>
            <Option value="Black">Black</Option>
            <Option value="Red">Red</Option>
            <Option value="Blue">Blue</Option>
            <Option value="Yellow">Yellow</Option>
            <Option value="Purple">Purple</Option>
            <Option value="Orange">Orange</Option>
            <Option value="Gray">Gray</Option>
            <Option value="Maroon">Maroon</Option>
            <Option value="Mustard">Mustard</Option>
            <Option value="Olive Green">Olive Green</Option>

          </Select>

          <Select name='size' onChange={handleFilters}>
            <Option disabled value="Size">
              Size
            </Option>
            <Option value="XS">XS</Option>
            <Option value="S">S</Option>
            <Option value="M">M</Option>
            <Option value="L">L</Option>
            <Option value="XL">XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e)=>setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option  value="asc">Price (asc)</Option>
            <Option  value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort}/>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
