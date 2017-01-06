<template>
  <div class="farms">
    <h2>Showing farms in {{ state }}</h2>
    <ul class="toggle">
      <li><router-link to="map">Map</router-link></li>
      <li><router-link to="list">List</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'farms',
  data() {
    return {
      state: 'Rhode Island',
    };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
