import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './MainMenu.styles';

class MainMenu extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('MainMenu will mount');
  }

  componentDidMount = () => {
    console.log('MainMenu mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('MainMenu will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('MainMenu will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('MainMenu did update');
  }

  componentWillUnmount = () => {
    console.log('MainMenu will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="MainMenuWrapper">
        Test content
      </div>
    );
  }
}

MainMenu.propTypes = {
  // bla: PropTypes.string,
};

MainMenu.defaultProps = {
  // bla: 'test',
};

export default MainMenu;
