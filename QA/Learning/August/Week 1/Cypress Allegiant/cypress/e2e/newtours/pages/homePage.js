const curr_date = new Date();
const dayInt = curr_date.getDate();
        
class HomePage {

    find_date(day) {
            console.log("Day inside function:"+day)
            const selector = `[data-hook="flight-search-date-picker_calendar-0_select-day-${day}"]`;
            return cy.get(selector).then(element => {
                if (!element.is(':disabled')) {
                    cy.get(selector).click()
                } else {
                    return this.find_date(day + 1);
                }
            });
        };
    
    
    
    visit() {
        cy.visit("https://www-qatnexusviva.okd.allegiantair.com");
    }

    closeOverlays() {
        cy.get("[data-hook='overlay-merchandise_ice-pop_close']").click();
        cy.get('#onetrust-close-btn-container > .onetrust-close-btn-handler').click();
    }
    selecttrip(triptype){
        cy.get(`[data-hook=\"flight-search-trip-type_${triptype}\"]`)
    }

    selectDeparture(departure) {
        cy.contains("Departure, airport").click();
        cy.contains(departure).click();
    }

    selectDestination(destination) {
        cy.contains("Destination, airport").click();
        cy.contains(destination).click();
    }

    selectDates() {
        cy.get("[data-hook='flight-search-date-picker_expand-start-date']").click();
    cy.wait(1000);
    
    this.find_date(dayInt)
    cy.wait(1000);
    this.find_date(dayInt+10)
    }

    selectPassengers(nA,nC,nI,nIL){
        cy.get("[data-hook=\"flight-search-travelers-expando-button\"]").click()
        for(let i=1;i<nA;i++)
            {cy.get("[data-hook=\"flight-search-adults_increment\"]").click()}
        for(let i=0;i<nC;i++)
            cy.get("[data-hook=\"flight-search-children_increment\"]").click()
        for(let i=0;i<nI;i++)
            cy.get("[data-hook=\"flight-search-infants-seat_increment\"]").click()
        for(let i=0;i<nIL;i++)
            cy.get("[data-hook=\"flight-search-infants-lap_increment\"]").click()
        
    }
    searchFlights() {
        cy.get("[data-hook='flight-search-submit']").click();
        cy.wait(7000);
        cy.get("[data-hook=\"flights-page_continue\"]").click();
    }
}

export const homePage = new HomePage();
