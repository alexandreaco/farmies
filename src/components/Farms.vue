<template>
  <div class="farms">
    <div class="header">
      <div class="title">
        <h2>Showing farms in {{ name }}</h2>
        <ul class="toggle">
          <li><router-link to="map">Map</router-link></li>
          <li><router-link to="list">List</router-link></li>
        </ul>
      </div>
    </div>
    <keep-alive>
      <router-view :state-name="name" :center="center" :zoom="zoom" :farms="farms"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { stateMixins } from '../mixins/state.mixins';
import { apiMixins } from '../mixins/api.mixins';

export default {
  name: 'farms',
  mixins: [stateMixins, apiMixins],
  data() {
    return {
      name: 'Rhode Island',
      center: [38.78, -101.33],
      zoom: 4,
      farms: [],
    };
  },
  created() {
    if (this.$route) {
      // Get data
      const stateData = this.getData(this.$route.params.id);
      // Store it in props to send to children
      this.name = stateData.name;
      this.center = stateData.center;
      this.zoom = stateData.zoom;
      // Get farms and store data
      this.getFarmsByState(this.$route.params.id)
      .then((res) => { this.farms = res; });
    }
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.farms {
  position: relative;
}

.header {
  background-color: rgba(255,255,255,0.33);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}

.title {
  display: flex;
  justify-content: space-between;
  margin: 5px 10px;
}

h2 {
  margin: 0;
  font-size: 18px;
}

.toggle {
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  width: 80px;
}
</style>
