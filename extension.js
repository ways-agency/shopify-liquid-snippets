const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

let allSnippets;

function getSnippets(snippetsPath) {
  const snippetsContent = fs.readFileSync(snippetsPath, 'utf-8');
  return JSON.parse(snippetsContent);
}

function activate(context) {
  const disposable = vscode.languages.registerCompletionItemProvider(
    'liquid', // language ID for Liquid files
    {
      provideCompletionItems(document, position) {
        // Get the entire text of the document
        const text = document.getText();
        
        // Check if the cursor is inside the {%- liquid ... -%} tags using a regex
        const regex = /\{%-\s*liquid([\s\S]*?)-%\}/g;
        
        let match;
        const completionItems = [];
        
        while ((match = regex.exec(text)) !== null) {
          
          const conditionalSnippetsPath = path.join(context.extensionPath, 'snippets', 'tags', 'liquid', 'conditional.code-snippets');
          const conditionalSnippets = getSnippets(conditionalSnippetsPath);
          
          const iterationSnippetsPath = path.join(context.extensionPath, 'snippets', 'tags', 'liquid', 'iteration.code-snippets');
          const iterationSnippets = getSnippets(iterationSnippetsPath);
          
          const syntaxSnippetsPath = path.join(context.extensionPath, 'snippets', 'tags', 'liquid', 'syntax.code-snippets');
          const syntaxSnippets = getSnippets(syntaxSnippetsPath);
          
          const themeSnippetsPath = path.join(context.extensionPath, 'snippets', 'tags', 'liquid', 'theme.code-snippets');
          const themeSnippets = getSnippets(themeSnippetsPath);
          
          const variableSnippetsPath = path.join(context.extensionPath, 'snippets', 'tags', 'liquid', 'variable.code-snippets');
          const variableSnippets = getSnippets(variableSnippetsPath);
        
          allSnippets = {
            ...conditionalSnippets,
            ...iterationSnippets,
            ...syntaxSnippets,
            ...themeSnippets,
            ...variableSnippets
          };
          
          const start = match.index + match[0].indexOf('liquid') + 7;
          const end = match.index + match[0].lastIndexOf('-%}') + 1;
          
          // Check if the cursor is within the Liquid tags
          if (position.isAfter(new vscode.Position(document.positionAt(start).line, document.positionAt(start).character))
          && position.isBefore(new vscode.Position(document.positionAt(end).line, document.positionAt(end).character))) {
            
            for (const key in allSnippets) {
              if (Object.hasOwnProperty.call(allSnippets, key)) {
                const snippet = allSnippets[key];
                
                const completionItem = new vscode.CompletionItem(snippet.prefix, vscode.CompletionItemKind.Snippet);
                if (Array.isArray(snippet.body)) {
                  completionItem.insertText = new vscode.SnippetString(snippet.body.join('\n'));
                } else {
                  completionItem.insertText = new vscode.SnippetString(snippet.body);
                }
                completionItem.documentation = snippet.description;
                
                completionItems.push(completionItem);
              }
            }
            
            // If the cursor is inside the {%- liquid -%} tags, return tags without syntax
            return completionItems;
          }
        }
        
        const conditionalSnippetsPath = path.join(context.extensionPath, 'snippets', 'tags', 'conditional.code-snippets');
        const conditionalSnippets = getSnippets(conditionalSnippetsPath);
        
        const iterationSnippetsPath = path.join(context.extensionPath, 'snippets', 'tags', 'iteration.code-snippets');
        const iterationSnippets = getSnippets(iterationSnippetsPath);
        
        const syntaxSnippetsPath = path.join(context.extensionPath, 'snippets', 'tags', 'syntax.code-snippets');
        const syntaxSnippets = getSnippets(syntaxSnippetsPath);
        
        const themeSnippetsPath = path.join(context.extensionPath, 'snippets', 'tags', 'theme.code-snippets');
        const themeSnippets = getSnippets(themeSnippetsPath);
        
        const variableSnippetsPath = path.join(context.extensionPath, 'snippets', 'tags', 'variable.code-snippets');
        const variableSnippets = getSnippets(variableSnippetsPath);
        
        allSnippets = {
          ...conditionalSnippets,
          ...iterationSnippets,
          ...syntaxSnippets,
          ...themeSnippets,
          ...variableSnippets
        };
        
        for (const key in allSnippets) {
          if (Object.hasOwnProperty.call(allSnippets, key)) {
            const snippet = allSnippets[key];
            
            const completionItem = new vscode.CompletionItem(snippet.prefix, vscode.CompletionItemKind.Snippet);
            if (Array.isArray(snippet.body)) {
              completionItem.insertText = new vscode.SnippetString(snippet.body.join('\n'));
            } else {
              completionItem.insertText = new vscode.SnippetString(snippet.body);
            }
            completionItem.documentation = snippet.description;
            
            completionItems.push(completionItem);
          }
        }
        
        // If the cursor is not inside the {%- liquid -%} tags, return tags with syntax
        return completionItems;
      }
    }
    );
    
    context.subscriptions.push(disposable);
  }
  
  module.exports = {
    activate
  };
  