import React, { Component } from 'react';
import classnames from 'classnames'
import Hamburger from './Hamburger';

class MenuButton extends Component {
  state = {
    toggle: false,
  }

  extendedClickHandler = () => {
    const { onClickHandler } = this.props;

    this.setState({ toggle: !this.state.toggle });
    onClickHandler();
  }

  render() {
    const { isAuthorized } = this.props;
    const cn = classnames({
      'button button--menu': true,
      'button--hidden': !isAuthorized,
    });

    return <button
      className={cn}
      onClick={this.extendedClickHandler}
    >
      <Hamburger isToggled={this.state.toggle} />
      Меню
  </button>
  }

};


export default MenuButton;