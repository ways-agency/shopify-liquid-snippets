## [stylesheet](https://shopify.dev/docs/api/liquid/tags/stylesheet)

CSS styles included in a [section](https://shopify.dev/themes/architecture/sections) file.

You need to use these tags only if your section or app block is meant to be installed on multiple themes or stores. Otherwise, you should include the CSS styles that your section needs in your theme's [assets](https://shopify.dev/themes/architecture#assets) directory. Each section or app block can have only one `{% stylesheet %}` tag.

To learn more about how section-specific CSS is loaded and run, refer to the documentation for [sections](https://shopify.dev/themes/architecture/sections/section-assets#stylesheet).

**Caution**  
Liquid isn't rendered inside of `{% stylesheet %}` tags. Including Liquid code can cause syntax errors.

```liquid
{% stylesheet %}
  css_styles
{% endstylesheet %}
```

**`css_styles`**  
The CSS styles for the section.
