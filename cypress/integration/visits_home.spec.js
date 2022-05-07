// https://docs.cypress.io/api/introduction/api.html

describe("Visits Pages", () => {
  it("visit home page", () => {
    cy.visit("/");
    cy.get('[data-test=text-area-header]').contains("TextShare")
    cy.get('[data-test=text-area-title]').contains("Enter the content you want to share:")
    cy.get('[data-test=links-to-share-header]').contains("Share your Text:")
  });

  it("visit invalid page", () => {
    cy.visit("/text/invalid");
    cy.get('[data-test="not-found-message"]').contains("Sorry, we didn't find the content you requested")
    cy.get('[data-test="not-found-link"]').click()
    cy.url().should('include', '/')
  });

});
