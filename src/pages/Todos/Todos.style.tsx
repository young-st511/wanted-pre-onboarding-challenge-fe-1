import styled from "styled-components";
import { StyledButton } from "../../components/styles/StyledButton";
import StyledRootBox from "../../components/styles/StyledRootBox";

export const Wrapper = styled(StyledRootBox)`
  padding: 2.4rem 1.2rem;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 3.6rem;
  gap: 2.4rem;
`;

export const Input = styled.input`
  flex: 1;

  height: 100%;

  padding: 0 1.2rem;

  font-size: 1.6rem;
  font-weight: 700;

  border-radius: 0.8rem;
  outline: none;

  &::placeholder {
    font-weight: 500;
    color: ${({ theme: { color } }) => color.gray2};
  }

  &:focus {
    box-shadow: inset 0 0 0.4rem rgba(100, 100, 100, 0.2);
  }
`;

export const ContentInput = styled(Input)`
  flex: none;

  text-overflow: ellipsis;

  margin-top: 2.4rem;
  height: 3.6rem;

  font-weight: 500;
`;

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 700;
`;

export const Contents = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
`;

export const Button = styled(StyledButton)`
  padding: 1rem 1rem;
  margin-right: 1.2rem;

  border-radius: 0.8rem;
`;

export const Submit = styled(Button)`
  font-size: 1.6rem;
  font-weight: 700;
  padding: 0.6rem 1.8rem;
`;
