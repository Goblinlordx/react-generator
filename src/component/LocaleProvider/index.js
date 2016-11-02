import React, {Component, cloneElement} from 'react';
import {IntlProvider, addLocaleData} from 'react-intl';
import {connect} from 'react-redux';

@connect(({user, localeData}) => ({user, messages: localeData[user && user.locale || 'en']}))
class LocaleProvider extends Component {
  render() {
    const {user, messages} = this.props;
    return (
      <IntlProvider locale={user.locale||'en'} key={user.locale||'en'} messages={messages}>
        {this.props.children}
      </IntlProvider>
    );
  }
}

export default LocaleProvider;
