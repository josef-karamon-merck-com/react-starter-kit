/* @flow */

import React from 'react';
import Header from 'components/header';

import styles from './style.sass';


export default class Application extends React.Component {
  render() {
    console.log('Application: %O', this.props);
    return (<div className={styles.main}>
      <div className={styles.wrap}>
        <Header />
        <main className={styles.body}>
          {this.props.children}
        </main>
      </div>
    </div>);
  }
}
