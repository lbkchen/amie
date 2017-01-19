"use strict";

import React from 'react';
import makeAsyncScriptLoader from 'react-async-script';

import Client from '../ui/Client.jsx';

const callbackName = 'onloadcallback';
const URL = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB8Lfb2JCXL_CqC5wcdi3wRuqwVJ-cN4jA&libraries=places`;
const globalName = 'maps-wrapper';

export default makeAsyncScriptLoader(Client, URL, {
  callbackName: callbackName,
  globalName: globalName,
});
