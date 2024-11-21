class ResultSnippet extends HTMLElement {
    constructor() {
        super();
    }

    setData(snippet) {
        this.snippet = snippet
    }

    connectedCallback() {
        this.render();
        this.addEventListener('click', () => {this.handleClick()});
    }

    render() {
        this.innerHTML = `
            <i class="bi bi-file-earmark-code-fill"></i>
            <p>${this.snippet.name}</p>
            <div class="tags">
                <div class="tag">Python</div>
                <div class="tag">Sqlite</div>
                <div class="tag">+2</div>
            </div>
        `
    }

    handleClick() {
        this.dispatchEvent(new CustomEvent('SnippetResultClick', { detail: {snippet: this.snippet}, bubbles: true }));
    }
}

customElements.define('snippet-result', ResultSnippet);