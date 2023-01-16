import styled from "styled-components";
import { StyledButton } from "../../components/styles/StyledButton";
import StyledRootBox from "../../components/styles/StyledRootBox";

export const Wrapper = styled(StyledRootBox)`
  margin: 1.2rem auto;
  padding: 2.4rem 2.4rem;
`;

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RightBox = styled.div``;

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

export const ButtonBox = styled.div`
  display: flex;
`;

export const Button = styled(StyledButton)`
  padding: 0.6rem 1.2rem;

  border-radius: 0.8rem;

  color: ${({ theme: { color } }) => color.main};
  background-color: ${({ theme: { color } }) => color.white};

  font-size: 1.6rem;
  font-weight: 600;

  :hover {
    background-color: ${({ theme: { color } }) => color.gray4};

    transition: background-color 0.2s ease-in-out;
  }
`;

export const DeleteButton = styled(Button)`
  color: ${({ theme: { color } }) => color.sub};
`;
