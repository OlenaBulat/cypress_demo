describe('t3kit demo test on Cypress', () => {

    it('Navigate to t3kit site', () => {
        cy.visit('http://demo.t3kit.com/')
    })
    it('Login test', ()=>{
        cy.get('.uid-9 > a').click()
        cy.get('input[name=user]').type("admin")
        cy.get('input[name=pass]').type("admin1234")
        cy.get('.btn > a').click()
        cy.get('.btn > a').click()

        cy.get('.alert').should('have.class','alert-info');
    })
    

})