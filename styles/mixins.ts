import * as Types from 'types';
import { css } from 'styled-components';

export const FluidFont = ({
  fontWeight,
  fontSize,
  valueDiff
}: Types.FluidFontProps) => css`
  font-weight: ${fontWeight || '400'};
  font-family: 'Poppins', sans-serif;
  font-size: calc(
    ${fontSize} + ${valueDiff} * ((100vw - 280px) / (1800 - 280))
  );
`;

export const FluidFontTest = (
  fontWeight: number,
  fontSize: string,
  valueDiff: number
) => css`
  font-weight: ${fontWeight || 400};
  font-family: 'Poppins', sans-serif;
  font-size: calc(
    ${fontSize} + ${valueDiff} * ((100vw - 280px) / (1800 - 280))
  );
`;

export const DisplayFlex = ({
  flexDirection,
  alignItems,
  justifyContent
}: Types.DisplayFlexProps) => css`
  display: flex;
  flex-direction: ${flexDirection || 'row'};
  align-items: ${alignItems || 'flex-start'};
  justify-content: ${justifyContent || 'flex-start'};
`;

export const DisplayFlexTest = (
  flexDirection: string,
  alignItems: string,
  justifyContent: string
) => css`
  display: flex;
  flex-direction: ${flexDirection || 'row'};
  align-items: ${alignItems || 'flex-start'};
  justify-content: ${justifyContent || 'flex-start'};
`;

export const QandAButton = css`
  color: #000;
  width: 16rem;
  border: none;
  padding: 1rem;
  cursor: pointer;
  background: #fff;
  text-align: center;
  font-weight: 700;
  font-size: 1.2rem;
  margin-top: 1.2rem;
  margin-bottom: 2rem;
  border-radius: 0.875rem;
  transition: all 400ms ease-in-out;
`;
