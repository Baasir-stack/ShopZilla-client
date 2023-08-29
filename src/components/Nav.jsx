/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Search from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../redux/features/user/userSlice";
import { persistor } from "../redux/app/store";

const Container = styled.div`
  background-color: #e6f5e6;
  /* border: 2px solid red; */
  padding: 10px 20px;
  ${mobile({ padding: "10px 0px" })}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  cursor: pointer;
  font-size: 14px;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  background-color: white;
  display: flex;
  padding: 3px;
  align-items: center;
  margin-left: 25px;
  ${mobile({ marginLeft: "10px" })}
`;
const Input = styled.input`
  border: none;
  /* height: 30px; */
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Title = styled.h1`
  font-weight: bold;

  ${mobile({ fontSize: "24px", marginLeft: "5px" })}
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 50px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Nav = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    persistor.purge();
    navigate("/login");
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: "22px" }} />
          </SearchContainer>
        </Left>

        <Center>
          <Title>ShopZilla.</Title>
        </Center>

        <Right>
          <MenuItem onClick={handleLogout}>Log Out</MenuItem>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <Link to={`/cart`}>
            <MenuItem>
              <Badge badgeContent={quantity} color="secondary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Nav;
