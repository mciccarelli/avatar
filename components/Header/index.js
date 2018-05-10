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
  _handleRoute = (e, name) => {
    e.preventDefault();
    // route to homepage
    Router.push('/').then(() => {
      const selector = `#${name}`;
      const scrollToElement = document.querySelector(selector);
      // .2s delay
      setTimeout(() => {
        if (scrollToElement && !_.isEmpty(scrollToElement)) {
          // scroll to section
          scrollToElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 200);
    });
  };
  _renderMenuItem = item => {
    const { pathname, toggleLearnMore } = this.props;
    if (item === 'about') {
      // hack to toggle learn more accordion from about link
      return <span onClick={() => toggleLearnMore()}>{item}</span>;
    } else {
      return <span onClick={e => this._handleRoute(e, item)}>{item}</span>;
    }
  };
  render() {
    const { navItems, pathname } = this.props;
    const { open } = this.state;

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
          {navItems &&
            navItems.map((item, idx) => {
              return (
                <MenuItem onClick={this._handleClick} key={`item-${idx + 1}`}>
                  {this._renderMenuItem(item)}
                </MenuItem>
              );
            })}
        </Menu>
      </NavContainer>
    );
  }
}

export default Header;
