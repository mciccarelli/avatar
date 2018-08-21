import Head from 'next/head';
import Router from 'next/router';
import { Header, Footer } from '../';
import { Wrap } from './styles';
import NProgress from 'nprogress';

// page loading indicator
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const App = ({
  children,
  footer,
  navItems,
  pathname,
  toggleLearnMore,
  title = 'Avatar Companies'
}) => (
  <Wrap>
    <Head>
      <title>{title}</title>
    </Head>
    <Header
      pathname={pathname}
      toggleLearnMore={toggleLearnMore}
      navItems={navItems}
    />
    <main>{children}</main>
    <Footer entry={footer} />
  </Wrap>
);

export default App;
