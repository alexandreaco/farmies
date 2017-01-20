/* eslint-disable no-undef */
import L from 'leaflet';

let MAP = {};

export const mapMixins = {
  methods: {
    //---
    // Render a leaflet map
    //
    // Params:
    //  options = {
    //    id,
    //    center,
    //    zoom,
    //  }
    //
    initMap(options) {
      const mapProps = Object.assign({}, options);
      const accessToken = 'pk.eyJ1IjoiYWxleGRlZiIsImEiOiJjaXkzNXBxcTEwMDJ6MzBwZ2doN25ucW1jIn0.W9azPhRdG-Z43Gd4IPpIcA';
      if (document && document.getElementById(mapProps.id) && mapProps.id) {
        MAP = L.map(mapProps.id).setView(mapProps.center, mapProps.zoom);
        L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/emerald-v8/tiles/{z}/{x}/{y}?access_token=${accessToken}`).addTo(MAP);
      }
    },

    getCenter() {
      return MAP.getCenter();
    },

    getZoom() {
      return MAP.getZoom();
    },
  },
};

export default mapMixins;
