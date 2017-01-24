<template>
  <div class="farm">
    <div class="container">
      <h2>Farm</h2>
      <pre class="data">{{ data }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'farm',
  props: ['data'],
  data() {
    return {};
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.farm {
  height: 100vh;
  left: 50%;
  max-width: 900px;
  overflow: scroll;
  position: fixed;
  transform: translateX(-50%);
  top: 12px;
  z-index: 4;
}

.farm::-webkit-scrollbar {
  display: none;
}

.container {
  background-color: #FFF;
  box-shadow: rgba(0,0,0,0.1);
  padding: 20px;
}

.data {
  text-align: left;
}
</style>
