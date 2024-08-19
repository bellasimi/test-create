const { THREE_PATIENTS } = require('../../fixtures/patients')

describe('환자목록 페이지', () => {
  it('환자가 10명이하면 페이지네이션을 표시하지 않음', () => {
    cy.visit('/patients')
    cy.intercept('/patients', THREE_PATIENTS).as('getPatients')
    cy.wait('@getPatients')
    cy.getByCy('pagination').should('not.exist')
  })
})
