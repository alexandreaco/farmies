export const apiMixins = {
  methods: {
    getFarmsByState(state) {
      return this.$http.get(`https://farm-api.herokuapp.com/api/farms?state=${state}`)
      .then(
        response => Promise.resolve(response.json()),
        response => Promise.reject(response.json())
      );
    },
  },
};

export default apiMixins;
