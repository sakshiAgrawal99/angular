describe('nv-global', () => {
  beforeEach(() => cy.visit('/iframe.html?id=checkboxcomponent--primary'));
  it('should render the component', () => {
    cy.get('frontend-checkbox').should('exist');
  });
});