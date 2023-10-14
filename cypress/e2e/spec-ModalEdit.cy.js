beforeEach(() => {
  cy.visit('http://localhost:4200/crud')
});


describe('Modal Edit', () => {
it('Editar dejando vacio el nombre del producto', () => {
  cy.get('tbody tr').first().children().contains('Edit').click()
  cy.contains("Edit")
    .should('be.visible');
    cy.get('input[placeholder="Ingrese Nombre"]').clear();
    cy.get('button[type="submit"]').should('be.disabled');
})

it('Editar dejando vacio Description', () => {
  cy.get('tbody tr').first().children().contains('Edit').click()
  cy.contains("Edit")
    .should('be.visible');
    cy.get('input[placeholder="Ingrese Descripcion"]').clear();
    cy.get('button[type="submit"]').should('be.disabled');
})

it('Editar dejando vacio Precio', () => {
  cy.get('tbody tr').first().children().contains('Edit').click()
  cy.contains("Edit")
    .should('be.visible');
    cy.get('input[placeholder="Ingrese Precio"]').clear();
    cy.get('button[type="submit"]').should('be.disabled');
})

it('Editar campos',() =>{
  cy.get('tbody tr').first().children().contains('Edit').click()
  cy.contains("Edit")
    .should('be.visible');
  cy.get('input[placeholder="Ingrese Nombre"]').clear();
  cy.get('input[placeholder="Ingrese Nombre"]').type('shushi')
  cy.get('input[placeholder="Ingrese Descripcion"]').clear();
  cy.get('input[placeholder="Ingrese Descripcion"]').type('suhsi de cangrejo')
  cy.get('input[placeholder="Ingrese Precio"]').clear();
  cy.get('input[placeholder="Ingrese Precio"]').type('125')
  cy.get('button[type="Submit"]').click();
  cy.url().should('eq', 'http://localhost:4200/crud');
  })

  it('Editar campo de nombre',() =>{
    cy.get('tbody tr').first().children().contains('Edit').click()
    cy.contains("Edit")
      .should('be.visible');
    cy.get('input[placeholder="Ingrese Nombre"]').clear();
    cy.get('input[placeholder="Ingrese Nombre"]').type('baguett de pollo')
    cy.get('button[type="Submit"]').click();
    cy.url().should('eq', 'http://localhost:4200/crud');

  })
  it('Editar campos description',() =>{
    cy.get('tbody tr').first().children().contains('Edit').click()
    cy.contains("Edit")
      .should('be.visible');
    cy.get('input[placeholder="Ingrese Descripcion"]').clear();
    cy.get('input[placeholder="Ingrese Descripcion"]').type('baguett de pollo acompa;ado de papas a la francesa y un aderezo de la casa')
    cy.get('button[type="Submit"]').click();
    cy.url().should('eq', 'http://localhost:4200/crud');

  })

  it('Editar campos precio',() =>{
    cy.get('tbody tr').first().children().contains('Edit').click()
    cy.contains("Edit")
      .should('be.visible');
    cy.get('input[placeholder="Ingrese Precio"]').clear();
    cy.get('input[placeholder="Ingrese Precio"]').type('150')
    cy.get('button[type="Submit"]').click();
    cy.url().should('eq', 'http://localhost:4200/crud');

  })

  it('Editar campo de nombre y boton cancelar',() =>{
    cy.get('tbody tr').first().children().contains('Edit').click()
    cy.contains("Edit")
      .should('be.visible');
    cy.get('input[placeholder="Ingrese Nombre"]').clear();
    cy.get('input[placeholder="Ingrese Nombre"]').type('baguett de pollo')
    cy.get('button[type="Button"]').click();
    cy.url().should('eq', 'http://localhost:4200/crud');
})

it('Editar campos description',() =>{
  cy.get('tbody tr').first().children().contains('Edit').click()
  cy.contains("Edit")
    .should('be.visible');
  cy.get('input[placeholder="Ingrese Descripcion"]').clear();
  cy.get('input[placeholder="Ingrese Descripcion"]').type('baguett de pollo acompa;ado de papas a la francesa y un aderezo de la casa')
  cy.get('button[type="Button"]').click();
  cy.url().should('eq', 'http://localhost:4200/crud');
})

it('Editar campos precio',() =>{
    cy.get('tbody tr').first().children().contains('Edit').click()
    cy.contains("Edit")
      .should('be.visible');
    cy.get('input[placeholder="Ingrese Precio"]').clear();
    cy.get('input[placeholder="Ingrese Precio"]').type('150')
    cy.get('button[type="Button"]').click();
    cy.url().should('eq', 'http://localhost:4200/crud');

  })




})