import Page from './page';

class LoginPage extends Page {
    
    get signInTitle() {
        return $('#root > div.sc-AykKC.itxLzi > div > h1');
    }
    get emailInput() {
        return $('[name="email"]');
    }
    get passwordInput() {
        return $('[name="password"]');
    }
    get signInButton() {
        return $('span=Sign In');
    }
    get invalidEmailMsg() {
        return $('p=Email is invalid');
    }

    get shortPassMsg() {
        return $('p=Password must contain at least 8 characters');
    }
    
    
}

export default new LoginPage();
