import React from 'react'
import injectSheet from 'react-jss'
import { Link } from 'react-router-dom'

import Auth from 'components/Auth'

let Header = ({ classes }) => (
  <div className={ classes.root }>
    <Link 
      className={ classes.link }
      to={ '/' }>
      Home
    </Link>
    <Link
      className={ classes.link }
      to={ '/catalog' }>
      Catalog
    </Link>
    <div
      className={ classes.login }
      onClick={ () => Auth.login() }>
      Login
    </div>
  </div>
)

Header = injectSheet(theme => ({
  root: {
    position: 'fixed',
    height: theme.header.height,
    top: 0,
    left: 0,
    width: '100%'
  },
  link: {
    display: 'inline-block',
    margin: '0px 24px'
  },
  login: {
    display: 'inline-block',
    margin: '0px 24px',
    float: 'right'
  }
}))(Header)

export default Header

