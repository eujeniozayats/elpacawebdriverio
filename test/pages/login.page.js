import Page from './page';

class LoginPage extends Page {
    
    get signInTitle() {
        return $('//*[@id="root"]/div[2]/div/h1');
    }
    get emailInput() {
        return $('//*[@id="root"]/div[2]/div/div/div/div/form/div[1]/div[1]/div/input');
    }
    get passwordInput() {
        return $('//*[@id="root"]/div[2]/div/div/div/div/form/div[1]/div[2]/div/input');
    }
    get signInButton() {
        return $('//*[@id="root"]/div[2]/div/div/div/div/form/div[3]/div/button[1]/span[1]');
    }
    get invalidEmailMsg() {
        return $('//*[@id="root"]/div[2]/div/div/div/div/form/div[1]/div[1]/p');
    }

    get shortPassMsg() {
        return $('//*[@id="root"]/div[2]/div/div/div/div/form/div[1]/div[2]/p');
    }
    
    open() {
        
        super.open('https://.....');

    }

}

export default new LoginPage();