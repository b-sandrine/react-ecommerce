import Navigation from "./Navigation";

describe('<Navigation>', () => {
    it('mounts', () => {
        cy.mount(<Navigation />)
    })

    it('a should have an active class', () => {
        cy.mount(<Navigation />)
        cy.get('a').contains('Home').should('have.class','active')
    })
})