import React, {Component, cloneElement} from 'react';
import {withRouter} from 'react-router';
import RCTG from 'react-addons-css-transition-group';
import {connect} from 'react-redux';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import NavBar from 'component/NavBar';

const ContentContainer = ({topSpacing, children}) => (
  <section style={{paddingTop: topSpacing}}>
    {children}
  </section>
);

@connect(({init}) => ({init}))
@CSSModules(styles)
class NavShell extends Component {
  constructor() {
    super();
    this.state = {};
  }
  getNavBarRef = ele => {
   this.ele = ele;
  };
  setDim() {
    if (!this.ele) return;
    const nbDim = this.ele.getBoundingClientRect();
    if (!this.state.nbDim) {
      setTimeout(_=>this.setState({nbDim})); // TODO: Something better here!?
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
    const {nbDim} = this.state;
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
            init.ed &&
            this.state.nbDim && (
              <ContentContainer topSpacing={this.state.nbDim.height} children={children}/>
            )
          }
        </RCTG>
      </div>
    )
  }
}

export default NavShell;
