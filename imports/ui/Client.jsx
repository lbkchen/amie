import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import makeAsyncScriptLoader from 'react-async-script';
import { LocationEnum } from '../enums.js';

class Client extends Component {

  componentDidMount() {
  }

  getLocationCoordinates() {

  }

  getLocationType() {

  }

  render() {
    return (
      <div>Hello World</div>
    );
  }
}

const callbackName = "onloadcallback";
const URL = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB8Lfb2JCXL_CqC5wcdi3wRuqwVJ-cN4jA&libraries=places`;
const globalName = "client-wrapper";

// export default Client;
export default makeAsyncScriptLoader(Client, URL, {
  callbackName: callbackName,
  globalName: globalName,
});
