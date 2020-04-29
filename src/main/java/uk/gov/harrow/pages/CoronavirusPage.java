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
public class CoronavirusPage extends Utility {
    private static final Logger log = LogManager.getLogger(CouncilTaxPage.class.getName());

    @FindBy(xpath = "//h1[@class='page-heading']")
    WebElement _getCoronavirusText;


    public String getCoronavirusMessage() {
        Reporter.addStepLog("Getting Coronavirus Text Message " + _getCoronavirusText.toString());
        log.info("Getting Coronavirus Text Message " + _getCoronavirusText.toString());
        return getTextFromElement(_getCoronavirusText);
    }

}
