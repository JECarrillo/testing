beforeEach(() => {
  cy.visit('http://localhost:4200')
});

describe('Login', () => {
  it('usuario y contrase;a correctas', () => {
    cy.get('input[name="username"]').type('oscar');
    cy.get('input[name="password"]').type('147741');
    cy.get('button[type="submit"]').click();
    cy.url().should('eq', 'http://localhost:4200/crud');
  })

  it('Muestra un mensaje de error con credenciales incorrectas', () => {
    cy.get('input[name="username"]').type('usuario-ejemplo');
    cy.get('input[name="password"]').type('contraseña-incorrecta'); 
    cy.get('button[type="submit"]').click();
    cy.contains('Unauthorized').should('be.visible'); 
  });

  it('vacio el campo de password', () => {
   
    cy.get('input[name="username"]').type('oscar'); 

    cy.get('button[type="submit"]').click();
    cy.contains('Bad Request').should('be.visible'); 
  });

  it('vacio el campo de username', () => {
    // vacio el campo de usuario
    cy.get('input[name="password"]').type('147741'); 

    cy.get('button[type="submit"]').click();
    cy.contains('Unauthorized').should('be.visible');
  });

it('input vacio ', () => {
  cy.get('button[type="submit"]').click();
  cy.contains('Bad Request').should('be.visible');
})

})
