const SNIPPET_TEMPLATE = `
<div class="snippet-page">
    <div class="center">
        <div class="editor">
            <div class="snippet-name-bar">
                <div class="snippet-name-box">
                    <i class="bi bi-code-slash"></i>
                    <span class="snippet-name" spellcheck="false" contenteditable="true">Untitled</span>
                </div>
                <div class="add-new-snippet-tab">
                    <i class="bi bi-plus-lg"></i>
                </div>
            </div>
            <pre>
                <i id="copy-btn" class="bi bi-copy"></i>
                <i id="expand-btn" class="bi bi-arrows-angle-expand"></i>
                <code contenteditable="true" spellcheck="false" class="language" style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; background-color: #252a36; width: 700px; max-width: 700px; max-height: 465px; min-height: 100px; color: #fff; padding: 15px 30px; "></code>
            </pre>
        </div>
        

        <div class="tags">

        <div class="tag">CSS</div>
        <div class="tag">Animation</div>
    
        <div class="add-tag-container">
            <i id="copy-btn" class="bi bi-tag-fill"></i>
            <input class="tag-name-input" spellcheck="false" type="text" placeholder="Add some tags to descripbe me 🙂">
        </div>
        
        </div>
    
        <button class="back-btn"><i class="bi bi-chevron-left"></i></button>
        <button class="create-snippet-btn">Save</button>
    </div>
</div>
`

const HOME_TEMPLATE = `
<div class="home-page">
    <h1>SnipVault</h1>
    <div class="searchbar">
        <i id="search-icon" class="bi bi-search"></i>
        <input type="text" placeholder="Search by name or tag" spellcheck="false">
    </div>
    <button class="add-snippet-btn">Add snippet</button>
    <div class="loading-container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
    </div>
    <div class="search-results-container">
        <h2></h2>
    </div>  
</div>
`

export const TEMPLATES = {
    snippet: SNIPPET_TEMPLATE,
    home: HOME_TEMPLATE
}