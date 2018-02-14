import { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import { Header, Footer } from '../';
import { Wrap } from './styles';
import NProgress from 'nprogress';

class App extends Component {
  constructor(props) {
    super(props);
    // page loading indicator
    Router.onRouteChangeStart = url => NProgress.start();
    Router.onRouteChangeComplete = () => NProgress.done();
    Router.onRouteChangeError = () => NProgress.done();
  }
  render() {
    const { children, footer, pathname, title = 'Avatar Companies' } = this.props;
    return (
      <Wrap>
        <Head>
          <title>{title}</title>
        </Head>
        <Header pathname={pathname} />
        <main>{children}</main>
        <Footer entry={footer} />
      </Wrap>
    );
  }
}

export default App;
