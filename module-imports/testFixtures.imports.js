const base = require('@playwright/test');
const { DemoQAPage } = require('../pages/demo-qa-page/de-qa-form.page')

exports.test = base.test.extend({
    demoQAPage: async ({ page }, use) => {
        await use(new DemoQAPage(page));
    },
});

exports.expect = base.expect;