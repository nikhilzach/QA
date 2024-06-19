class PaymentPage {
    fillPaymentDetails(data) {
        cy.wait(16000);
        cy.get('[data-hook="payment-page_ice-popup_close"]').click();
        cy.get('#card-number').type(data.card.no);
        cy.get('[data-hook="payment-page_card-expiration-month"]').click();
        cy.contains(data.card.expiryMonth).click();
        cy.get('[data-hook="payment-page_card-expiration-year"]').click();
        cy.get(`[data-hook="payment-page_card-expiration-year_${data.card.expiryYear}"]`).click();
        cy.get('#card-cvv').type(data.card.cvv);
        cy.get('#address-line-1').type(data.address.address_line);
        cy.get('#address-line-2').type(data.address.address_line2);
        cy.get('#city').type(data.address.city);
        cy.get('[data-hook="payment-page_state"]').click();
        cy.get(`[data-hook="payment-page_state_${data.address.state}"]`).click();
        cy.get('#zip-code').type(data.address.zip);
        cy.get('#phone-number').type(data.phone);
        cy.wait(1000);
        cy.get('[data-hook="payment-page_email-address"]').type(data.email);
        cy.get('[data-hook="payment_terms-and-conditions-checkbox_label"]').first().click();
        cy.get('[data-hook="payment-page_continue"]').click();
        cy.wait(10000);
    }
}

export const paymentPage = new PaymentPage();
