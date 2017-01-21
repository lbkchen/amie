class APIRoutes {
  static googleKey() { return 'AIzaSyB8Lfb2JCXL_CqC5wcdi3wRuqwVJ-cN4jA'; }
  static googleAPI() { return 'https://www.googleapis.com/'; }
  static createGoogleRoute(route) {
    return `${APIRoutes.googleAPI()}${route}?key=${APIRoutes.googleKey()}`;
  }
  static getGeolocation() {
    return createGoogleRoute('geolocation/v1/geolocate');
  }
}

export { APIRoutes };
