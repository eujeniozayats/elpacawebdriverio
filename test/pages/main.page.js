import Page from './page';

class MainPage extends Page {
    
    get accountlinkBtn() {
        return $('//*[@id="root"]/div[2]/header[1]/div/p[3]/a');
    }
    
    open() {
        
        super.open('https://.....');

    }

}

export default new MainPage();