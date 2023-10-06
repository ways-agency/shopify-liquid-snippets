const fs = require("fs");
const path = require("path");
const vscode = require("vscode");
const { getLanguageService } = require("vscode-html-languageservice");
const { TextDocument } = require("vscode-languageserver-textdocument");

const insideTags = require("./helpers/inside-tags");
const buildSnippet = require("./helpers/build-snippet");

function activate(context) {
  const tagTypes = [
    "commonly-used",
    "conditional",
    "html",
    "iteration",
    "syntax",
    "theme",
    "variable",
  ];
  const snippetsBasePath = path.join(`${context.extensionPath}/snippets`);

  const tagsBasePath = path.join(`${snippetsBasePath}/tags`);
  const tagsLiquidPath = path.join(`${tagsBasePath}/liquid`);

  const schemaTypes = ["content", "input-settings", "sidebar-settings"];
  const schemaBasePath = path.join(`${snippetsBasePath}/schema`);

  const registerHTMLService = vscode.languages.registerCompletionItemProvider(
    "liquid", // Language ID for .liquid files
    {
      provideCompletionItems(document, position) {
        try {
          // Initialize HTML language service
          const service = getLanguageService();

          // Create a TextDocument object
          const textDocument = TextDocument.create(
            document.uri,
            "liquid", // Use the appropriate language ID
            document.version,
            document.getText() // Retrieve the text content
          );

          // Retrieve HTML autocompletion suggestions
          const completions = service.doComplete(
            textDocument,
            position,
            service.parseHTMLDocument(textDocument)
          );

          // Return completion items
          return completions.items.map((item) => {
            // translate to vscode items
            const completionItem = new vscode.CompletionItem(
              item.label,
              item.kind
            );

            if (item.documentation?.value) {
              completionItem.documentation = new vscode.MarkdownString(
                item.documentation.value
              );
            }

            // add insert text
            completionItem.insertText = new vscode.SnippetString(
              item.textEdit.newText
            );

            return completionItem;
          });
        } catch (error) {
          return [];
        }
      },
    },
    "<" // Trigger autocompletion when '<' is typed
  );

  const registerLiquidSnippets =
    vscode.languages.registerCompletionItemProvider(
      "liquid", // language ID for Liquid files
      {
        provideCompletionItems(document, position) {
          try {
            const insideLiquidTags = insideTags(
              document,
              position,
              /{%-?\s*liquid([\s\S]*?)-?%}/g
            );

            const insideSchemaTags = insideTags(
              document,
              position,
              /{%-?\s*schema-?\s*%}([\s\S]*?){%-?\s*endschema-?\s*%}/g
            );

            const completionItems = [];

            if (insideLiquidTags) {
              completionItems.push(
                ...buildSnippet(tagTypes, context, tagsLiquidPath)
              );
            } else if (insideSchemaTags) {
              completionItems.push(
                ...buildSnippet(schemaTypes, context, schemaBasePath)
              );
            } else {
              completionItems.push(
                ...buildSnippet(tagTypes, context, tagsBasePath)
              );
            }

            return completionItems;
          } catch (error) {
            // Handle errors here
            return []; // Return an empty array or null to indicate no completions or handle the error gracefully.
          }
        },
      }
    );

  // Register a completion provider for .liquid files
  context.subscriptions.push(registerHTMLService, registerLiquidSnippets);
}

module.exports = {
  activate,
};
