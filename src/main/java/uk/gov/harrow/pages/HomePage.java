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
public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    //below locators for elements on home page
    @FindBy(className = "icon-fallback")
    WebElement _loginLink;
    @FindBy(xpath = "//span[@class='icon toggle-icon toggle-icon--search']")
    WebElement _searchSymbolLink;
    @FindBy(xpath = "//span[@class='button__text'][contains(text(),'Services')]")
    WebElement _servicesButton;
    @FindBy(xpath = "//div[@class='widget-row widget-row--flush widget-row--full-width']//a[2]")
    WebElement _councilTaxButton;
    @FindBy(xpath = "//span[contains(text(),'Coronavirus (COVID-19)')]")
    WebElement _coronavirusTab;

    public void clickOnCoronavirusButton() {
        Reporter.addStepLog("Clicking on Coronavirus Tab " + _coronavirusTab.toString());
        clickOnElement(_coronavirusTab);
        log.info("Clicking on Coronavirus Tab " + _coronavirusTab.toString());
    }

    //below method creation for web elements and doing action on elements
    public void clickOnLoginLink() {
        Reporter.addStepLog("Clicking on login button " + _loginLink.toString());
        clickOnElement(_loginLink);
        log.info("Clicking on login button " + _loginLink.toString());
    }

    public void clickOnSearchButton() {
        Reporter.addStepLog("Clicking on search button " + _searchSymbolLink.toString());
        clickOnElement(_searchSymbolLink);
        log.info("Clicking on search button " + _searchSymbolLink.toString());
    }

    public void clickOnServiceButton() {
        Reporter.addStepLog("Clicking on service button " + _servicesButton.toString());
        clickOnElement(_servicesButton);
        log.info("Clicking on service button " + _servicesButton.toString());
    }

    public void clickOnCouncilTaxFeature() {
        Reporter.addStepLog("Clicking on council tax button " + _councilTaxButton.toString());
        clickOnElement(_councilTaxButton);
        log.info("Clicking on council tax button " + _councilTaxButton.toString());
    }


}
