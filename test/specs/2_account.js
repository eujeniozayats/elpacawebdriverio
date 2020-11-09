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
    it('verify value in the button', () => {
        const Text = "UNSUBSCRIBE";
        const SText = "SUBSCRIBE";
        if (SubsPage.subscribeFirst.getText() === Text) {
            SubsPage.subscribeFirst.click();
            browser.pause(10000);
            expect(SubsPage.subscribeFirst).toHaveText(SText)

        } else {
            expect(SubsPage.subscribeFirst).toHaveText(SText)
        };
        
    }); 

});