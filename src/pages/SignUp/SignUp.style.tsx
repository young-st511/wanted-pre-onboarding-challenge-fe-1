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

export { Wrapper, Title, Form };
