// https://github.com/cucumber/cucumber-js/blob/main/docs/support_files/api_reference.md
import { defineParameterType } from "@badeball/cypress-cucumber-preprocessor";

defineParameterType({
    regexp: /.*/,
    // put my thing down, split and replace it
    transformer: (s) => s.split(".").map((x) => x.replace('"', "")),
    name: "POMstring",
});
