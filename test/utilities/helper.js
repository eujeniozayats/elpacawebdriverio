import LoginPage from '../pages/login.page'
export const waitForTextAppears = (el, text, timeout) => {
    browser.waitUntil(
        function () {
            return el.getText() === text;
    },
      { timeout }
    );
};

export const AppUserLogin = () => {
    browser.url('https://elpaca.ita91.com/login');
    LoginPage.emailInput.addValue('eugenezayats@yandex.by');
    LoginPage.passwordInput.addValue('123456qqqQQQ!');
    LoginPage.signInButton.click();
};

export const waitForPageLoad = (url) => {
    browser.setTimeout({'pageLoad': 10000}); 
    browser.getUrl();
        expect(browser).toHaveUrl(url);
    
};
