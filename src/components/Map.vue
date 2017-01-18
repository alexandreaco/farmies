<template>
  <div class="map">
    <div class="title">
      <h2>Map</h2>
      <p>Showing farms (map) in {{ $route && $route.params.id }}</p>
    </div>
    <div class="canvas">
      <div id="mapArea"></div>
    </div>
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
      center: [38.78, -101.33],
      zoom: 4,
    });
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map {
  position: relative;
}
.title {
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  z-index: 2;
}
.canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
}
#mapArea {
  width: 100%;
  height: 500px;
}
</style>
