import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.white};

  cursor: pointer;

  :hover {
    scale: 1.01;
  }
`;
