// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
//const readXlsx = require("xlsx");
//const { addMatchImageSnapshotPlugin } = require("cypress-image-snapshot/plugin");
const cucumber = require("@badeball/cypress-cucumber-preprocessor");

module.exports = (on, config) => {
    // `on` is used to hook into various events Cypress emits

    // set up cucumber preprocessor
    //on("file:preprocessor", cucumber());

    //for HTML reporting
    //require("cypress-mochawesome-reporter/plugin")(on);

    // `config` is the resolved Cypress config
    //  addMatchImageSnapshotPlugin(on, config);
    //print cypress-axe tabular data to console
    on("task", {
        route(route) {
            console.log("\x1b[31m", `testing on route ${route}`);

            return null;
        },
        log(message) {
            console.log(message);

            return null;
        },
        table(message) {
            console.table(message);

            return null;
        }
    });
};
