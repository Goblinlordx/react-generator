import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import NavBar from 'component/NavBar';

@CSSModules(styles)
class NavShell extends Component {
  constructor() {
    super();
    this.state = {};
  }
  getNavBarRef = ele => {
    this._nb = ele;
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
    const {children} = this.props;
    const {NavBarContainer, ContentContainer} = this;
    return (
      <div>
        <div styleName='navbar-container' ref={this.getNavBarRef}>
          <NavBar/>
        </div>
        {
          this.state.nbDim && (
            <ContentContainer topSpacing={this.state.nbDim.height}/>
          )
        }
      </div>
    )
  }
}

export default NavShell;
