import React, {Component, cloneElement} from 'react';
import {IntlProvider, addLocaleData} from 'react-intl';
import en from 'locale/en.cson';
import {connect} from 'react-redux';

const userLocale = 'en';
console.log(en);

@connect(({user, localeData}) => ({user, localeData}))
class LocaleProvider extends Component {
  render() {
    const {user, localeData} = this.props;
    return (
      <IntlProvider locale={user.locale||'en'} key={user.locale||'en'} messages={localeData}>
        {this.props.children}
      </IntlProvider>
    );
  }
}

export default LocaleProvider;
