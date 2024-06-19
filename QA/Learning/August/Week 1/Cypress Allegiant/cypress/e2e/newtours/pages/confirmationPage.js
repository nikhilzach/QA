class ConfirmationPage {
    verifySuccess() {
        cy.get('[data-hook="confirmation-page_title"]').should('be.visible');
    }
}

export const confirmationPage = new ConfirmationPage();
