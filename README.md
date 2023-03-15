# Shopify Liquid Snippets for Visual Studio Code

This extension is inspired by [Shopify Liquid Template Snippets](https://marketplace.visualstudio.com/items?itemName=killalau.vscode-liquid-snippets) from [Franky Lau](https://marketplace.visualstudio.com/publishers/killalau).

If you enjoy using this extension, buy me a 🍺

## Features

- `{%- liquid -%}` support;
- Latest Filters
- Latest Schema settings
- Latest Tags
- Predefined Shopify values (Choise lists)

## Demo

Insert gif or link to demo

## Requirements

- [Shopify Liquid](https://marketplace.visualstudio.com/items?itemName=Shopify.theme-check-vscode) extension

## Emmet

Since Liquid is considered HTML, Emmet needs to know that they need to be associated with each other.

1. Open the Command Palette (`Shift+Command+P` (Mac) / `Ctrl+Shift+P` (Windows/Linux))
2. Type `Open User settings (JSON)` and press enter

Add the following

```
"emmet.includeLanguages": { "liquid": "html" },
```

## Snippets

- Filters
  - Array
  - Cart
  - Collection
  - Color
  - Customer
  - Default
  - Font
  - Format
  - Hosted file
  - HTML
  - Localization
  - Math
  - Media
  - Metafield
  - Money
  - Payment
  - String
  - Tag
- Schema

  - Content
  - Input settings
  - Sidebar settings

- Tags
  - Conditional
  - HTML
  - Iteration
  - Syntax
  - Theme
  - Variable

## Feedback

If you have any feedback, please reach out to us at info@waysagency.com
