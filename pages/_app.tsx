import 'styles/globals.scss';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import Nav from 'components/Nav';

interface Props {
  page: string;
}

const GlobalStyles = createGlobalStyle<Props>`
  body {
    background: ${(props) => (props.page === 'security' ? '#000' : '#f5f5f7')};
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
