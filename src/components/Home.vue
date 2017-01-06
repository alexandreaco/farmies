<template>
  <div class="home">
    <h2>{{ msg }}</h2>
    <form v-on:submit.prevent="selectState">
      <select v-model="selected">
        <option v-for="state in states" v-bind:value="state">
          {{ state }}
        </option>
      </select>
      <input type="submit" />
    </form>
    <h4>or, use my location</h4>
    <p>You chose {{ selected }}</p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: 'Find some yummy food!',
      selected: 'Rhode Island',
      states: [
        'Rhode Island',
        'Texas',
        'Maine',
        'Massachusetts',
        'New York',
      ],
    };
  },
  /* eslint-disable func-names */
  methods: {
    selectState() {
      const locationId = this.selected.replace(/ /g, '-').toLowerCase();
      this.$router.push({ path: `/farms/${locationId}/map` });
    },
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
