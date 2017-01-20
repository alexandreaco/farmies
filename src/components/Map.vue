<template>
  <div class="map">
    <div class="canvas">
      <div id="mapArea"></div>
    </div>
    <!-- For Debugging -->
    <!-- <button class="button" v-on:click="getData">Get Data</button> -->
  </div>
</template>

<script>
import { mapMixins } from '../mixins/map.mixins';

export default {
  name: 'map',
  mixins: [mapMixins],
  props: ['farms', 'center', 'zoom'],
  data() {
    return {};
  },
  mounted() {
    this.initMap({
      id: 'mapArea',
      center: this.center,
      zoom: this.zoom,
    })
    .then(() => {
      // temp hack to wait until farms has been initialized
      setTimeout(() => { this.addMarkers(this.farms); }, 500);
    });
  },
  methods: {
  // ---
  // For Debugging
  //
  // getData() {
  //   console.log('-----');
  //   console.log(this.getCenter());
  //   console.log(this.getZoom());
  //   console.log('-----');
  // },
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
  z-index: 1;
}
#mapArea {
  width: 100%;
  height: calc(100vh - 40px);
}
.button {
  position: absolute;
  z-index: 2;
  bottom: -100px;
}
</style>
