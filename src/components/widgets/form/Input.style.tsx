import styled, { css } from "styled-components";

const Input = styled.input`
  ${({ theme }) => theme.shadow.light};

  width: 100%;
  box-sizing: border-box;
  padding: 1rem 1rem;

  font-size: 1.6rem;
  font-weight: 500;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.bgColor};

  ::placeholder {
    color: ${({ theme }) => theme.color.gray2};
  }
`;

const LabelTitle = styled.p`
  margin-left: 0.2rem;
  margin-bottom: 0.6rem;

  font-size: 1.6rem;
  font-weight: 600;
`;

const Label = styled.label<{ isError: boolean }>`
  width: 100%;

  ${({ theme, isError }) =>
    isError
      ? css`
          ${Input} {
            background-color: ${theme.color.redPoint}10;
          }

          ${LabelTitle} {
            color: ${theme.color.redPoint};
          }
        `
      : ""};
`;

const Error = styled.p`
  margin-left: 0.2rem;

  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color.redPoint};
`;

export { Input, Label, LabelTitle, Error };
