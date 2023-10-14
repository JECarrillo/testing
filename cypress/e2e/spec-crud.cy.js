beforeEach(() => {
  cy.visit('http://localhost:4200/crud')
});

describe('crud', () => {
  it('passes', () => {
    cy.get('.btn-primary').should('be.visible').click();

    cy.url().should('eq', 'http://localhost:4200/add');
  })

  it('should display button "Edit"', () => {
    cy.get('tbody tr').first().children().contains('Edit').click()
    cy.contains("Edit")
      .should('be.visible');
  })

  it('should display button "Delete"', () => {
    cy.get('tbody tr').first().find('button.btn.btn-outline-danger:contains("Eliminar")').click();
    cy.contains("Edit")
      .should('be.visible');

  })
  it('movimiento de cursor', () => {
    cy.get('table')
      .trigger('mousemove')
      .trigger('mousemove', { clientX: 100, clientY: 200 })
  })

  it('actualizacion con Crud de productos', () => {
  cy.contains( 'Tu Logo').click();
  cy.reload()
})
})

