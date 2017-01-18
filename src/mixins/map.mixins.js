/* eslint-disable no-undef */
import L from 'leaflet';

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
      if (document && document.getElementById(mapProps.id) && mapProps.id) {
        const map = L.map(mapProps.id).setView(mapProps.center, mapProps.zoom);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
      }
    },
  },
};

export default mapMixins;
