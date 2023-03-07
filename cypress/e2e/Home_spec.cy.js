describe('Home spec', () => {
  beforeEach(()=>{
    cy.intercept('GET','http://localhost:3001/api/v1/urls', {fixture: 'urls.json'})
    cy.visit('http://localhost:3000')
  })
  it('When a user visits the page, they can view the page title and the existing shortened URLs', () => {
    cy.get('h1').contains('URL Shortener')
    cy.get('section').children().should('have.length',3)
  })

  it('When a user visits the page, they can view the Form with the proper inputs', ()=>{
    cy.get('form').find('.title-input')
    cy.get('form').find('.url-input')
    cy.get('form').find('.title-input')
    cy.get('form').find('.url-input')
  })

  it('When a user fills out the form, the information is reflected in the input fields', ()=>{
    cy.get('.title-input').type('hello')
    cy.get('.title-input').should('have.value','hello')
    cy.get('.url-input').type('https://media.tenor.com/Dhrbmr_t3tEAAAAd/forrest-gump-hello.gif')
    cy.get('.url-input').should('have.value','https://media.tenor.com/Dhrbmr_t3tEAAAAd/forrest-gump-hello.gif')
  })

  it('When a user fills out and submits the form, the new shortened URL is rendered', () => {
    cy.get('.title-input').type('hello')
    cy.get('.url-input').type('https://media.tenor.com/Dhrbmr_t3tEAAAAd/forrest-gump-hello.gif')
    cy.get('button').click()
    cy.get('section').children().should('have.length',4)
    cy.get('section').contains('hello')
  })
})