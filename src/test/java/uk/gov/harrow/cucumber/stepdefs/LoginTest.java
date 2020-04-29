package uk.gov.harrow.cucumber.stepdefs;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import uk.gov.harrow.pages.HomePage;
import uk.gov.harrow.pages.LoginPage;

/**
 * Created by Chaitanya
 */
public class LoginTest {
   @Given("^I am on Home page$")
    public void iAmOnHomePage() {
   }

    @And("^I click on Log In tab$")
    public void iClickOnLogInTab() {
        new HomePage().clickOnLoginLink();
    }

    @Then("^I should be on Login Page successfully$")
    public void iShouldBeOnLoginPageSuccessfully() {
        Assert.assertEquals(new LoginPage().getLoginVerifyingText(), "Log in");
    }

    @When("^I enter Your email in email field \"([^\"]*)\"$")
    public void iEnterYourEmailInEmailField(String email) {
        new LoginPage().enterEmailId(email);

    }

    @And("^I enter password in password field \"([^\"]*)\"$")
    public void iEnterPasswordInPasswordField(String password) {
        new LoginPage().enterPassword(password);

    }

    @And("^I click on Log In button$")
    public void iClickOnLogInButton() {
        new LoginPage().ClickOnLoginButton();

    }

    @Then("^System should throw error message \"([^\"]*)\"$")
    public void systemShouldThrowErrorMessage(String errorMessage) {
        Assert.assertEquals(new LoginPage().getErrorMessage(), errorMessage);
    }


}
