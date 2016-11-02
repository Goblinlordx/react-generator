import React, {Component} from 'react';
import {Link} from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

@CSSModules(styles)
class NavBar extends Component {
  render() {
    return (
      <nav styleName='nav'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/test">Test</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/404test">404 test</Link></li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
