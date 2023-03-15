const vscode = require('vscode');

const recommendedExtensions = [
  {
    id: 'shopify.theme-check-vscode',
    name: 'Shopify Liquid'
  }
];

const notRecommendedExtensions = []

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, your extension "test" is now active!');

	vscode.window.showInformationMessage('Niceeeee!');

  console.log('Extension is now active.');

  // Check if each recommended extension is installed
  for (const extension of recommendedExtensions) {
    const extensionExists = vscode.extensions.all.some(e => e.id === extension.id);

    if (!extensionExists) {
      // Prompt the user to install the recommended extension
      vscode.window.showInformationMessage(`The ${extension.name} extension is recommended for this extension. Do you want to install it now?`, 'Yes', 'No').then(install => {
        if (install === 'Yes') {
          vscode.commands.executeCommand('workbench.extensions.installExtension', extension.id);
        }
      });
    }
  }
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}