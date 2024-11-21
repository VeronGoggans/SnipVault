export class View {
    constructor() {

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
        this.searchBar = document.querySelector('.searchbar input');
        this.addSnippetButton = document.querySelector('.add-snippet-btn');
        this.loadingContainer = document.querySelector('.loading-container');
        this.resultHeading = document.querySelector('h2');
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
        });
    }

    #addEventListeners() {
        this.searchBar.addEventListener('input', () => {this.#handleInputAnimation()});
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