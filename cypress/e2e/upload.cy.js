describe('Orange HRM upload', () => {
  it.only('passes', () => {
    cy.visit('/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[type='password']").type('admin123')
    cy.get("[type='submit']").click()
    cy.get("[href='/web/index.php/pim/viewMyDetails']").click()
    cy.get(".employee-image").click()
    cy.get('[type="file"]').selectFile("ping.png.jpg", {force: true})
    cy.get(".oxd-button").click()
  })
})