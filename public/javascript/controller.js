import { Model } from "./model.js"
import { View } from "./view.js";

class Controller {
    constructor() {
        this.model = new Model();  
        this.view = new View();
    }    
}


document.addEventListener('DOMContentLoaded', () => {
    new Controller();
})