function insideTags(document, position, regex) {
  const text = document.getText();

  let match;

  while ((match = regex.exec(text)) !== null) {
    const tagStart = document.positionAt(match.index);
    const tagEnd = document.positionAt(match.index + match[0].length);

    // Check if the cursor is within the Liquid tags
    if (position.isAfterOrEqual(tagStart) && position.isBeforeOrEqual(tagEnd)) {
      return true;
    }
  }

  return false;
}

module.exports = insideTags;
