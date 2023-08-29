import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  
  Twitter,
} from "@mui/icons-material";
import { styled } from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  background-color: #E4F5E0;
  padding: 15px 0px;
  ${mobile({flexDirection:"column",padding:"10px 0px"})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  ${mobile({borderBottom:"1px solid silver",paddingBottom:"20px",paddingLeft:"20px"})}

`;
const Logo = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin: 20px 0px;
`;
const Desc = styled.div`
  margin-bottom: 20px;
  letter-spacing: 0.5px;
`;
const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding-left: 30px;
  ${mobile({display:"none"})}
`;

const Title = styled.h2`
  margin: 20px 0px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding-left: 30px;
  ${mobile({paddingLeft:"20px"})}

`;



const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ShopZilla.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>

      <Right>
      <Title>Contact</Title>    
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@lama.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />

      </Right>
    </Container>
  );
};

export default Footer;
