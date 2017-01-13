<template>
  <div id="app">
    <header>
     <router-link to="/"><h1>Farmies</h1></router-link>
   </header>

     <router-view class="view"></router-view>
   </div>
</template>

<script>

export default {
  name: 'app',
};
</script>

<style>
body {
  background-color: #F7F7F7;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  max-width: 900px;
}

header {
  border-bottom: 1px solid #ddd;
  padding: 10px 5px;
  text-align: right;
}

h1 {
  font-size: 14px;
  margin: 0 10px;
}
</style>
