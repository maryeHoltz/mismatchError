const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild.js");
const configFile = require("./cypress/plugins/index.js");
//const addMatchImageSnapshotPlugin = require("cypress-image-snapshot/plugin").addMatchImageSnapshotPlugin;
const esbuild = require("esbuild");

async function setupNodeEvents(on, config) {
    await preprocessor.addCucumberPreprocessorPlugin(on, config);
    await configFile(on, config);
    //await addMatchImageSnapshotPlugin(on, config);
    //require("./cypress/plugins/index.js")(on, config)

    on(
        "file:preprocessor",
        createBundler({
            plugins: [createEsbuildPlugin.default(config)],
        })
    );
    // console.log("Test esbuild")
    // console.log(createEsbuildPlugin.default(config));
    // console.log(config);

    return config;
}

module.exports = defineConfig({
    responseTimeout: 60000,
    video: false,
    screenshotOnRunFailure: true,
    reporter: "cypress-multi-reporters",
    reporterOptions: {
        configFile: "reporter-config.json",
    },
    chromeWebSecurity: false,
    defaultCommandTimeout: 7000,
    blockHosts: ["*contentsquare.net"],

    e2e: {
        baseUrl: "https://moocat.mutualofomaha.com",
        specPattern: "cypress/e2e/**/+(*.spec.{js,jsx,ts,tsx}|*.feature)",
        setupNodeEvents,
    },
});