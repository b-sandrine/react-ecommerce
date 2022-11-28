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
    cy.get('data-cy.counter').should('have.text','0');
  })
})