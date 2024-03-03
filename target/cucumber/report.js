$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/AddNewCustomer.feature");
formatter.feature({
  "line": 2,
  "name": "Adding new customer validation",
  "description": "",
  "id": "adding-new-customer-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to add new customer",
  "description": "",
  "id": "adding-new-customer-validation;user-should-be-able-to-add-new-customer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on CodeFios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"\u003cusername\u003e\" in username field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters \"\u003cpassword\u003e\" in password field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on the Sighin key",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on CodeFios dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Customer menu",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Add Customer menu",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should land on CodeFios Add New Customer page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters \"\u003cfullname\u003e\" in fullname field",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters \"\u003ccompany\u003e\" in company field",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters \"\u003cemail\u003e\" in email field",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters \"\u003cphone\u003e\" in phone field",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters \"\u003caddress\u003e\" in address field",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"\u003ccity\u003e\" in city field",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters \"\u003czipCode\u003e\" in zipCode field",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enters \"\u003ccountry\u003e\" in country field",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User enters \"\u003cgroup\u003e\" in group field",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User clicks on the save key",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should see the new inserted customer information",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "adding-new-customer-validation;user-should-be-able-to-add-new-customer;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "fullname",
        "company",
        "email",
        "phone",
        "address",
        "city",
        "zipCode",
        "country",
        "group"
      ],
      "line": 26,
      "id": "adding-new-customer-validation;user-should-be-able-to-add-new-customer;;1"
    },
    {
      "cells": [
        "demo@codefios.com",
        "abc123",
        "cucumberJunit",
        "Apple",
        "apple@aple.com",
        "55555555555",
        "Home",
        "Paris",
        "55555",
        "France",
        "Lazy"
      ],
      "line": 27,
      "id": "adding-new-customer-validation;user-should-be-able-to-add-new-customer;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3122827800,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User should be able to add new customer",
  "description": "",
  "id": "adding-new-customer-validation;user-should-be-able-to-add-new-customer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on CodeFios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"demo@codefios.com\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters \"abc123\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on the Sighin key",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on CodeFios dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Customer menu",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Add Customer menu",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should land on CodeFios Add New Customer page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters \"cucumberJunit\" in fullname field",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters \"Apple\" in company field",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters \"apple@aple.com\" in email field",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters \"55555555555\" in phone field",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters \"Home\" in address field",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"Paris\" in city field",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters \"55555\" in zipCode field",
  "matchedColumns": [
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enters \"France\" in country field",
  "matchedColumns": [
    9
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User enters \"Lazy\" in group field",
  "matchedColumns": [
    10
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User clicks on the save key",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should see the new inserted customer information",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerStepDefination.user_is_on_CodeFios_login_page()"
});
formatter.result({
  "duration": 2659420500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@codefios.com",
      "offset": 13
    }
  ],
  "location": "AddCustomerStepDefination.user_enters_in_username_field(String)"
});
formatter.result({
  "duration": 3104939000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 13
    }
  ],
  "location": "AddCustomerStepDefination.user_enters_in_password_field(String)"
});
formatter.result({
  "duration": 3123747299,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepDefination.user_clicks_on_the_Sighin_key()"
});
formatter.result({
  "duration": 22674384200,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepDefination.user_should_land_on_CodeFios_dashboard_page()"
});
formatter.result({
  "duration": 257744100,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepDefination.user_clicks_on_Customer_menu()"
});
formatter.result({
  "duration": 3065668701,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepDefination.user_clicks_on_Add_Customer_menu()"
});
formatter.result({
  "duration": 7036676800,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepDefination.user_should_land_on_CodeFios_Add_New_Customer_page()"
});
formatter.result({
  "duration": 154257600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cucumberJunit",
      "offset": 13
    }
  ],
  "location": "AddCustomerStepDefination.user_enters_in_fullname_field(String)"
});
formatter.result({
  "duration": 121227200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple",
      "offset": 13
    }
  ],
  "location": "AddCustomerStepDefination.user_enters_in_company_field(String)"
});
formatter.result({
  "duration": 145254300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple@aple.com",
      "offset": 13
    }
  ],
  "location": "AddCustomerStepDefination.user_enters_in_email_field(String)"
});
formatter.result({
  "duration": 85703400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "55555555555",
      "offset": 13
    }
  ],
  "location": "AddCustomerStepDefination.user_enters_in_phone_field(String)"
});
formatter.result({
  "duration": 77108901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 13
    }
  ],
  "location": "AddCustomerStepDefination.user_enters_in_address_field(String)"
});
formatter.result({
  "duration": 63487100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Paris",
      "offset": 13
    }
  ],
  "location": "AddCustomerStepDefination.user_enters_in_city_field(String)"
});
formatter.result({
  "duration": 70088400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "55555",
      "offset": 13
    }
  ],
  "location": "AddCustomerStepDefination.user_enters_in_zipCode_field(String)"
});
formatter.result({
  "duration": 87492800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "France",
      "offset": 13
    }
  ],
  "location": "AddCustomerStepDefination.user_enters_in_country_field(String)"
});
formatter.result({
  "duration": 112776100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lazy",
      "offset": 13
    }
  ],
  "location": "AddCustomerStepDefination.user_enters_in_group_field(String)"
});
formatter.result({
  "duration": 2123767400,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepDefination.user_clicks_on_the_save_key()"
});
formatter.result({
  "duration": 79677414700,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepDefination.user_should_see_the_new_inserted_customer_information()"
});
formatter.result({
  "duration": 297437401,
  "status": "passed"
});
});