context('Search Video', () => {
  beforeEach(() => {
    cy.server();
    cy.route('/api/search-videos/*', 'fixture:search-result').as('search');
  });

  it('should search video', () => {
    cy.visit('/search-video');
    cy.findByTestId('searchInput').should('exist');
    cy.findByTestId('searchInput')
      .type('test')
      .should('have.value', 'test');
    cy.get('.ant-btn').click();
    cy.findByTestId('searchResults').should('exist')
  });
});
