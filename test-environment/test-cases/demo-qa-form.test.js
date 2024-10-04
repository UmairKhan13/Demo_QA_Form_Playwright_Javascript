const { PlaywrightCore } = require('../../module-imports/helperFunctions.imports')
const { test, expect } = require('../../module-imports/testFixtures.imports')
import DemoQATestData from '../test-assets/test-data-files/demo-qa-form-testData.json'

test.describe('TestSuite: Demo QA Form', () => {

    test.beforeEach(async ({ demoQAPage }) => {
        await demoQAPage.NavigateToDemoQAPage()
      });

    test('TC01 - Fill Demo QA Form with Gender Male and Sports in Hobbies', async ({demoQAPage}) => {
        await PlaywrightCore.fill(demoQAPage.firstNameTxtBox, DemoQATestData.firstName)
        await PlaywrightCore.fill(demoQAPage.lastNameTxtBox, DemoQATestData.lastName)
        await PlaywrightCore.fill(demoQAPage.emailTxtBox, DemoQATestData.email)
        await PlaywrightCore.click(demoQAPage.maleRadioBtn)
        await demoQAPage.mobileNumberTxtBox.scroll_into_view_if_needed()
        await PlaywrightCore.fill(demoQAPage.mobileNumberTxtBox, DemoQATestData.mobileNumber)
        await demoQAPage.dateOfBithInputField.scroll_into_view_if_needed()
        await PlaywrightCore.fill(demoQAPage.dateOfBithInputField, DemoQATestData.dateOfBirth)
        await demoQAPage.subjectTxtBox.scroll_into_view_if_needed()
        await PlaywrightCore.fill(demoQAPage.subjectTxtBox, DemoQATestData.subject)
        await PlaywrightCore.keyboardPress(DemoQATestData.enter) 
        await PlaywrightCore.click(demoQAPage.sportsCheckBox)
        await demoQAPage.uploadPicture.setInputFiles(DemoQATestData.filePath)  
        await PlaywrightCore.fill(demoQAPage.currentAddressTxtBox, DemoQATestData.currentAddress)
        await PlaywrightCore.click(demoQAPage.selectStateDropDowm)
        await PlaywrightCore.keyboardPress(DemoQATestData.enter) 
        await PlaywrightCore.click(demoQAPage.selectCityDropDown)
        await PlaywrightCore.keyboardPress(DemoQATestData.enter)
    }); 

    test('Umair - TC-02 - Valid Login Functionality', async ({demoQAPage}) => {
    }); 

});
