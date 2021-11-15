import { css } from 'styled-components';

interface FluidFontProps {
  fontWeight?: string;
  fontSize: string;
  valueDiff: number;
}

interface DisplayFlexProps {
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
}

export const FluidFont = ({
  fontWeight,
  fontSize,
  valueDiff
}: FluidFontProps) => css`
  font-weight: ${fontWeight || '400'};
  font-family: 'Poppins', sans-serif;
  font-size: calc(
    ${fontSize} + ${valueDiff} * ((100vw - 280px) / (1800 - 280))
  );
`;

export const DisplayFlex = ({
  alignItems,
  justifyContent,
  flexDirection
}: DisplayFlexProps) => css`
  display: flex;
  align-items: ${alignItems || 'flex-start'};
  flex-direction: ${flexDirection || 'row'};
  justify-content: ${justifyContent || 'flex-start'};
`;

export const QandAButton = css`
  width: 16rem;
  cursor: pointer;
  padding: 1rem;
  margin-top: 1.2rem;
  margin-bottom: 2rem;
  border-radius: 0.875rem;
  text-align: center;
  font-weight: 700;
  font-size: 1.2rem;
  transition: all 400ms ease-in-out;

  &:hover {
    opacity: 1;
    color: #fff;
    background: none;
    transform: scale(0.97);
    border: 2px solid gray;
  }
`;