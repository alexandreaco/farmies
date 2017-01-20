/* eslint-disable no-undef */
import Vue from 'vue';
import Farms from 'src/components/Farms';

describe('Farms.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Farms),
    }).$mount();
    expect(vm.$el.querySelector('.farms h2').textContent)
      .to.contain('Showing farms in ');
  });
});
