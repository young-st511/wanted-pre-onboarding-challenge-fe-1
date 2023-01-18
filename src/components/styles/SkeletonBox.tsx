import styled, { DefaultTheme } from "styled-components";

interface SkeletonBoxProps {
  /** unit: rem */
  width?: number;
  /** unit: rem */
  height?: number;
  colorKey: keyof DefaultTheme["color"];
}

const SkeletonBox = styled.div<SkeletonBoxProps>`
  width: ${({ width }) => (width ? width + "rem" : "unset")};
  height: ${({ height }) => (height ? height + "rem" : "unset")};
  color: ${({ theme, colorKey }) => theme.color[colorKey]};
`;

export default SkeletonBox;
