import { TEMPLATES } from "./templates.js";
import { handlePaste } from "./util.js";


export class HomeView {
    constructor(controller) {
        this.controller = controller;

        this.#initElements();
        this.#addEventListeners();
    }

    renderAllResults(results) {
        // implementation
        this.#renderResultText(results.length);
    }


    #renderResultText(resultCount) {
        if (resultCount > 0) {
            this.resultHeading.textContent = `Found ${resultCount} snippets for you 😃`
        } else {
            this.resultHeading.textContent = "Couldn't find any snippets 😔"
        }
    }





    #initElements() {
        document.body.innerHTML = TEMPLATES['home'];
        this.searchBar = document.querySelector('.searchbar input');
        this.addSnippetButton = document.querySelector('.add-snippet-btn');
        this.loadingContainer = document.querySelector('.loading-container');
        this.resultHeading = document.querySelector('h2');
        this.snippetPage = document.querySelector('.snippet-page');
    }

    #addEventListeners() {
        this.searchBar.addEventListener('input', () => { this.#handleInputAnimation() });
        this.addSnippetButton.addEventListener('click', () => { new SnippetView(this.controller) });
    }

    #handleInputAnimation() {
        if (this.searchBar.value === '') {
            this.addSnippetButton.style.display = '';
            this.loadingContainer.style.display = 'none';
            this.resultHeading.textContent = '';
            this.resultHeading.style.animation = ''
        } else {
            this.addSnippetButton.style.display = 'none';
            this.loadingContainer.style.display = 'flex';
            this.resultHeading.textContent = 'Press Enter to search';
            this.resultHeading.style.animation = 'mistyFade 2s infinite ease-in-out'
        }
    }
}





class SnippetView {
    constructor(controller) {
        this.controller = controller;

        this.#initElements();
        this.#addEventListeners();
        this.#highlightCodeSnippet();
        setTimeout(() => {
            this.page.classList.add('open-page-from-bottom');
        }, 20)
    }


    #initElements() {
        document.body.innerHTML = TEMPLATES['snippet'];
        this.copyButton = document.querySelector('#copy-btn');
        this.expandButton = document.querySelector('#expand-btn');
        this.editor = document.querySelector('.editor');
        this.saveButton = document.querySelector('.create-snippet-btn');
        this.backButton = document.querySelector('.back-btn');
        this.snippetNameInput = document.querySelector('.snippet-name-box span');
        this.tagNameInput = document.querySelector('.tag-name-input');
        this.snippet = document.querySelector('code');
        this.page = document.querySelector('.snippet-page');
    }


    #addEventListeners() {
        this.backButton.addEventListener('click', () => { new HomeView(this.controller) });
        this.snippet.addEventListener('paste', (event) => { this.#highlightCodeSnippet(event) });
        this.expandButton.addEventListener('click', () => { this.#expandEditor() });
    }

    #expandEditor() {
        const pre = document.querySelector('pre');
        const code = document.querySelector('code');
        const bar = document.querySelector('.snippet-name-bar');
        
        
        if (this.editor.classList.contains('expand')) {
            this.editor.classList.remove('expand');
            // Change the pre styles
            pre.style.maxWidth = '700px';

            // Change the snippet name bar styles
            bar.style.borderRadius = '10px 10px 0 0';

            // Change the code styles
            code.style.maxWidth = '700px';
            code.style.width = '700px';
            code.style.borderRadius = '0 0 10px 10px';
            code.style.maxHeight = '465px';
            code.style.height = '';
        } 
        
        else {
            this.editor.classList.add('expand');

             // Change the pre styles
             pre.style.maxWidth = '100dvw';

             // Change the snippet name bar styles
             bar.style.borderRadius = '0px';
 
             // Change the code styles
             code.style.maxWidth = '';
             code.style.width = '100%';
             code.style.borderRadius = '0px';
             code.style.maxHeight = '';
             code.style.height = 'calc(100dvh - 80px)';
            
        }
    }

    #highlightCodeSnippet(event) {
        handlePaste(event);
        const codeElement = document.querySelector('code');
        hljs.highlightBlock(codeElement);
    }
}