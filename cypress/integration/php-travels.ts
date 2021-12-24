
import { config } from "../config/flow-config";

describe("Tests e2 flow of php travels website", () => {

    it("Tests that the apps header is present on its landing page", () => {
        cy.visit(config.nav.mainUrl);
        cy.get(config.mainHeaderTitle)
        .invoke("text")
        .then((headerTitle: string) => {
        expect(headerTitle).to.equal('Application Test Drive');
        });
    });

    it("Tests that redirection was successful to prices page by checking plans and prices header exists", () => {
        cy.visit(config.nav.pricesUrl);
        cy.get(config.pricesTitle)
        .invoke("text")
        .then((pricesTitle: string) => {
        expect(pricesTitle).contains('Plans and Prices');
        });
    });




});