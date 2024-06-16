import {Given,When, Then,And, Before, After} from "cypress-cucumber-preprocessor/steps";
// import { LoginPage } from "./pages/page";

// const loginpage= new LoginPage


Given("open newtours application", ()=>{
    cy.visit("https://www-qatnexusviva.okd.allegiantair.com/");
    cy.get('[data-hook="overlay-merchandise_ice-pop_close"]').click();
    cy.visit("https://www-qatnexusviva.okd.allegiantair.com/");
    cy.get("#react-select-origin-option-1-4").click();
    cy.get("div.css-3kgmf9-placeholder").click();
    cy.get("#react-select-destination-option-1-4").click();
    cy.get("div > div.ant-row-flex > div:nth-of-type(1) svg").click();
    cy.get("div > div > div > div > div:nth-of-type(2) button:nth-of-type(6) > div").click();
    cy.get("div > div > div > div > div:nth-of-type(2) button:nth-of-type(9) > div").click();
    cy.get("div.IndexPage__BackgroundContainer-sc-1ygrt2-0 div.Expando__Label-sc-1am1gqe-0 > button").click();
    cy.get("div.Expando__CollapseWrapper-sc-1am1gqe-2 > div > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) button.QuantitySelector__IncrementButton-gxhe5k-2 path:nth-of-type(1)").dblclick();
    cy.get("xpath///*[@id=\"main\"]/div[2]/div[2]/form/div/div[3]/div/button").click();
    cy.location("href").should("eq", "https://www-qatnexusviva.okd.allegiantair.com/booking/flights?tt=ROUNDTRIP&o=AVL&d=SFB&ta=3&tc=0&tis=0&til=0&ds=2024-08-02&de=2024-09-09&c=1&h=1");
    cy.get("div.dZSFlD span").click();
    cy.get("div.dZSFlD button").click();
    cy.get("#adults\\.0\\.first-name").click();
    cy.get("#adults\\.0\\.first-name").type("Nikhil");
    cy.get("#adults\\.0\\.middle-name").click();
    cy.get("#adults\\.0\\.middle-name").type("Za");
    cy.get("#adults\\.0\\.middle-name").type("");
    cy.get("#adults\\.0\\.last-name").click();
    cy.get("#adults\\.0\\.last-name").type("Z");
    cy.get("#adults\\.0\\.last-name").type("Za");
    cy.get("#adults\\.0\\.last-name").type("Zachariah");
    cy.get("form > div:nth-of-type(1) div:nth-of-type(4) div.css-1hwfws3").click();
    cy.get("#react-select-adults\\.0\\.suffix-option-2").click();
    cy.get("form > div:nth-of-type(1) label:nth-of-type(1) circle").click();
    cy.get("form > div:nth-of-type(1) div:nth-of-type(3) > div > div > div").click();
    cy.get("#react-select-adults\\.0\\.dob-month-option-2").click();
    cy.get("form > div:nth-of-type(1) div:nth-of-type(2) > fieldset > div.ant-row > div:nth-of-type(2) div.css-1hwfws3").click();
    cy.get("#react-select-adults\\.0\\.dob-day-option-27").click();
    cy.get("#adults\\.0\\.dob-year").click();
    cy.get("#adults\\.0\\.dob-year").type("2002");
    cy.get("form > div:nth-of-type(1) div:nth-of-type(8) div.ant-col-xs-8 > div:nth-of-type(2) > div > div > div").click();
    cy.get("#react-select-adults\\.0\\.primary-phone-prefix-option-99").click();
    cy.get("form > div:nth-of-type(1) div:nth-of-type(8) div.ant-row").click();
    cy.get("#adults\\.0\\.primary-phone-number").type("75777777777777");
    cy.get("#adults\\.0\\.primary-phone-number").type("75777777777");
    cy.get("#adults\\.0\\.email").click();
    cy.get("#adults\\.0\\.email").type("nikhil@");
    cy.get("#adults\\.0\\.email").type("nikhil@gmail.com");
    cy.get("#adults\\.1\\.first-name").click();
    cy.get("#adults\\.1\\.first-name").type("1");
    cy.get("#adults\\.1\\.middle-name").click();
    cy.get("div.Layout__StyledMain-q3bo0m-6").click();
    cy.get("#adults\\.1\\.first-name").type("N");
    cy.get("#adults\\.1\\.first-name").type("Nikhil");
    cy.get("#adults\\.1\\.last-name").click();
    cy.get("#adults\\.1\\.last-name").type("123");
    cy.get("div:nth-of-type(3) div:nth-of-type(4) div.css-1hwfws3 > div").click();
    cy.get("div:nth-of-type(3) > fieldset > div:nth-of-type(4)").click();
    cy.get("#adults\\.1\\.last-name").type("hehe");
    cy.get("div:nth-of-type(3) div:nth-of-type(4) div.css-1hwfws3").click();
    cy.get("#react-select-adults\\.1\\.suffix-option-1").click();
    cy.get("div:nth-of-type(3) label:nth-of-type(1) circle").click();
    cy.get("div:nth-of-type(3) div:nth-of-type(2) > fieldset > div.ant-row > div:nth-of-type(1) svg").click();
    cy.get("#react-select-adults\\.1\\.dob-month-option-2").click();
    cy.get("div:nth-of-type(3) div.ant-row > div:nth-of-type(2) > div:nth-of-type(2) > div > div > div").click();
    cy.get("#react-select-adults\\.1\\.dob-day-option-1").click();
    cy.get("#adults\\.1\\.dob-year").click();
    cy.get("#adults\\.1\\.dob-year").type("2000");
    cy.get("#adults\\.1\\.primary-phone-number").click();
    cy.get("div:nth-of-type(3) div:nth-of-type(8) div.css-1hwfws3").click();
    cy.get("#adults\\.1\\.primary-phone-prefix").type("+91");
    cy.get("#react-select-adults\\.1\\.primary-phone-prefix-option-99").click();
    cy.get("#adults\\.1\\.primary-phone-number").click();
    cy.get("#adults\\.1\\.primary-phone-number").type("9879879879");
    cy.get("#adults\\.1\\.email").click();
    cy.get("#adults\\.1\\.email").type("j@");
    cy.get("#adults\\.1\\.email").type("j@gmail.com");
    cy.get("#adults\\.2\\.first-name").click();
    cy.get("#adults\\.2\\.first-name").type("nikhil");
    cy.get("#adults\\.2\\.last-name").click();
    cy.get("#adults\\.2\\.last-name").type("zav");
    cy.get("div:nth-of-type(5) div:nth-of-type(4) div.css-1hwfws3").click();
    cy.get("#react-select-adults\\.2\\.suffix-option-3").click();
    cy.get("div:nth-of-type(5) label:nth-of-type(1) > span > span").click();
    cy.get("div:nth-of-type(5) div:nth-of-type(3) > div > div > div").click();
    cy.get("#react-select-adults\\.2\\.dob-month-option-2").click();
    cy.get("div.css-3kgmf9-placeholder").click();
    cy.get("#react-select-adults\\.2\\.dob-day-option-1").click();
    cy.get("#adults\\.2\\.dob-year").click();
    cy.get("#adults\\.2\\.dob-year").type("2001");
    cy.get("body").click();
    cy.get("#adults\\.2\\.primary-phone-prefix").type("+91");
    cy.get("#react-select-adults\\.2\\.primary-phone-prefix-option-99").click();
    cy.get("#adults\\.2\\.primary-phone-number").click();
    cy.get("#adults\\.2\\.primary-phone-number").type("2222222222");
    cy.get("#adults\\.2\\.email").click();
    cy.get("#adults\\.2\\.email").type("l@");
    cy.get("#adults\\.2\\.email").type("l@gmail.com");
    cy.get("div.hNYJYq button").click();
    cy.get("#adults\\.2\\.primary-phone-number").click();
    cy.get("div:nth-of-type(5) div:nth-of-type(8) div.ant-row").click();
    cy.get("#adults\\.2\\.primary-phone-number").type("9109898291");
    cy.get("div.hNYJYq button").click();
    cy.get("div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) li:nth-of-type(1) span > span").click();
    cy.get("div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) li:nth-of-type(2) span > span").click();
    cy.get("div.byBGaM div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) button > span").click();
    cy.get("div.SeatsPageStyles__SideFooterWrapper-sc-8hgotv-0 button").click();
    cy.get("div:nth-of-type(3) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) li:nth-of-type(1) span > span").click();
    cy.get("div:nth-of-type(3) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) li:nth-of-type(2) sup:nth-of-type(1)").click();
    cy.get("div:nth-of-type(3) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) li:nth-of-type(3) span > span").click();
    cy.get("div.SeatsPageStyles__SideFooterWrapper-sc-8hgotv-0 button").click();
    cy.get("div:nth-of-type(3) > div:nth-of-type(2) button.QuantitySelector__IncrementButton-gxhe5k-2 > svg").click();
    cy.get("div:nth-of-type(4) > div:nth-of-type(2) button.QuantitySelector__IncrementButton-gxhe5k-2 > svg").click();
    cy.get("div:nth-of-type(5) > div:nth-of-type(2) button.QuantitySelector__IncrementButton-gxhe5k-2 path:nth-of-type(1)").click();
    cy.get("div.hNYJYq button").click();
    cy.get("div.hNYJYq button").click();
    cy.get("div.dmuSJT span").click();
    cy.get("div.dmuSJT span").click();
    cy.get("div.dmuSJT span").dblclick();
    cy.get("div.dmuSJT span").click();
    cy.get("div.dmuSJT span").click();
    cy.get("div.dmuSJT span").dblclick();
    cy.get("div.hEucNx span").click();
    cy.get("#main").click();
    cy.get("div.hNYJYq button").click();
    cy.get("div:nth-of-type(10) button > img").click();
    cy.get("#card-number").click();
    cy.get("#card-number").type("5454 5454 5454 5454");
    cy.get("#card-cvv").click();
    cy.get("#card-cvv").type("998");
    cy.get("#react-select-card-expiration-month-option-11").click();
    cy.get("div.ant-row-flex > div:nth-of-type(2) div.css-1hwfws3").click();
    cy.get("#react-select-card-expiration-year-option-0").click();
    cy.get("#address-line-1").click();
    cy.get("#address-line-1").type("123");
    cy.get("#address-line-2").click();
    cy.get("#address-line-2").type("streer");
    cy.get("#city").click();
    cy.get("#city").type("clt");
    cy.get("div.iLbNmU > div:nth-of-type(2) > div > div > div").click();
    cy.get("#react-select-state-option-2").click();
    cy.get("#zip-code").click();
    cy.get("#zip-code").type("51002-");
    cy.get("#phone-number").click();
    cy.get("body").click();
    cy.get("#phone-number-prefix").type("+91");
    cy.get("#react-select-phone-number-prefix-option-99").click();
    cy.get("#phone-number").click();
    cy.get("#phone-number").type("H");
    cy.get("#phone-number").type("9898989898");
    cy.get("section:nth-of-type(2) rect").click();
    cy.get("form > div.ant-row button").click();
    cy.get("form > div:nth-of-type(2) fieldset > div:nth-of-type(2) input").click();
    cy.get("form > div:nth-of-type(2) fieldset > div:nth-of-type(2) input").type("nikhil@");
    cy.get("form > div:nth-of-type(2) fieldset > div:nth-of-type(2) input").type("nikhil@gmail.com");
    cy.get("form > div.ant-row > div.ant-col-md-8 span").click();
})

// When("I log in as",(username,password)=>{
//        loginpage.login(username,password)
//     });



// Then("click on submit button", ()=>{
//     cy.get('[name=submit]').click()

// })


// And("verify title {string}", (title)=>{
//     cy.title().should('eq',title)
    
// })


// Then(/^do actions$/, () => {
// 	cy.contains('Home').click()
// });
