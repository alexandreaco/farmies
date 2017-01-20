import MapComponent from 'src/components/Map';

describe('Map.vue', () => {
  it('has a mounted hook', () => {
    expect(typeof MapComponent.mounted).to.equal('function');
  });
});
