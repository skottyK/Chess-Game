import { shallowMount } from '@vue/test-utils';
import axios from 'axios';
import MyAccount from '@/views/MyAccount.vue';

// Mock the axios module to prevent real HTTP requests during testing
jest.mock('axios');

/**
 * @fileoverview Test suite for the MyAccount component.
 * Tests include checking the rendering of the component, 
 * the fetching of account data, error handling, and navigation.
 */
describe('MyAccount.vue', () => {
  let wrapper;

  /**
   * Before each test, a mock response is set up for axios,
   * and the MyAccount component is mounted.
   */
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: { username: 'testUser', email: 'test@example.com' } });
    wrapper = shallowMount(MyAccount);
  });

  /**
   * After each test, all mocks are reset to ensure
   * clean state for the next tests.
   */
  afterEach(() => {
    jest.resetAllMocks();
  });

  /**
   * Test to verify that account data is fetched upon component mount.
   * It checks if axios.get was called with the correct URL and 
   * if the component's state is updated with the fetched data.
   */
  it('fetches account data on mount', () => {
    expect(axios.get).toHaveBeenCalledWith('/path/to/account/data/api'); // Replace with actual API endpoint
    expect(wrapper.vm.accountData).toEqual({ username: 'testUser', email: 'test@example.com' });
  });

  /**
   * Test to verify that the loading state is displayed correctly.
   * It manually sets the loading state and then checks if the component
   * renders the loading message.
   */
  it('displays loading state correctly', () => {
    wrapper.setData({ loading: true });
    expect(wrapper.text()).toContain('Loading account details...');
  });

  /**
   * Test to verify that account data is displayed correctly.
   * It manually sets the account data and then checks if the component
   * renders the data correctly.
   */
  it('displays account data when fetched', () => {
    wrapper.setData({ accountData: { username: 'testUser', email: 'test@example.com' } });
    expect(wrapper.text()).toContain('testUser');
    expect(wrapper.text()).toContain('test@example.com');
  });

  /**
   * Test to verify that errors are handled correctly.
   * It mocks an axios error response and then checks if the component
   * updates its error state and displays the error message.
   */
  it('handles error when fetching account data', async () => {
    axios.get.mockRejectedValue(new Error('API request failed'));
    await wrapper.vm.fetchAccountData();
    expect(wrapper.vm.error).toBeTruthy();
    expect(wrapper.text()).toContain('Error loading account');
  });

  /**
   * Test to verify that navigation to the leaderboard works correctly.
   * It mocks a click on the navigation button and then checks if
   * the router's push method was called with the correct path.
   */
  it('navigates to the leaderboard on button click', async () => {
    const mockRouter = { push: jest.fn() };
    // Mount the component with the mock router to enable testing of navigation
    wrapper = shallowMount(MyAccount, {
      mocks: {
        $router: mockRouter
      }
    });
    // Trigger click on the navigation button and check if the router's push method was called with the correct path
    await wrapper.find('button').trigger('click');
    expect(mockRouter.push).toHaveBeenCalledWith('/LeaderBoard');
  });

});
