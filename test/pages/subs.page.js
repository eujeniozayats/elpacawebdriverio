import Page from './page';

class SubsPage extends Page {
    
    get mngSubscription() {
        return $('//*[@id="root"]/div[2]/header[1]/div/button');
    }
    get mngPlnString() {
        return $('//*[@id="root"]/div[2]/div/nav/ol/li[5]/p');
    }
    
    open() {
        
        super.open('https://.....');

    }

}

export default new SubsPage();