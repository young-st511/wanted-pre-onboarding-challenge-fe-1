import styled from "styled-components";
import { StyledButton } from "../styles/StyledButton";

export const Wrapper = styled.nav`
  ${({ theme }) => theme.shadow.light};

  position: sticky;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100vw;
  height: ${({ theme }) => theme.size.navHeight};

  padding: 0 3.2rem;

  background-color: ${({ theme: { color } }) => color.white};
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

export const LogOut = styled(StyledButton)`
  padding: 0.6rem 2rem;

  background-color: ${({ theme: { color } }) => color.sub};
  border-radius: 0.8rem;

  font-size: 1.6rem;
  font-weight: 700;
`;
