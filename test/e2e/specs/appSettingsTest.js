/*
    this is a jest unit test for the AppSettings component
    it tests that the component renders correctly and that it makes the correct HTTP requests

    describe: function is used to group related tests
    it: function is used to define individual test cases
    expect: function is used to make assertions about the behavior of the code
    beforeEach and afterEach: functions are used to define setup and teardown steps that are run before and after each test - used to set up and reset a mock version of the axios HTTP client
*/
import { shallowMount } from '@vue/test-utils';
import axios from 'axios';
import AppSettings from '@/views/AppSettings.vue';

// use jest.mock to mock axios 
// because don't want to make actual HTTP requests in our tests 
// we just want to test that the correct requests are made 

jest.mock('axios');

describe('AppSettings.vue', () => {
  let wrapper;
  // this is the default data that we want to use for this unit test
  // override this data later to test other scenarios
  beforeEach(() => {
    // mock the response for the GET request to /api/settings
    axios.get.mockResolvedValue({ data: { playerSettings: 'multiplayer', timer: 15, difficulty: 'medium' } });
    axios.post.mockResolvedValue({});
    wrapper = shallowMount(AppSettings);
  });
  // reset the mock after each test
  afterEach(() => {
    jest.resetAllMocks();
  });
  // test cases go here:

  // this is a simple test to ensure that the component renders with the correct settings
  it('fetches settings on mount', () => {
    // check that axios.get was called exactly once
    expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/api/settings');
    // check that component correctly displays settings from the response
    // the settings should be displayed as: multiplayer, 15, medium
    expect(wrapper.vm.settings).toEqual({ playerSettings: 'multiplayer', timer: 15, difficulty: 'medium' });
  });

  // this test checks that the component updates the settings correctly
  it('updates settings on form submit', async () => {
    // set the data for the component manually
    await wrapper.find('form').trigger('submit.prevent');
    // check that axios.post was called exactly once
    expect(axios.post).toHaveBeenCalledWith('http://localhost:8080/api/settings', wrapper.vm.settings);
  });

  // this test checks that the component handles errors correctly
  it('handles error when fetching settings', async () => {
    // mock the response for the GET request to return an error
    axios.get.mockRejectedValue(new Error('API request failed'));
    await wrapper.vm.fetchSettings();
    // check that an error message is displayed or the component handles the error appropriately
    expect(wrapper.vm.errorMessage).toBe('Failed to fetch settings');
  });
  
  // this test checks that the component updates the settings correctly
  it('updates settings on form submit', async () => {
    // set the data for the component manually
    wrapper.setData({
      settings: {
        playerSettings: 'single player',
        timer: 10,
        difficulty: 'hard'
      }
    });
  
    // trigger the form submit event
    await wrapper.find('form').trigger('submit.prevent');
  
    // check that axios.post was called exactly once with the updated settings
    expect(axios.post).toHaveBeenCalledWith('http://localhost:8080/api/settings', {
      playerSettings: 'single player',
      timer: 10,
      difficulty: 'hard'
    });
  });
});