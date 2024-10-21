const fs = require("fs");
const path = require("path");
const vscode = require("vscode");

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
  context.subscriptions.push(registerLiquidSnippets);
}

module.exports = {
  activate,
};
