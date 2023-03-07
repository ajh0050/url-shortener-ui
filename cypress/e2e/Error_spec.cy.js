describe('Error spec', () => {
  it('the error message renders when a 500 res happens', () => {
    cy.intercept('GET','http://localhost:3001/api/v1/urls', {statusCode: 500})
    cy.visit('http://localhost:3000')
  })
  it('the error message renders', () => {
    cy.get('.error-message').contains('Failed to get all the URLs')
  })
})