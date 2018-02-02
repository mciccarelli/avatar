import Link from 'next/link';
import Head from 'next/head';
import { Header, Footer } from '../';
import { Wrap } from './styles';

const App = ({ children, footer, title = 'Avatar Companies' }) => (
  <Wrap>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <main>{children}</main>
    <Footer entry={footer} />
  </Wrap>
);

export default App;
