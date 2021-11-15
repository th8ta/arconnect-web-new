import { css } from 'styled-components';

const Button = css`
  width: 2rem;
  border: none;
  outline: none;
  color: $color;
  text-align: center;
  padding: 1rem 3rem;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.05rem;
  font-family: inherit;
  border-radius: 0.75rem;
  background: $background;
  transition: all 400ms ease;

  &:hover {
    transform: scale(1.04);
  }

  &:active {
    transform: scale(0.97);
  }

  @media screen and (min-width: 48rem) {
    min-width: 20rem;
  }
`;
