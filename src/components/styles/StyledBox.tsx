import styled from "styled-components";

const StyledBox = styled.div`
  ${({ theme }) => theme.size.width};
  ${({ theme }) => theme.shadow.light};
  
  box-sizing: border-box;
  margin: 10rem auto;
  padding: 3.2rem;
  
  background-color: ${({ theme: { color } }) => color.white};
  border-radius: ${({ theme }) => theme.size.radius};
`;

export default StyledBox;
