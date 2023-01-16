import styled from "styled-components";
import { StyledButton } from "../styles/StyledButton";
import StyledRootBox from "../styles/StyledRootBox";

export const Wrapper = styled(StyledRootBox)`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

export const LogOut = styled(StyledButton)`
  padding: 1rem 1rem;
  font-size: 1.6rem;
  font-weight: 600;
`;
