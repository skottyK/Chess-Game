import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import LandingPage from '@/views/LandingPage.vue';

// Create a local instance of Vue for testing purposes.
const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

/**
 * @fileoverview Unit tests for the LandingPage component.
 * Ensures that the component renders correctly and navigates to the correct routes upon user actions.
 * Uses Jest and Vue Test Utils for rendering and spying on component methods.
 */
describe('LandingPage.vue', () => {
  let wrapper;

  /**
   * Before each test, the LandingPage component is mounted with a local Vue instance and router.
   */
  beforeEach(() => {
    wrapper = shallowMount(LandingPage, {
      localVue,
      router
    });
  });

  /**
   * Test to verify that the LandingPage component renders successfully.
   * Asserts that the component instance is created and exists.
   */
  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  /**
   * Test to verify navigation to the ChessBoard route.
   * Spies on the `navigateTo` method of the component and simulates a click event.
   * Asserts that `navigateTo` is called with the correct route path.
   */
  it('navigates to ChessBoard on button click', async () => {
    const spy = jest.spyOn(wrapper.vm, 'navigateTo');
    await wrapper.find('.nav-link-homePage').trigger('click');
    expect(spy).toHaveBeenCalledWith('/ChessBoard');
  });

  /**
   * Test to verify navigation to the LeaderBoard route.
   * Similar to the ChessBoard navigation test, it spies on the `navigateTo` method and asserts the call.
   */
  it('navigates to LeaderBoard on button click', async () => {
    const spy = jest.spyOn(wrapper.vm, 'navigateTo');
    await wrapper.find('.nav-link-LeaderBoard').trigger('click');
    expect(spy).toHaveBeenCalledWith('/LeaderBoard');
  });
});
