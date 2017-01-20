/* eslint-disable no-undef */
import Vue from 'vue';
import PageNotFound from 'src/components/PageNotFound';

describe('PageNotFound.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(PageNotFound),
    });
    expect(vm.$el.querySelector('.notFound h2').textContent)
      .to.equal('404');
  });
});
