import Vue from 'vue'
import Vuetify from 'vuetify'
import store from '../../src/store/index'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import AppHeader from '../../src/components/AppHeader/AppHeader.vue'

Vue.use(Vuetify)

const localVue = createLocalVue()

describe('Testing AppHeader', () => {
  it('Render Test', () => {
    let vuetify
    beforeEach(() => {
      vuetify = new Vuetify()
    })

    const $route = { path: '/' }
    const wrapper = shallowMount(AppHeader, {
      localVue,
      vuetify,
      mocks: { $route },
      store
    })

    expect(wrapper.text()).toContain('Go Home')
    expect(wrapper.text()).toContain('Filter')
    expect(wrapper.text()).toContain('Favorites')
    expect(wrapper.text()).toContain('Delete')
    expect(wrapper.text()).toContain('About')
  })
})
