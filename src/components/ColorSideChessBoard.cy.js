/* eslint-disable no-undef */
import ColorSideChessBoard from './ColorSideChessBoard.vue'

describe('<ColorSideChessBoard />', () => {
  it('renders', () => {
    cy.viewport(400, 500);
    // see: https://on.cypress.io/mounting-vue
    cy.mount(ColorSideChessBoard);
    cy.wait(100);
    cy.wait(1000);
  })
})