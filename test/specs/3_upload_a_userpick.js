import { AppUserLogin } from '../utilities/helper';
import MainPage from '../pages/main.page';
import AccountPage from '../pages/account.page';
const path = require('path');
import { waitForPageLoad } from '../utilities/helper';


describe('upload a userpic', () => {
    before(() => {
        AppUserLogin();
        waitForPageLoad('https://elpaca.ita91.com/');
       
    })
    it('account page', () => {
        MainPage.accountlinkBtn.click();
        waitForPageLoad('https://elpaca.ita91.com/account');
               
    });
    it('uploads a file', () => {
        const filePath = path.join(__dirname, '../data/picture.jpg');
        const remoteFilePath = browser.uploadFile(filePath);
        AccountPage.accountEditMain.click();
        waitForPageLoad('https://elpaca.ita91.com/account/edit');
        browser.execute(function () {
            document.getElementById('photo').style.display = 'block';

        });
        AccountPage.inputHidden.waitForDisplayed();
        AccountPage.inputHidden.setValue(remoteFilePath);
        browser.pause(5000);
        
    });

});