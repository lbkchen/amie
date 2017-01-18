import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

import { LocationEnum } from '../enums.js';

import { initMap } from '../helpers/maps.js';

class Client extends Component {

  componentDidMount() {
    initMap();
  }

  initMap() {
    map = new google.maps.Map(this.getDOMNode(), getMapProps());
    this.setState({ map: map });
  }

  getMapProps() {
    return {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    };
  }

  getLocationCoordinates() {

  }

  getLocationType() {

  }

  render() {
    return (
      <div className='map'>

      </div>
    );
  }
}

export default Client;
