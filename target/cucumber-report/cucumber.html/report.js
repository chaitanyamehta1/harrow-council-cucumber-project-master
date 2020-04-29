$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/uk/gov/harrow/resources/featurefile/counciltaxandcoronavirus.feature");
formatter.feature({
  "line": 1,
  "name": "Council Tax and Coronavirus page Functionality",
  "description": "As a user\r\nI want to visit Harrow Council website",
  "id": "council-tax-and-coronavirus-page-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 17781394600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should navigate to Council Tax page",
  "description": "",
  "id": "council-tax-and-coronavirus-page-functionality;verify-user-should-navigate-to-council-tax-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Council Tax tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should be in Council Tax successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 1048398500,
  "status": "passed"
});
formatter.match({
  "location": "CouncilTaxAndCoronavirusFeature.iClickOnCouncilTaxTab()"
});
formatter.result({
  "duration": 11668150200,
  "status": "passed"
});
formatter.match({
  "location": "CouncilTaxAndCoronavirusFeature.iShouldBeInCouncilTaxSuccessfully()"
});
formatter.result({
  "duration": 93590400,
  "status": "passed"
});
formatter.after({
  "duration": 136700,
  "status": "passed"
});
formatter.before({
  "duration": 13192179800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify user should navigate to Coronavirus Page",
  "description": "",
  "id": "council-tax-and-coronavirus-page-functionality;verify-user-should-navigate-to-coronavirus-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Coronavirus tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should be in Coronavirus page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 48400,
  "status": "passed"
});
formatter.match({
  "location": "CouncilTaxAndCoronavirusFeature.iClickOnCoronavirusTab()"
});
formatter.result({
  "duration": 1263433000,
  "status": "passed"
});
formatter.match({
  "location": "CouncilTaxAndCoronavirusFeature.iShouldBeInCoronavirusPageSuccessfully()"
});
formatter.result({
  "duration": 109857800,
  "status": "passed"
});
formatter.after({
  "duration": 40600,
  "status": "passed"
});
formatter.uri("src/test/java/uk/gov/harrow/resources/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "As a user\r\nI want to visit Harrow council website",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13059329300,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify user should navigate to Login Page",
  "description": "",
  "id": "login-functionality;verify-user-should-navigate-to-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Log In tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should be on Login Page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 32200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLogInTab()"
});
formatter.result({
  "duration": 13966661600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iShouldBeOnLoginPageSuccessfully()"
});
formatter.result({
  "duration": 81436600,
  "status": "passed"
});
formatter.after({
  "duration": 37600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Verify User should not Login with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Log In tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter Your email in email field \"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter password in password field \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Log In button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "System should throw error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errorMessage"
      ],
      "line": 19,
      "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "dhanno@gmail.com",
        "dhanno23456@",
        "Invalid Username/Password supplied"
      ],
      "line": 20,
      "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "dhann@gmail.com",
        "dhann23456@",
        "Invalid Username/Password supplied"
      ],
      "line": 21,
      "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "dha@gmail.com",
        "dhanno3456@",
        "Invalid Username/Password supplied"
      ],
      "line": 22,
      "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12569125100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify User should not Login with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Log In tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter Your email in email field \"dhanno@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter password in password field \"dhanno23456@\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Log In button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "System should throw error message \"Invalid Username/Password supplied\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 41500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLogInTab()"
});
formatter.result({
  "duration": 12658789100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dhanno@gmail.com",
      "offset": 35
    }
  ],
  "location": "LoginTest.iEnterYourEmailInEmailField(String)"
});
formatter.result({
  "duration": 429089100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dhanno23456@",
      "offset": 36
    }
  ],
  "location": "LoginTest.iEnterPasswordInPasswordField(String)"
});
formatter.result({
  "duration": 294232700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLogInButton()"
});
formatter.result({
  "duration": 866601600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid Username/Password supplied",
      "offset": 35
    }
  ],
  "location": "LoginTest.systemShouldThrowErrorMessage(String)"
});
formatter.result({
  "duration": 105675500,
  "status": "passed"
});
formatter.after({
  "duration": 47800,
  "status": "passed"
});
formatter.before({
  "duration": 12754300800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify User should not Login with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Log In tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter Your email in email field \"dhann@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter password in password field \"dhann23456@\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Log In button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "System should throw error message \"Invalid Username/Password supplied\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 39800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLogInTab()"
});
formatter.result({
  "duration": 13391933000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dhann@gmail.com",
      "offset": 35
    }
  ],
  "location": "LoginTest.iEnterYourEmailInEmailField(String)"
});
formatter.result({
  "duration": 261170200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dhann23456@",
      "offset": 36
    }
  ],
  "location": "LoginTest.iEnterPasswordInPasswordField(String)"
});
formatter.result({
  "duration": 231253700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLogInButton()"
});
formatter.result({
  "duration": 972721500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid Username/Password supplied",
      "offset": 35
    }
  ],
  "location": "LoginTest.systemShouldThrowErrorMessage(String)"
});
formatter.result({
  "duration": 77720800,
  "status": "passed"
});
formatter.after({
  "duration": 41800,
  "status": "passed"
});
formatter.before({
  "duration": 13444837100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify User should not Login with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Log In tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter Your email in email field \"dha@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter password in password field \"dhanno3456@\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Log In button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "System should throw error message \"Invalid Username/Password supplied\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 48000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLogInTab()"
});
formatter.result({
  "duration": 12021515400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dha@gmail.com",
      "offset": 35
    }
  ],
  "location": "LoginTest.iEnterYourEmailInEmailField(String)"
});
formatter.result({
  "duration": 229602400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dhanno3456@",
      "offset": 36
    }
  ],
  "location": "LoginTest.iEnterPasswordInPasswordField(String)"
});
formatter.result({
  "duration": 271026200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLogInButton()"
});
formatter.result({
  "duration": 853690300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid Username/Password supplied",
      "offset": 35
    }
  ],
  "location": "LoginTest.systemShouldThrowErrorMessage(String)"
});
formatter.result({
  "duration": 79105700,
  "status": "passed"
});
formatter.after({
  "duration": 45900,
  "status": "passed"
});
});