import MainPage from '../pages/main.page';
import SubsPage from '../pages/subs.page';
import { AppUserLogin } from '../utilities/helper';
import { waitForPageLoad } from '../utilities/helper';



describe('go to account and subscriptions', () => {
    before(() => {
        AppUserLogin();
        waitForPageLoad('https://elpaca.ita91.com/');
       
    })
    it('goes to account page', () => {
        MainPage.accountlinkBtn.click();
        waitForPageLoad('https://elpaca.ita91.com/account');
               
    });
    it('verify if manage subscription page opens', () => {
        SubsPage.mngSubscription.click();
        expect(browser).toHaveUrl(
            'https://elpaca.ita91.com/account/manage-plan');
        expect(SubsPage.mngPlnString).toBeVisible;
        browser.pause(3000);
        
    }); 

});