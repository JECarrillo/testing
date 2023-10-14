beforeEach(() => {
  cy.visit('http://localhost:4200/add')
});

describe('Modal', () => {

  it('Agregar producto',() =>{
    cy.get('input[placeholder="Ingrese Nombre"]').type('shushi')
    cy.get('input[placeholder="Ingrese Descripcion"]').type('descripcion**')
    cy.get('input[placeholder="Ingrese Precio"]').type('125')
    cy.get('button[type="submit"]').click();
    cy.url().should('eq', 'http://localhost:4200/crud');
  
    })
    it('Agregar producto sin llenar input con el nombre',() =>{
      
      cy.get('input[placeholder="Ingrese Descripcion"]').type('descripcion**')
      cy.get('input[placeholder="Ingrese Precio"]').type('125')
      cy.get('button[type="submit"]').should('be.disabled');
      
    
      })

      it('Agregar producto sin llenar input con la descripcion',() =>{
      
        cy.get('input[placeholder="Ingrese Nombre"]').type('Nachos')
        cy.get('input[placeholder="Ingrese Precio"]').type('125')
        cy.get('button[type="submit"]').should('be.disabled');
        
        })

        it('Agregar producto sin llenar input con el precio',() =>{
          cy.get('input[placeholder="Ingrese Nombre"]').type('Nachos')
          cy.get('input[placeholder="Ingrese Descripcion"]').type('descripcion**')
          cy.get('button[type="submit"]').should('be.disabled');
          
          })

          it('Boton cancelar',() =>{
            cy.get('button[type="button"]').click();
            cy.url().should('eq', 'http://localhost:4200/crud');

          })

          it('llenar campos y oprimir Boton cancelar',() =>{
          cy.get('input[placeholder="Ingrese Nombre"]').type('shushi')
          cy.get('input[placeholder="Ingrese Descripcion"]').type('descripcion**')
          cy.get('input[placeholder="Ingrese Precio"]').type('125')
          cy.get('button[type="button"]').click();
          cy.url().should('eq', 'http://localhost:4200/crud');
          })

          it('minimizes the browser window', () => {
            
            cy.viewport(800, 600);
            cy.wait(2000);
            cy.viewport(1920, 1080);
          });
          


     })