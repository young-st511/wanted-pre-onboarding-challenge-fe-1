import styled, { DefaultTheme } from "styled-components";

interface SkeletonBoxProps {
  /** unit: rem */
  width: number;
  /** unit: rem */
  height: number;
  color: Pick<DefaultTheme, "color">;
}

const SkeletonBox = styled.div<SkeletonBoxProps>`
  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem;
`;

export default SkeletonBox;
