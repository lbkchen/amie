import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

import makeAsyncScriptLoader from 'react-async-script';
import { APIRoutes } from '../api/routes.js';
import { LocationEnum } from '../enums.js';

class Client extends Component {

  componentDidMount() {
  }

  getGeolocationAndSearchPlaces() {
    HTTP.post(APIRoutes.getGeolocation(), {}, (err, res) => {
      if (err) {
        console.error('HTTP connection unreachable');
      } else {
        const lat = res.location.lat;
        const lng = res.location.lng;
        const radius = 500;
        req = {
          location: new google.maps.LatLng({ lat: lat, lng: lng }),
          radius: radius,
        };
        placesSearch(React.findDOMNode(this), req, () => {});
      }
    });
  }

  placesSearch(node, req, callback) {
    service = new google.maps.places.PlacesService(node);
    service.nearbySearch(req, callback);
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
