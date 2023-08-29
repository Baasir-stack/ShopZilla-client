import styled from "styled-components"

const Container  = styled.div`
    background-color: #547a7a;
    height: 30px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Announcement = () => {
  return (
    <Container>Super Deal! Free Shipping on Orders Over $50</Container>
  )
}

export default Announcement