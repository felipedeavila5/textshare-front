describe("Save Text", () => {

    const fake_text = "My Text"

    it("write text", () => {
        cy.visit("/");
        cy.get('[data-test=text-area-input]').type(fake_text)
        cy.get('[data-test=links-to-share-input]').invoke('val').then(url => {
            cy.visit(url)
            cy.get('[data-test=text-area-input]').should('have.value', fake_text);
        })
    });
});
