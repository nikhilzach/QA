class AncillariesPage {
    skipAncillaries(noofpassengers) {
        let temp=noofpassengers;
        function handleSeats(noofpassengers, temp, index = 0) {
            if (index >= noofpassengers || index >= temp) return;
    
            cy.get('button [data-hook*="select-economy-seat"]').eq(index).then(($el) => {
                const datahook = $el.attr('data-hook');
                const lastChar = datahook.slice(-1);
                const nextChar = String.fromCharCode(lastChar.charCodeAt(0) + 1);
                const updatedDatahook = datahook.slice(0, -1) + nextChar;
        
                cy.get(`[data-hook="${updatedDatahook}"]`, { timeout: 3000 })
                  .then(($element) => {
                    const isNotVisible = !$element.is(":visible");
                    
                    if(isNotVisible)
                    {
                        handleSeats(noofpassengers, temp, index + 1);
                    }
                    else
                    {
                        if(index==0)
                        cy.contains(`T ${index+1}`).click()
                        else
                        cy.contains(`T ${index}`).click()
                        cy.get('button [data-hook*="select-economy-seat"]').eq(index).click()
                        index=index+2;
                        cy.contains(`T ${temp}`).click()
                        cy.get(`[data-hook="${updatedDatahook}"]`).click()
                        temp--
                        handleSeats(noofpassengers, temp, index);
                    }

                  })
                 
            });
        }
        
        handleSeats(noofpassengers, temp);
        cy.contains("Continue").click();
        temp=noofpassengers;
        handleSeats(noofpassengers, temp);
        cy.contains("Continue").click()
        cy.get('[data-hook="ancillaries-page_continue-popup"]').click();
        cy.get('[data-hook="ancillaries-continue-popup_button_continue"]').click();
        cy.wait(4000)
        cy.contains("No thanks").click()
        cy.wait(4000)

    

    }
}

export const ancillariesPage = new AncillariesPage();
