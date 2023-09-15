const vscode = require("vscode");

function insideTags(document, position, regex) {
  const text = document.getText();

  let match;

  while ((match = regex.exec(text)) !== null) {
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
      return true;
    }
  }

  return false;
}

module.exports = insideTags;
