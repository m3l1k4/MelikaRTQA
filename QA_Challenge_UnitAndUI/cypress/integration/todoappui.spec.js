it('should', () => {
    expect(true).equal(true)
})

it('should', ()=>{
    
    cy.visit('/')
    cy.get('input').type('Hello, World')
    cy.get('form').submit()
    cy.get('input').type('potato')
    cy.get('form').submit()

    cy.get('li').contains('Hello').click()
    cy.get('button').contains('Active').click()
    cy.get('button').contains('All').click()
    cy.get('button').contains('Completed').click()
})