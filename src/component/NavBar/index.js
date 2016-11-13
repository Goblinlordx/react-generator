import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';
import {connect} from 'react-redux';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

@connect(({auth, user})=>({auth, user}), null, null, {pure:false})
@CSSModules(styles)
class NavBar extends Component {
  render() {
    const {auth, user:{displayName}} = this.props;
    return (
      <nav styleName='nav'>
        <ul>
          <li><IndexLink to='/' activeClassName={styles.active}>Home</IndexLink></li>
          {auth.ed &&
            <li><Link to='/test' activeClassName={styles.active}>Test</Link></li>
          }
        </ul>
        <ul styleName='right'>
          {!auth.ed &&
            <li><Link to='/login' activeClassName={styles.active}>Login</Link></li>
          }
          {displayName &&
            <li><span>{displayName}</span></li>
          }
          {auth.ed &&
            <li><Link to='/logout'>Logout</Link></li>
          }
        </ul>
      </nav>
    );
  }
}

export default NavBar;
