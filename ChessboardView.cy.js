/* eslint-disable no-undef */
import WhiteSideChessboardView from './WhiteSideChessboardView.vue'

describe('<ChessboardView />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.viewport(400, 450);
    cy.mount(WhiteSideChessboardView);
  })
})