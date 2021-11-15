import styled from 'styled-components';
import { FluidFont, DisplayFlex, QandAButton } from 'styles/styledMixins';

interface Props {
  border?: boolean;
}

const SecurityCard = styled.section<Props>`
  width: 90%;
  margin: 2rem auto;
  ${DisplayFlex({ flexDirection: 'column', alignItems: 'center' })};

  border-radius: 40px;
  padding-bottom: 3rem;
  backdrop-filter: blur(80px);
  -webkit-backdrop-filter: blur(80px);
  background: rgba(57, 57, 57, 0.24);

  @media screen and (min-width: 45rem) {
    background: none;
    border: ${(props) => `1px solid ${props.border ? '#6e008b' : 'none'}`};
    ${DisplayFlex({ alignItems: 'center', justifyContent: 'space-evenly' })};
  }

  @media screen and (min-width: 64rem) {
    width: 60rem;
    height: 30rem;
    margin: 2rem auto;
  }

  @media screen and (min-width: 80rem) {
    width: 70rem;
  }

  .textContainer {
    padding-top: 3rem;
    ${DisplayFlex({ flexDirection: 'column', alignItems: 'center' })}

    .tagline {
      padding: 0.2rem 1rem;
      background: #05aa5b;
      border-radius: 25.5px;
      margin-bottom: 0.5rem;
      ${FluidFont({ fontSize: '12px', valueDiff: 4 })}
    }

    h2 {
      margin: 0.5rem;
      line-height: 60px;
      text-align: center;
      word-wrap: break-word;
      ${FluidFont({ fontWeight: '700', fontSize: '2.6rem', valueDiff: 20 })}
    }

    .text {
      padding: 1rem;
      text-align: center;
      ${FluidFont({ fontSize: '15px', valueDiff: 1 })}
    }

    button {
      ${QandAButton}
    }

    @media screen and (min-width: 45rem) {
      align-items: flex-start;
      width: 65%;

      h2,
      .text {
        text-align: start;
      }

      h2 {
        line-height: 80px;
      }
    }
  }

  .icon {
    img {
      width: 250px;
      height: 250px;
      display: block;
      padding: 2rem;
      margin: 0 auto;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.48);
      box-shadow: inset 0px 4px 80px rgba(184, 184, 184, 0.25);
    }
  }
`;

export default SecurityCard;
