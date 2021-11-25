// identificando para o VS CODE que vamos trabalhar com cypress
///   <reference types="cypress" /> 


describe('Work with basic elements', () => {
    before(() => {
        cy.visit('http://wcaquino.me/cypress/componentes.html') //sempre de inicar um teste ele vai vir aqui primeiro pelo before
    })

    beforeEach(() => {
        cy.reload()
    })

    it('using jquery selector', () => {
        
        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(3)')
        cy.get('table#tabelaUsuarios tbody >tr:eq(0)  td:nth-child(3) > input')
        cy.get('[onclick*=\'Francisco\']')
        cy.get("[onclick*='Francisco']")
        cy.get("#tabelaUsuarios td:contains('Doutorado'):eq(0) ~td:eq(3) > input")
        cy.get("#tabelaUsuarios tr:contains('Doutorado'):eq(0) td:eq(6) input")
    })

    it('using xpath', () => {
        cy.xpath("//input[contains(@onclick, 'Francisco')]")
        cy.xpath("//table[@id='tabelaUsuarios']//td[contains(.,'Francisco')]/..//input[@type='text']")
        cy.xpath("//td[contains(., 'Usuario A')]/following-sibling::td[contains(., 'Mestrado')]/..//input[@type='text']").type('funciona')
    })
})