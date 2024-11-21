from rich.console import Console
from rich.markdown import Markdown
from rich.syntax import Syntax
from rich.text import Text
from rich.panel import Panel


javascript_code = """ 
export class Stack { 
    constructor() { 
        this.stack = [] 
    }

    push(item) {
        this.stack.push(item);
    }
    
    pop() {
        return this.stack.pop();
    }
    
    peek() {
        return this.stack[this.stack.length - 1];
    }
    
    isEmpty() {
        return this.stack.length === 0;
    }
    
    clear() {
        this.stack = [];
    }
    
    size() {
        return this.stack.length;
    }
} 
"""

console = Console()
syntax = Syntax(javascript_code, "javascript", theme="dracula", line_numbers=False)

info_text = Text()
info_text.append('🪪 ID: 2 | 📆 Created: Dec 1 2024 | 🏷️ Tags: javascript')
panel = Panel(info_text, title="Snippet", title_align="center", style="on #282a36", border_style="bold #5c7fdd")

console.print(panel)
console.print(syntax)

