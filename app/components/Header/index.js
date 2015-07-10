import React from 'react';
import { Link } from 'react-router';

import styles from './style';
import logoURL from './images/react-logo.svg';

export default class Header extends React.Component {
  render() {
    return (
      <header className={styles.main}>
        <img className={styles.logo} src={logoURL} height="125" />

        <div className={styles.wrap}>
          <h1 className={styles.title}>TODO app</h1>
        </div>
        <div className={styles.menu}>
          <Link to="/todos">pending</Link>
          <Link to="/todos/all">all</Link>
          <Link to="/todos/completed">completed</Link>
          <Link to="/todos/create">new</Link>
        </div>
      </header>
    );
  }
}
