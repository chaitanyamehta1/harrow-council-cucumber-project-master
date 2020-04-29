package uk.gov.harrow.cucumber.stepdefs;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import uk.gov.harrow.pages.CoronavirusPage;
import uk.gov.harrow.pages.CouncilTaxPage;
import uk.gov.harrow.pages.HomePage;

/**
 * Created by Chaitanya
 */
public class CouncilTaxAndCoronavirusFeature {
    @When("^I click on Council Tax tab$")
    public void iClickOnCouncilTaxTab() {
        new HomePage().clickOnCouncilTaxFeature();
    }

    @Then("^I should be in Council Tax successfully$")
    public void iShouldBeInCouncilTaxSuccessfully() {
        Assert.assertEquals(new CouncilTaxPage().getCouncilTaxText(), "Primary school offers");
    }

    @When("^I click on Coronavirus tab$")
    public void iClickOnCoronavirusTab() {
        new HomePage().clickOnCoronavirusButton();
    }

    @Then("^I should be in Coronavirus page successfully$")
    public void iShouldBeInCoronavirusPageSuccessfully() {
        Assert.assertEquals(new CoronavirusPage().getCoronavirusMessage(), "Coronavirus (COVID-19)");
    }
}
