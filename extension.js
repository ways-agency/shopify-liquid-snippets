const vscode = require("vscode");
const fs = require("fs");
const path = require("path");

function getSnippet(context, isLiquid = false) {
  let allSnippets = {};

  ["conditional", "iteration", "syntax", "theme", "variable"].forEach((snippetType) => {
    const snippetPath = isLiquid
      ? path.join(
          context.extensionPath,
          "snippets",
          "tags",
          "liquid",
          `${snippetType}.code-snippets`
        )
      : path.join(context.extensionPath, "snippets", "tags", `${snippetType}.code-snippets`);
    const snippetsContent = fs.readFileSync(snippetPath, "utf-8");

    allSnippets = {
      ...allSnippets,
      ...JSON.parse(snippetsContent),
    };
  });

  return allSnippets;
}

function activate(context) {
  const disposable = vscode.languages.registerCompletionItemProvider(
    "liquid", // language ID for Liquid files
    {
      provideCompletionItems(document, position) {
        // Get the entire text of the document
        const text = document.getText();

        // Check if the cursor is inside the {%- liquid ... -%} tags using a regex
        const regex = /\{%-\s*liquid([\s\S]*?)-%\}/g;

        let match;
        const completionItems = [];

        while ((match = regex.exec(text)) !== null) {
          const allSnippets = getSnippet(context, (isLiquid = true));

          const start = match.index + match[0].indexOf("liquid") + 7;
          const end = match.index + match[0].lastIndexOf("-%}") + 1;

          // Check if the cursor is within the Liquid tags
          if (
            position.isAfter(
              new vscode.Position(
                document.positionAt(start).line,
                document.positionAt(start).character
              )
            ) &&
            position.isBefore(
              new vscode.Position(document.positionAt(end).line, document.positionAt(end).character)
            )
          ) {
            for (const key in allSnippets) {
              if (Object.hasOwnProperty.call(allSnippets, key)) {
                const snippet = allSnippets[key];

                const completionItem = new vscode.CompletionItem(
                  snippet.prefix,
                  vscode.CompletionItemKind.Snippet
                );
                if (Array.isArray(snippet.body)) {
                  completionItem.insertText = new vscode.SnippetString(snippet.body.join("\n"));
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

        const allSnippets = getSnippet(context);

        for (const key in allSnippets) {
          if (Object.hasOwnProperty.call(allSnippets, key)) {
            const snippet = allSnippets[key];

            const completionItem = new vscode.CompletionItem(
              snippet.prefix,
              vscode.CompletionItemKind.Snippet
            );
            if (Array.isArray(snippet.body)) {
              completionItem.insertText = new vscode.SnippetString(snippet.body.join("\n"));
            } else {
              completionItem.insertText = new vscode.SnippetString(snippet.body);
            }
            completionItem.documentation = snippet.description;

            completionItems.push(completionItem);
          }
        }

        // If the cursor is not inside the {%- liquid -%} tags, return tags with syntax
        return completionItems;
      },
    }
  );

  context.subscriptions.push(disposable);
}

module.exports = {
  activate,
};
