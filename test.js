import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; // Kies een thema

document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightElement(block);
});