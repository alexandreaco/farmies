import mixins from 'src/mixins/map.mixins';

describe('map.mixins', () => {
  it('should export mixins object by default', () => {
    expect(typeof mixins === 'object').to.equal(true);
  });

  it('should contain a mixin method initMap()', () => {
    expect(typeof mixins.methods.initMap === 'function').to.equal(true);
  });
});
