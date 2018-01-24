import Link from 'next/link';
import Head from 'next/head';
import { Header, Footer } from '../';
import { Wrap } from './styles';
import { fetchEntryById } from '../../api';

const App = ({ children, title = 'Avatar Companies', contact, footer }) => (
  <Wrap>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <main>{children}</main>
    <Footer />
  </Wrap>
);

export default App;
