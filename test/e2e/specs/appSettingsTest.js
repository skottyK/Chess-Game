import { shallowMount } from '@vue/test-utils';
import axios from 'axios';
import AppSettings from '@/views/AppSettings.vue';

// Mocking axios to prevent real HTTP requests during testing
jest.mock('axios');

/**
 * @fileoverview Unit tests for the AppSettings component.
 * Tests include checking if the component renders correctly and makes the correct HTTP requests.
 * Utilizes Jest's global functions:
 * - describe: To group related tests.
 * - it: To define individual test cases.
 * - expect: To make assertions about the code's behavior.
 * - beforeEach and afterEach: To define setup and teardown steps before and after each test.
 * 
 * Mocks axios HTTP client to avoid actual network requests and test expected request behaviors.
 */
describe('AppSettings.vue', () => {
  let wrapper;

  /**
   * Setup before each test case. Initializes the component with default mock data and mounts it.
   */
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: { playerSettings: 'multiplayer', timer: 15, difficulty: 'medium' } });
    axios.post.mockResolvedValue({});
    wrapper = shallowMount(AppSettings);
  });

  /**
   * Teardown after each test case. Resets all mocks to ensure clean state.
   */
  afterEach(() => {
    jest.resetAllMocks();
  });

  /**
   * Test to verify that the component fetches and renders settings correctly upon mounting.
   * Asserts that axios.get was called with the correct endpoint and that the component's state reflects the fetched data.
   */
  it('fetches settings on mount', () => {
    expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/api/settings');
    expect(wrapper.vm.settings).toEqual({ playerSettings: 'multiplayer', timer: 15, difficulty: 'medium' });
  });

  /**
   * Test to verify that the component updates settings correctly upon form submission.
   * Asserts that axios.post is called with the correct endpoint and data.
   */
  it('updates settings on form submit', async () => {
    await wrapper.find('form').trigger('submit.prevent');
    expect(axios.post).toHaveBeenCalledWith('http://localhost:8080/api/settings', wrapper.vm.settings);
  });

  /**
   * Test to verify that the component correctly handles errors when fetching settings.
   * Asserts that an error is handled and displayed appropriately within the component.
   */
  it('handles error when fetching settings', async () => {
    // Mock axios.get to return an error
    axios.get.mockRejectedValue(new Error('API request failed'));
    await wrapper.vm.fetchSettings();
    expect(wrapper.vm.errorMessage).toBe('Failed to fetch settings');
  });

  /**
   * Additional test to verify that the component updates settings correctly upon form submission with different data.
   * Asserts that axios.post is called with the updated settings.
   */
  it('updates settings on form submit with different data', async () => {
    wrapper.setData({
      settings: {
        playerSettings: 'single player',
        timer: 10,
        difficulty: 'hard'
      }
    });

    // Trigger form submission and check if axios.post was called with the updated settings data that was set above
    await wrapper.find('form').trigger('submit.prevent');
    expect(axios.post).toHaveBeenCalledWith('http://localhost:8080/api/settings', {
      playerSettings: 'single player',
      timer: 10,
      difficulty: 'hard'
    });
  });
});
