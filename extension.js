const vscode = require('vscode');

const recommendedExtensions = [
  {
    id: 'shopify.theme-check-vscode',
    name: 'Shopify Liquid'
  }
];

const notRecommendedExtensions = [
  {
    id: 'sissel.shopify-liquid',
    name: 'Liquid'
  },
  {
    id: 'neilding.language-liquid',
    name: 'Liquid Languages Support'
  },
  {
    id: 'killalau.vscode-liquid-snippets',
    name: 'Shopify Liquid Template Snippets'
  }
]

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let message = 'The following extensions are recommended for this extension:\n\n';

  recommendedExtensions.forEach(({id, name}) => {
    const extension = vscode.extensions.getExtension(id);

    if (!extension) {
      message += `- ${name}\n`;
    }
  });

  if (message !== 'The following extensions are recommended for this extension:\n\n') {
    message += 'Do you want to install them now?';
    vscode.window.showInformationMessage(message, {modal: true}, 'Yes', 'No')
    .then(install => {
      if (install === 'Yes') {
        recommendedExtensions.forEach(({id}) => {
          vscode.commands.executeCommand('workbench.extensions.installExtension', id);
        });
      }
      vscode.window.showInformationMessage('Extensions installed successfully. Please reload the editor for changes to take effect.', 'Reload')
      .then(reload => {
        if (reload === 'Reload') {
          vscode.commands.executeCommand('workbench.action.reloadWindow');
        }
      });
    });
  }

  message = 'The following extensions are not recommended for this extension:\n\n';

  notRecommendedExtensions.forEach(({id, name}) => {
    const extension = vscode.extensions.getExtension(id);

    if (extension) {
      message += `- ${name}\n`;
    }
  });

  if (message !== 'The following extensions are not recommended for this extension:\n\n') {
    message += 'Do you want to uninstall them now?';
    vscode.window.showWarningMessage(message, {modal: true}, 'Yes', 'No')
    .then(uninstall => {
      if (uninstall === 'Yes') {
        notRecommendedExtensions.forEach(({id}) => {
          vscode.commands.executeCommand('workbench.extensions.uninstallExtension', id);
        });
      }
      vscode.window.showInformationMessage('Extensions uninstalled successfully. Please reload the editor for changes to take effect.', 'Reload')
      .then(reload => {
        if (reload === 'Reload') {
          vscode.commands.executeCommand('workbench.action.reloadWindow');
        }
      });
    });
  }
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}