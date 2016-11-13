import React, {Component, cloneElement} from 'react';
import {withRouter} from 'react-router';
import RCTG from 'react-addons-css-transition-group';
import {connect} from 'react-redux';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import NavBar from 'component/NavBar';

@connect(({init}) => ({init}))
@CSSModules(styles)
class NavShell extends Component {
  constructor() {
    super();
    this.state = {};
  }
  getNavBarRef = ele => {
    setTimeout(() => this._nb = ele)
  };
  ContentContainer = ({topSpacing}) => (
      <section style={{paddingTop: topSpacing}}>
        {this.props.children}
      </section>
  );
  setDim() {
    if (!this._nb) return;
    const nbDim = this._nb.getBoundingClientRect();
    if (!this.state.nbDim) {
      this.setState({nbDim});
    }
  }
  componentDidMount() {
    this.setDim();
  }
  componentWillUpdate() {
    this.setDim();
  }
  render() {
    const {children, init} = this.props;
    const {NavBarContainer, ContentContainer} = this;
    return (
      <div>
        <div styleName='navbar-container' ref={this.getNavBarRef}>
          <RCTG
            transitionName="fade"
            transitionEnterTimeout={400}
            transitionLeaveTimeout={400}
          >
            {init.ed && <NavBar/> || null}
          </RCTG>
        </div>

        <RCTG
          transitionName="fade"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        >
          {
            this.state.nbDim && (
              <ContentContainer topSpacing={this.state.nbDim.height}/>
            )
          }
        </RCTG>
      </div>
    )
  }
}

export default NavShell;
