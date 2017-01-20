import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Displays } from '../api/displays.js';
import Client from './Client.jsx';

// Represents the whole App
class App extends Component {

  constructor(props) {
    super(props);
  }

  onLoad() {
    console.log("Loaded");
  }

  render() {
    return (
      <Client asyncScriptOnLoad={this.onLoad} />
    );
  }
}

App.propTypes = {
  displays: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    displays: Displays.find({}).fetch(),
  };
}, App);
