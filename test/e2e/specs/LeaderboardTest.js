import { shallowMount } from '@vue/test-utils';
import axios from 'axios';
import LeaderBoard from '@/views/LeaderBoard.vue';

jest.mock('axios');

/**
 * @fileoverview Unit tests for the LeaderBoard component.
 * Tests include checking if the component renders correctly and if it makes the correct HTTP requests.
 */
describe('LeaderBoard.vue', () => {
  let wrapper;

  /**
   * Setup before each test case. Initializes the component with mock data and mounts it.
   */
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: [{ player: 'Player1', wins: 20, losses: 5, draws: 3 }] });
    wrapper = shallowMount(LeaderBoard);
  });

  /**
   * Teardown after each test case. Resets all mocks to ensure clean state.
   */
  afterEach(() => {
    jest.resetAllMocks();
  });

  /**
   * Test to verify that the LeaderBoard component renders successfully.
   * Asserts that the component instance is created and exists.
   */
  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  /**
   * Test to verify that leaderboard data is fetched upon component creation.
   * Asserts that axios.get was called with the correct endpoint and that the component's state reflects the fetched data.
   */
  it('fetches leaderboard data on creation', () => {
    expect(axios.get).toHaveBeenCalledWith('/api/leaderboard');
    expect(wrapper.vm.leaderboardData).toEqual([{ player: 'Player1', wins: 20, losses: 5, draws: 3 }]);
  });

});
