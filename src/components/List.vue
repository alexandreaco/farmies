<template>
  <div class="list">
    <h2>List</h2>
    <p>Showing farms (list) in {{ $route && $route.params.id }}</p>
    <pre class="data">{{ farms }}</pre>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: ['farms'],
  data() {
    return {};
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.data {
  text-align: left;
}
</style>
