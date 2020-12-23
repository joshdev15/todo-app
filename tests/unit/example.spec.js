import { mount } from '@vue/test-utils'
import AppHeader from '../../src/components/AppHeader/AppHeader.vue'

describe('Foo', () => {
  it('renders a message and responds correctly to user input', () => {
    const $route = { path: '/' }
    const wrapper = mount(AppHeader, { mocks: $route })

    expect(wrapper.contains('.app-header').length).toBe(1)
    // expect(wrapper.find('h1').text()).toEqual('TODO-APP')
    // expect(wrapper.vm.$route.path).toEqual($route.path)
  })
})
