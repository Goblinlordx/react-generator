import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import NavBar from 'components/NavBar';

@CSSModules(styles)
class NavShell extends Component {
  getNavBarDim = ele => {
    const nbDim = ele.getBoundingClientRect();
    this.setState({nbDim});
  };
  ContentContainer = ({topSpacing}) => (
      <section style={{paddingTop: topSpacing}}>
        {this.props.children}
      </section>
  );
  render() {
    const {children} = this.props;
    const {NavBarContainer, ContentContainer} = this;
    return (
      <div>
        <div styleName='navbar-container' ref={this.getNavBarDim}>
          <NavBar/>
        </div>
        {
          this.state && this.state.nbDim && (
            <ContentContainer topSpacing={this.state.nbDim.height}/>
          )
        }
      </div>
    )
  }
}

export default NavShell;
