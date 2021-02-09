it('should', () => {
    expect(true).equal(true)
})

it('should', ()=>{
    
    cy.visit('/')
    // cy.get('.App-link')//select by class
    // cy.contains('Learn React')
    cy.get('input').type('Hello, World')
    cy.get('form').submit()
})