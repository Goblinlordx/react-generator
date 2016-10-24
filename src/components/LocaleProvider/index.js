import React, {Component, cloneElement} from 'react';
import {IntlProvider} from 'react-intl';
import {connect} from 'react-redux';

const userLocale = 'en';

@connect(({locale}) => ({locale}))
class LocaleProvider extends Component {
  render() {
    return (
      <IntlProvider locale={userLocale} key={userLocale} messages={this.props.locale}>
        {this.props.children}
      </IntlProvider>
    );
  }
}

export default LocaleProvider;
