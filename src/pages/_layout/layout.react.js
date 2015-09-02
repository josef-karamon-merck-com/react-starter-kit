import React, { Component } from 'react';

import logo from '../../assets/images/msd_logo-symbol-only_white.svg';
// HINT: `flexboxgrid` uses same classnames as bootstrap
import 'flexboxgrid/dist/flexboxgrid';
import styles from './styles.sass';


export default class Layout extends Component {
  render() {
    return (
      <div>
        <div className={`${styles.navbar} row middle-xs`}>
          <div className="col-xs-3">
            menu, app name
          </div>
          <div className="col-xs-6 center-xs">
            <a className={styles.logo} href="#">
              <img src={logo} />
            </a>
          </div>
          <div className="col-xs-3 end-xs">
            settings
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
