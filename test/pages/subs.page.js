import Page from './page';

class SubsPage extends Page {
    
    get mngSubscription() {
        return $('//*[@id="root"]/div[2]/header[1]/div/button');
    }
    get mngPlnString() {
        return $('//*[@id="root"]/div[2]/div/nav/ol/li[5]/p');
    }
    get subscribeFirst() {
        return $('//*[@id="root"]/div[2]/div/div[1]/div/div/div[3]/div/div/button/span[1]');
    }
    
    open() {
        
        super.open('https://.....');

    }

}

export default new SubsPage();