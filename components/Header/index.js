import React from 'react';
import _ from 'lodash';
import Link from 'next/link';
import Router from 'next/router';
import { Hamburger, Logo, Menu, MenuItem, NavContainer } from './styles';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  _toggleMenu = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };
  _handleClick = () => {
    const { open } = this.state;
    if (!open) return;
    // close menu
    this.setState({ open: false });
  };
  _handleRoute = (e, pathname, selector) => {
    e.preventDefault();
    Router.push(pathname).then(() => {
      const scrollToElement = document.querySelector(selector);
      // .2s delay
      setTimeout(() => {
        if (scrollToElement && !_.isEmpty(scrollToElement)) {
          // scroll to section
          scrollToElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    });
  };
  _renderMenuItem = (text, href, selector) => {
    const { pathname } = this.props;
    if (selector) {
      // smooth scroll to section on homepage
      return (
        <span onClick={e => this._handleRoute(e, href, selector)}>{text}</span>
      );
    } else {
      // normal route
      return (
        <Link href={href} prefetch>
          <a>{text}</a>
        </Link>
      );
    }
  };
  render() {
    const { pathname } = this.props;
    const { open } = this.state;

    // TODO: move nav items to cms
    const menuItems = [
      { text: 'About', href: '/about', selector: false },
      { text: 'Leadership', href: '/', selector: '#leadership' },
      { text: 'Projects', href: '/', selector: '#projects' },
      // { text: 'News', href: '/', selector: '#news' },
      { text: 'Contact', href: '/', selector: '#contact' }
    ];

    return (
      <NavContainer>
        <Logo>
          <Link prefetch href="/">
            <a>
              <img src="../static/avatar-logo.svg" />
            </a>
          </Link>
        </Logo>
        <Hamburger onClick={this._toggleMenu} src="../static/i-menu.svg" />
        <Menu className={open ? 'open' : ''}>
          {menuItems &&
            menuItems.map((item, idx) => {
              const { text, href, selector } = item;
              return (
                <MenuItem
                  onClick={this._handleClick}
                  key={`item-${idx + 1}`}
                  active={pathname === href && pathname === '/about'}
                >
                  {this._renderMenuItem(text, href, selector)}
                </MenuItem>
              );
            })}
        </Menu>
      </NavContainer>
    );
  }
}

export default Header;
