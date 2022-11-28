import Navigation from "./Navigation";

describe('<Navigation>', () => {
    it('mounts', () => {
        cy.mount(<Navigation />)
    })

    it('a should have an active class', () => {
        cy.mount(<Navigation />)
        cy.get('a').contains('Home').should('have.class','active')
    })

    it('a tag which is clicked should contain active class',() => {
        cy.mount(<Navigation />, {
            routerProps: {
                initialEntries: ['/login'],
            },
        });
        cy.get('a').contains('login').should('have.class','active');
    })
})