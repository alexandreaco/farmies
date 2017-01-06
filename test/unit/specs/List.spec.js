import Vue from 'vue';
import List from 'src/components/List';

describe('List.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(List),
    });
    expect(vm.$el.querySelector('.list h2').textContent)
      .to.equal('List');
  });
});
