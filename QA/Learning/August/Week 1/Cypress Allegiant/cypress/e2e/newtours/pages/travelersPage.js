import { faker } from '@faker-js/faker';
let noofpassengers=0;
let passengertype="adults";
let flag=0,i=0;
const d = new Date();
let year = d.getFullYear()-20;

class TravelersPage {
    
    fillTravelerDetails(data,nA,nC,nI,nIL) {

        noofpassengers=nA+nC+nI+nIL
        for(i=0;i<noofpassengers;i++){
            
            
            cy.get(`[data-hook=\"travelers-form_${passengertype}_${i}_first-name\"]`).should('be.visible');
            let name=data.name;
            const [firstname,lastname]= name.split(' ')
            cy.get(`[data-hook=\"travelers-form_${passengertype}_${i}_first-name\"]`).type(faker.person.firstName());
            cy.get(`[data-hook=\"travelers-form_${passengertype}_${i}_last-name\"]`).type(faker.person.lastName());
            let date=data.Dob
            const [day, month, year2] = date.split(' ');
            cy.get(`[data-hook="travelers-form_${passengertype}_${i}_gender_${data.gender}"]`).click();
            cy.get(`[data-hook="travelers-form_${passengertype}_${i}_gender_${data.gender}"]`).click();
            cy.get(`[data-hook="travelers-form_${passengertype}_${i}_dob-month"]`).click();
            cy.get(`[data-hook="travelers-form_${passengertype}_${i}_dob-month_${month}"]`).click();
            cy.get(`[data-hook="travelers-form_${passengertype}_${i}_dob-day"]`).click();
            cy.get(`[data-hook=\"travelers-form_${passengertype}_${i}_dob-day_${day}\"]`).click();
            cy.get(`[data-hook="travelers-form_${passengertype}_${i}_dob-year"]`).click()
            cy.get(`[data-hook="travelers-form_${passengertype}_${i}_dob-year"]`).type(year);

            

            if(nA>1){ passengertype="adults";nA--; }
            else if(nC>0){ 
                passengertype="children"; if(nC==1){i=-1} 
                nC--;
                year=year+7
             }
            else if(nI>0)
                    
                    { passengertype="infantsInSeat"; if(nI==1){i=-1} ;
                         nI-- ;
                        year=year+13
                    }
            else {
                if(nIL==0){break;}
                
                if(nIL>0)
                {
                    passengertype="infantsInLap"; 
                    cy.get(`[data-hook="travelers-form_infantsInLap_0_designated-lap"]`).click()
                    cy.get(`[data-hook="travelers-form_infantsInLap_0_designated-lap_traveler-1"]`).click()  
                    if(nIL==1){i=-1} 
                    nIL--;
            
                }  
            }
           
        }
        cy.get('[data-hook="travelers-page_continue"]').click();
    }
}

export const travelersPage = new TravelersPage();
