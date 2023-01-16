import styled from "styled-components";
import { StyledButton } from "../../components/styles/StyledButton";
import StyledRootBox from "../../components/styles/StyledRootBox";

export const Wrapper = styled(StyledRootBox)`
  margin: 2.4rem auto;
  padding: 2rem 1.2rem;
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

  font-size: 2rem;
  font-weight: 700;

  border-radius: 0.8rem;
  outline: none;

  &::placeholder {
    font-weight: 500;
    color: ${({ theme: { color } }) => color.gray2};
  }

  &:focus {
    box-shadow: inset 0 0 0.4rem rgba(100, 100, 100, 0.4);
  }
`;

export const ContentInput = styled(Input)`
  flex: none;

  text-overflow: ellipsis;
  font-size: 1.6rem;

  margin-top: 0.8rem;
  height: 3.6rem;

  font-weight: 500;
`;

export const Submit = styled(StyledButton)`
  border-radius: 0.8rem;
  padding: 0.6rem 1.8rem;

  margin-right: 1.2rem;

  font-size: 1.6rem;
  font-weight: 700;
`;
