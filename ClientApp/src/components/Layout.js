import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import style from './layout.module.css'

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <Container
            // className={style.main}
            tag="main">
          {this.props.children}
        </Container>
      </div>
    );
  }
}
