import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import LandingPage from '@/views/LandingPage.vue';

// Create a local instance of Vue for testing
const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe('LandingPage.vue', () => {
  let wrapper;

  beforeEach(() => {
    // Mount the component before each test
    wrapper = shallowMount(LandingPage, {
      localVue,
      router
    });
  });

  // Test to check if the component renders
  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // Test to check if navigation to ChessBoard works
  it('navigates to ChessBoard on button click', async () => {
    const spy = jest.spyOn(wrapper.vm, 'navigateTo');
    await wrapper.find('.nav-link-homePage').trigger('click');
    expect(spy).toHaveBeenCalledWith('/ChessBoard');
  });

  // Test to check if navigation to LeaderBoard works
  it('navigates to LeaderBoard on button click', async () => {
    // spy on the `navigateTo` method of the component
    const spy = jest.spyOn(wrapper.vm, 'navigateTo');
    
    await wrapper.find('.nav-link-LeaderBoard').trigger('click');
    expect(spy).toHaveBeenCalledWith('/LeaderBoard');
  });
});
