// in the future we'll get this from an api or something
const stateData = [
  {
    id: 'texas',
    name: 'Texas',
    center: [32.21280106801518, -99.15161132812501],
    zoom: 6,
  },
  {
    id: 'rhode-island',
    name: 'Rhode Island',
    center: [41.6770148220322, -71.54983520507814],
    zoom: 9,
  },
  {
    id: 'maine',
    name: 'Maine',
    center: [45.336701909968134, -69.39514160156251],
    zoom: 7,
  },
  {
    id: 'massachusetts',
    name: 'Massachusetts',
    center: [42.261049162113856, -71.94671630859376],
    zoom: 9,
  },
  {
    id: 'new-york',
    name: 'New York',
    center: [43.04480541304369, -74.86633300781251],
    zoom: 7,
  },
];

export const stateMixins = {
  methods: {
    getData(id) {
      return stateData.find(state => state.id === id);
    },
  },
};

export default stateMixins;
