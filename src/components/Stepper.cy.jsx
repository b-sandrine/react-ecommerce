import Stepper from './Stepper'

describe('<Stepper>', () => {
  it('mounts', () => {
    cy.mount(<Stepper />)
  })
  it('stepper should be set to zero', () => {
    cy.mount(<Stepper />)
    cy.get('span').should('have.text','0')
  })
  // selecting a specific span using the data-cy attribute
  it('stepper should set initial value to zero', () => {
    cy.mount(<Stepper />)
    cy.get('[data-cy=counter]').should('have.text','0');
  })

  it('stepper should set the initial to count',() => {
    cy.mount(<Stepper initial="100" />);
    cy.get('span').should('have.text','100');
  })

  it('when + clicked the counter must be incremented', () => {
    cy.mount(<Stepper initial={200} />)
    cy.get('[data-cy=increment]').click()
    cy.get('[data-cy=counter]').should('have.text','201')
  })

  it('when - clicked the counter must be decremented', () => {
    cy.mount(<Stepper/>)
    cy.get('[data-cy=decrement]').click()
    cy.get('[data-cy=counter]').should('have.text','-1'); 
  })
})