import styled, { DefaultTheme, keyframes } from "styled-components";

interface SkeletonBoxProps {
  /** unit: rem */
  width?: number;
  /** unit: rem */
  height?: number;
  colorKey: keyof DefaultTheme["color"];
}

const gleaming = keyframes`
  from {
    opacity: 1;
  }
  
  to {
    opacity: 0.4;
  }
`;

const SkeletonBox = styled.div<SkeletonBoxProps>`
  width: ${({ width }) => (width ? width + "rem" : "unset")};
  height: ${({ height }) => (height ? height + "rem" : "unset")};

  background-color: ${({ theme, colorKey }) => theme.color[colorKey]};
  border-radius: ${({ height }) => (height ? height * 0.2 + "rem" : "unset")};

  animation: ${gleaming} infinite 0.8s ease-in-out alternate;
`;

export default SkeletonBox;
