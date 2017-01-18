<template>
  <div class="map">
    <h2>Map</h2>
    <p>Showing farms (map) in {{ $route && $route.params.id }}</p>
    <div id="mapArea"></div>
  </div>
</template>

<script>
import { mapMixins } from '../mixins/map.mixins';

export default {
  name: 'map',
  mixins: [mapMixins],
  data() {
    return {};
  },
  mounted() {
    this.initMap({
      id: 'mapArea',
      center: [51.505, -0.09],
      zoom: 13,
    });
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mapArea {
  width: 100%;
  height: 400px;
}
</style>
