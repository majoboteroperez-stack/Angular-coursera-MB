describe('Pruebas de Mi Aplicación Angular', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  // : 3 pruebas propias de Cypress
  it('1. Debe cargar el mapa de Mapbox', () => {
    cy.get('mgl-map').should('be.visible');
  });

  it('2. Debe mostrar el popover al hacer clic en el marcador', () => {
    cy.get('.marker').click();
    cy.contains('¡Hola! Soy un marcador interactivo').should('be.visible');
  });

  it('3. Debe registrar el clic en el contador de Redux', () => {
    cy.get('[appTracking]').first().click();
    cy.get('.contador-pantalla').should('not.be.empty');
  });
});
