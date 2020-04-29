package uk.gov.harrow.pages;

import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.gov.harrow.utility.Utility;

/**
 * Created by Chaitanya
 */
public class CouncilTaxPage extends Utility {
    private static final Logger log = LogManager.getLogger(CouncilTaxPage.class.getName());

    //locators for each elements on home page
    @FindBy(xpath = "//h1[@class='page-heading']")
    WebElement _councilTaxText;

    //below return type method to compare expected and actual result
    public String getCouncilTaxText() {
        Reporter.addStepLog("Getting council tax message " + _councilTaxText.toString());
        log.info("Getting council tax message " + _councilTaxText.toString());
        return getTextFromElement(_councilTaxText);
    }


}
