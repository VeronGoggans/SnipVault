import { Model } from "./model.js"
import { HomeView } from "./view.js";


class Controller {
    constructor() {
        this.model = new Model();  
        this.view = new HomeView();
    }    
}


document.addEventListener('DOMContentLoaded', () => {
    new Controller();
})