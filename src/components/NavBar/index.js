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
          <li><Link to="/asd">Test</Link></li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
