import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #1d7070;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  /* color: white; */
  font-size: 70px;
  letter-spacing: 1.5px;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({textAlign:"center"})}
`;
const InputContainer = styled.div`
  display: flex;
  background-color: white;
  width: 50%;
  height: 40px;
  justify-content: space-between;
  ${mobile({width:"80%"})}

`;
const Input = styled.input`
  padding-left: 20px;
  border: none;
  font-size: 16px;
  flex: 8;
`;
const Button = styled.button`
  border: none;
  flex: 1;
  color: white;
  background-color: teal;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
