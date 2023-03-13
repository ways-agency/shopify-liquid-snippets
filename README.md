# Shopify Liquid Snippets for Visual Studio Code

This extension is inspired by [Shopify Liquid Template Snippets](https://marketplace.visualstudio.com/items?itemName=killalau.vscode-liquid-snippets) from [Franky Lau](https://marketplace.visualstudio.com/publishers/killalau).

**Why a new extension?**

Looking at Franky Lau's Shopify Liquid Template Snippets, it looks like the repo is dead. However, the information on the VS Code marketplace says that the extension is updated every now and then. I don't know exactly when, because the changelog doesn't tell when the updates were made.

What I especially noticed is that there were some things missing in the extension that I, as a Shopify developer, would like to see. Shopify has added a lot of new features since the launch of 2.0, and is also changing a lot of features right now.

## Emmet

Since Liquid is considered HTML, Emmet needs to know that they need to be associated with each other.

1. Open the Command Palette (`Shift+Command+P` (Mac) / `Ctrl+Shift+P` (Windows/Linux))
2. Type `Open User settings (JSON)` and press enter

Add the following

```
"emmet.includeLanguages": { "liquid": "html" },
```
