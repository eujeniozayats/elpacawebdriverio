import Page from './page';

class AccountPage extends Page {
    
    get accountEditMain() {
        return $('//*[@id="root"]/div[2]/div/div/div/div/div[3]/div[2]/div/div/div/div[3]/a/p');
    }

    get inputHidden() {
        return $('//*[@id="photo"]');
    }
    
    open() {
        
        super.open('https://.....');

    }

}

export default new AccountPage();