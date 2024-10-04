const { PlaywrightCore } = require('../../module-imports/helperFunctions.imports')
const { test, expect } = require('../../module-imports/testFixtures.imports')
import DemoQATestData from '../test-assets/test-data-files/demo-qa-form-testData.json'

test.describe('TestSuite: Demo QA Form', () => {

    test.beforeEach(async ({ demoQAPage }) => {
        await demoQAPage.NavigateToDemoQAPage()
      });

    test('TC01 - Fill Demo QA Form with Gender Male and Sports as Hobbies', async ({demoQAPage}) => {
        await PlaywrightCore.fill(demoQAPage.firstNameTxtBox, DemoQATestData.firstName)
        await PlaywrightCore.fill(demoQAPage.lastNameTxtBox, DemoQATestData.lastName)
        await PlaywrightCore.fill(demoQAPage.emailTxtBox, DemoQATestData.email)
        await PlaywrightCore.click(demoQAPage.maleRadioBtn)
        await PlaywrightCore.fill(demoQAPage.mobileNumberTxtBox, DemoQATestData.mobileNumber)
        await PlaywrightCore.fill(demoQAPage.dateOfBithInputField, DemoQATestData.dateOfBirth)
        await PlaywrightCore.keyboardPress(demoQAPage.page, DemoQATestData.enter)
        await PlaywrightCore.fill(demoQAPage.subjectTxtBox, DemoQATestData.subject)
        await PlaywrightCore.keyboardPress(demoQAPage.page, DemoQATestData.enter)
        await PlaywrightCore.click(demoQAPage.sportsCheckBox)
        await demoQAPage.uploadPicture.setInputFiles(DemoQATestData.filePath)  
        await PlaywrightCore.fill(demoQAPage.currentAddressTxtBox, DemoQATestData.currentAddress)
        await PlaywrightCore.click(demoQAPage.selectStateDropDowm)
        await PlaywrightCore.keyboardPress(demoQAPage.page, DemoQATestData.enter)
        await PlaywrightCore.click(demoQAPage.selectCityDropDown)
        await PlaywrightCore.keyboardPress(demoQAPage.page, DemoQATestData.enter)
        await PlaywrightCore.click(demoQAPage.submitBtn)
        await expect(demoQAPage.titleFormSubmitted).toHaveText(DemoQATestData.titleFormSubmittedValue)
        await expect(demoQAPage.closeBtn).toHaveText(DemoQATestData.closeBtnValue)
    }); 

    test('TC02 - Fill Demo QA Form with Gender Female and Reading as Hobbies', async ({demoQAPage}) => {
        await PlaywrightCore.fill(demoQAPage.firstNameTxtBox, DemoQATestData.firstName)
        await PlaywrightCore.fill(demoQAPage.lastNameTxtBox, DemoQATestData.lastName)
        await PlaywrightCore.fill(demoQAPage.emailTxtBox, DemoQATestData.email)
        await PlaywrightCore.click(demoQAPage.femaleRadioBtn)
        await PlaywrightCore.fill(demoQAPage.mobileNumberTxtBox, DemoQATestData.mobileNumber)
        await PlaywrightCore.fill(demoQAPage.dateOfBithInputField, DemoQATestData.dateOfBirth)
        await PlaywrightCore.keyboardPress(demoQAPage.page, DemoQATestData.enter)
        await PlaywrightCore.fill(demoQAPage.subjectTxtBox, DemoQATestData.subject)
        await PlaywrightCore.keyboardPress(demoQAPage.page, DemoQATestData.enter)
        await PlaywrightCore.click(demoQAPage.readingCheckBox)
        await demoQAPage.uploadPicture.setInputFiles(DemoQATestData.filePath)  
        await PlaywrightCore.fill(demoQAPage.currentAddressTxtBox, DemoQATestData.currentAddress)
        await PlaywrightCore.click(demoQAPage.selectStateDropDowm)
        await PlaywrightCore.keyboardPress(demoQAPage.page, DemoQATestData.enter)
        await PlaywrightCore.click(demoQAPage.selectCityDropDown)
        await PlaywrightCore.keyboardPress(demoQAPage.page, DemoQATestData.enter)
        await PlaywrightCore.click(demoQAPage.submitBtn)
        await expect(demoQAPage.titleFormSubmitted).toHaveText(DemoQATestData.titleFormSubmittedValue)
        await expect(demoQAPage.closeBtn).toHaveText(DemoQATestData.closeBtnValue)
    }); 

});
