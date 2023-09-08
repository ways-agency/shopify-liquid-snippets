const vscode = require("vscode");
const fs = require("fs");
const path = require("path");
const { getLanguageService } = require("vscode-html-languageservice");

function getSnippet(context, isLiquid = false) {
  let allSnippets = {};
  const snippetTypes = [
    "conditional",
    "iteration",
    "syntax",
    "theme",
    "variable",
  ];

  snippetTypes.forEach((snippetType) => {
    const snippetPath = isLiquid
      ? path.join(
          `${context.extensionPath}/snippets/tags/liquid/${snippetType}.code-snippets`
        )
      : path.join(
          `${context.extensionPath}/snippets/tags/${snippetType}.code-snippets`
        );
    const snippetsContent = fs.readFileSync(snippetPath, "utf-8");

    allSnippets = {
      ...allSnippets,
      ...JSON.parse(snippetsContent),
    };
  });

  return allSnippets;
}

function activate(context) {
  const registerHtmlLanguageService =
    vscode.languages.registerCompletionItemProvider(
      "liquid", // Language ID for .liquid files
      {
        provideCompletionItems(document, position) {
          // Initialize HTML language service
          const htmlLanguageService = getLanguageService();

          // Retrieve HTML autocompletion suggestions
          const htmlCompletions = htmlLanguageService.doComplete(
            document.getText(),
            position
          );

          // Convert HTML completions to VS Code completion items
          const completionItems = htmlCompletions.items.map((item) => {
            const completionItem = new vscode.CompletionItem(
              item.label,
              vscode.CompletionItemKind.Keyword
            );
            completionItem.documentation = item.documentation;
            return completionItem;
          });

          return completionItems;
        },
      },
      "<" // Trigger autocompletion when '<' is typed
    );

  const registerLiquidSnippets =
    vscode.languages.registerCompletionItemProvider(
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

            // Get the start and end positions of the {%- liquid -%} tags
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
                new vscode.Position(
                  document.positionAt(end).line,
                  document.positionAt(end).character
                )
              )
            ) {
              for (const snippet of Object.values(allSnippets)) {
                const completionItem = new vscode.CompletionItem(
                  snippet.prefix,
                  vscode.CompletionItemKind.Snippet
                );
                if (Array.isArray(snippet.body)) {
                  completionItem.insertText = new vscode.SnippetString(
                    snippet.body.join("\n")
                  );
                } else {
                  completionItem.insertText = new vscode.SnippetString(
                    snippet.body
                  );
                }
                completionItem.documentation = snippet.description;

                completionItems.push(completionItem);
              }

              // If the cursor is inside the {%- liquid -%} tags, return tags without syntax
              return completionItems;
            }
          }

          const allSnippets = getSnippet(context);

          for (const snippet of Object.values(allSnippets)) {
            const completionItem = new vscode.CompletionItem(
              snippet.prefix,
              vscode.CompletionItemKind.Snippet
            );
            if (Array.isArray(snippet.body)) {
              completionItem.insertText = new vscode.SnippetString(
                snippet.body.join("\n")
              );
            } else {
              completionItem.insertText = new vscode.SnippetString(
                snippet.body
              );
            }
            completionItem.documentation = snippet.description;

            completionItems.push(completionItem);
          }

          // If the cursor is not inside the {%- liquid -%} tags, return tags with syntax
          return completionItems;
        },
      }
    );

  // Register a completion provider for .liquid files
  context.subscriptions.push(
    registerHtmlLanguageService,
    registerLiquidSnippets
  );
}

module.exports = {
  activate,
};
