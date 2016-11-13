import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';
import {connect} from 'react-redux';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

@connect(({user})=>({user}))
@CSSModules(styles)
class NavBar extends Component {
  render() {
    const {user} = this.props;
    console.log('renderCalled');
    return (
      <nav styleName='nav'>
        <ul>
          <li><IndexLink to='/' activeClassName={styles.active}>Home</IndexLink></li>
          <li><Link to='/test' activeClassName={styles.active}>Test</Link></li>
          <li><Link to='/login' activeClassName={styles.active}>Login</Link></li>
          <li><Link to='/404test' activeClassName={styles.active}>404 test</Link></li>
        </ul>
        <ul styleName='right'>
          {user &&
            <li><Link to='/404test'>{user.displayName}</Link></li>
          }
        </ul>
      </nav>
    );
  }
}

export default NavBar;
