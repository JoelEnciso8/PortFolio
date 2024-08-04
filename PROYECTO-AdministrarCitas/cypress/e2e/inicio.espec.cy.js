describe('Carga la pagina principal', () => {
    it('carga la pagina principal', () => {
      // verifica que la url que se ingreso cumpla para la revision
      cy.visit('http://127.0.0.1:5500/Aprendizaje_Javascript/Curso_Completo_JavasScript/26-PROYECTO-AdministrarCitas/index.html');

         // Verifica el elemento y su texto
    cy.contains('[data-cy="h1-cy"]','Seguimiento Pacientes');

    cy.contains('[data-cy="span-cy"]','Veterinaria');

  
    })
})