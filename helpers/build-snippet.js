const fs = require("fs");
const path = require("path");
const vscode = require("vscode");

function buildSnippet(tagTypes, context, basePath) {
  const completionItems = [];

  tagTypes.forEach((tagType) => {
    // Liquid snippets
    const snippetsPath = path.join(`${basePath}/${tagType}.json`);
    const content = fs.readFileSync(snippetsPath, "utf-8");
    const parsedSnippets = JSON.parse(content);

    parsedSnippets.forEach((snippet) => {
      const completionItem = new vscode.CompletionItem(
        snippet.label,
        vscode.CompletionItemKind.Snippet
      );

      // Set the snippet's body
      completionItem.insertText = new vscode.SnippetString(
        snippet.insertText.join("\n")
      );

      if (
        fs.existsSync(
          `${context.extensionPath}/snippets/tags/docs/${tagType}/${snippet.label}.md`
        )
      ) {
        const docsPath = path.join(
          `${context.extensionPath}/snippets/tags/docs/${tagType}/${snippet.label}.md`
        );

        if (docsPath) {
          const docs = fs.readFileSync(docsPath, "utf8");
          completionItem.documentation = new vscode.MarkdownString(docs);
        }
      }

      completionItems.push(completionItem);
    });
  });

  return completionItems;
}

module.exports = buildSnippet;
