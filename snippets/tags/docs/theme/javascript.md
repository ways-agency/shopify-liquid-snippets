## [javascript](https://shopify.dev/docs/api/liquid/tags/javascript)

JavaScript code included in a [section](https://shopify.dev/themes/architecture/sections) file.

You need to use these tags only if your section or app block is meant to be installed on multiple themes or stores. Otherwise, you should include the JavaScript that your section needs in your theme's [assets](https://shopify.dev/themes/architecture#assets) directory. Each section or app block can have only one `{% javascript %}` tag.

To learn more about how section-specific JavaScript is loaded and run, refer to the documentation for [sections](https://shopify.dev/themes/architecture/sections/section-assets#javascript).

**Caution**  
Liquid isn't rendered inside of {% javascript %} tags. Including Liquid code can cause syntax errors.

```liquid
{% javascript %}
  javascript_code
{% endjavascript %}
```

**`javascript_code`**  
The JavaScript code for the section.
