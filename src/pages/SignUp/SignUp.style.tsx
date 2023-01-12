import styled from "styled-components";
import StyledBox from "../../components/styles/StyledBox";

const Wrapper = styled(StyledBox)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

const Title = styled.h1`
  margin-bottom: 2rem;

  font-size: 2.4rem;
  color: ${({ theme: { color } }) => color.black};
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Submit = styled.button`
  padding: 0.8rem 1.6rem;
  
  background-color: ${({ theme: { color } }) => color.main};
  border-radius: 1rem;
  
  font-size:2rem;
  font-weight: 700;
  color: ${({ theme: { color } }) => color.white};

  &:hover {
    ${({theme})=>theme.shadow.light};
    scale: 1.01;

    transition: all 0.2s ease-in-out;
  }
`;

export { Wrapper, Title, Form, Submit };
