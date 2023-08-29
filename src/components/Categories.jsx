import styled from "styled-components";
import { categories } from "../../data/db";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    justify-content: space-between;;
    margin-left: 19px;
    padding: 20px ;
    ${mobile({flexDirection:"column",margin:"0px"})}
`

const Categories = () => {
  return (
    <Container>
        {categories.map(item=>(
            <CategoryItem key={item.id} item={item}/>
        ) )}
    </Container>
  )
}

export default Categories