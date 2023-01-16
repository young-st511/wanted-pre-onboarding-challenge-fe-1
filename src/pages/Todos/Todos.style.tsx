import styled from "styled-components";
import { StyledButton } from "../../components/styles/StyledButton";
import StyledRootBox from "../../components/styles/StyledRootBox";

export const Wrapper = styled(StyledRootBox)`
  margin: 1.2rem auto;
  padding: 2.4rem 2.4rem;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 700;
`;

export const Contents = styled.p`
  margin-top: 2rem;

  font-size: 1.6rem;
  font-weight: 500;
`;

export const Button = styled(StyledButton)`
  padding: 0.6rem 1.8rem;
  margin-right: 1.2rem;

  font-size: 1.6rem;
  font-weight: 700;

  border-radius: 0.8rem;
`;
