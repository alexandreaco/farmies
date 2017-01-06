import Vue from 'vue';
import Map from 'src/components/Map';

describe('Map.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Map),
    });
    expect(vm.$el.querySelector('.map p').textContent)
      .to.contain('Showing farms (map)');
  });
});
