import { nominalTypeHack } from "prop-types"

//checks cypress is working
it('should', () => {
    expect(true).equal(true)
})


it('visits the app', () => {
    cy.visit('/')
})
//UI test starts here
it('types in a couple tasks todo', () => {
    cy.get('input').type('this is my first task')
    cy.get('form').submit()
    cy.get('input').type('this is my second task')
    cy.get('form').submit()
})

it('marks a task as complete', () => {
    cy.get('li').contains('first').click()
})

it('tests the Completed filter', () => {
    cy.get('button').contains('Completed').click()
    cy.get('li').should('have.have.css', 'textDecoration', 'line-through solid rgb(0, 0, 0)')
    cy.get('li').contains('second').should('not.exist');
})


it('tests the Active filter', () => {
    cy.get('button').contains('Active').click()
    cy.get('li').should('have.have.css', 'textDecoration', 'none solid rgb(0, 0, 0)')
    cy.get('li').contains('first').should('not.exist');
})

it('tests the All filter', () => {
    cy.get('button').contains('All').click()
    cy.get('li').should('have.length', 2)
})



