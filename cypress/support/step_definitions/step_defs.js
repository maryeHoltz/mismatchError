import "./../parameter_types";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open {POMstring} page", (pageObjectArr) => {
    cy.fixture("pages/" + pageObjectArr[0]).then((json) => {
        const pageObjectElement = json[pageObjectArr[1]];

        cy.visit(pageObjectElement);
    });
});

When("I enter {string} in {POMstring} element and click out", (inputText, pageObjectArr) => {
    cy.fixture("pages/" + pageObjectArr[0]).then((json) => {
        const pageObjectElement = json[pageObjectArr[1]];

        cy.get(pageObjectElement).type(inputText).blur();
    });
});

When("I enter {string} in {POMstring}", (inputText, pageObjectArr) => {
    cy.fixture("pages/" + pageObjectArr[0]).then((json) => {
        const pageObjectElement = json[pageObjectArr[1]];

        cy.get(pageObjectElement).type(inputText);
    });
});