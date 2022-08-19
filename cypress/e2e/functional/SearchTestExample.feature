Feature:  Search page example

    Scenario: Type something into google
      Given I open "SearchPage.GoogleURL" page
      When I enter "test automation" in "SearchPage.SearchField"

    Scenario: Type something into google with a different step definition
      Given I open "SearchPage.GoogleURL" page
      When I enter "test automation" in "SearchPage.SearchField" element and click out