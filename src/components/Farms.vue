<template>
  <div class="farms">
    <div class="title">
      <h2>Showing farms in {{ state }}</h2>
      <ul class="toggle">
        <li><router-link to="map">Map</router-link></li>
        <li><router-link to="list">List</router-link></li>
      </ul>
    </div>
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
.farms {
  margin-top: 20px;
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
