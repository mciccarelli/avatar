import Link from 'next/link';
import Head from 'next/head';
import { Header, Footer } from '../';
import { Wrap } from './styles';

export default ({ children, title = 'Avatar Companies' }) => (
  <Wrap>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <main>{children}</main>
    <Footer />
  </Wrap>
);
