import { useRouter } from 'next/router';
import { createGlobalStyle } from 'styled-components';
import Nav from 'components/Nav';
import type { AppProps } from 'next/app';

interface Props {
  page: string;
}

const GlobalStyles = createGlobalStyle<Props>`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background: ${(props) => (props.page === 'security' ? '#000' : '#f5f5f7')};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <>
      <GlobalStyles page={router.pathname === '/security' ? 'security' : ''} />
      <Nav />
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
