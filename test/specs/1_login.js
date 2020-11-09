import LoginPage from '../pages/login.page'
import { waitForTextAppears } from '../utilities/helper';
import { AppUserLogin } from '../utilities/helper';

describe('Login into app', () => {

    it('should open sign in page and verify the title', () => {
        browser.url('/login');
        expect(LoginPage.signInTitle).toHaveText('Welcome to Elpaca project');
        expect(LoginPage.emailInput).toBeEnabled();
        expect(LoginPage.passwordInput).toBeEnabled();
       
    });

    it('sign in with wrong credentials', () => {
        LoginPage.emailInput.addValue('wrongemail');
        LoginPage.passwordInput.addValue('1234');
        LoginPage.signInButton.click();
        waitForTextAppears(LoginPage.invalidEmailMsg, 'Email is invalid', 3000);
        expect(LoginPage.shortPassMsg).toExist();
        expect(LoginPage.invalidEmailMsg).toHaveText('Email is invalid');
        expect(LoginPage.shortPassMsg).toHaveText('Password must contain at least 8 characters');
    
    });

    it('sign in with true credentials', () => {
        AppUserLogin();
        browser.setTimeout({ 'pageLoad': 3000 });
        const url = browser.getUrl();
        expect(browser).toHaveUrl('https://elpaca.ita91.com/');
    });
});