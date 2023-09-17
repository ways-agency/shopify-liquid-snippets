## [layout](https://shopify.dev/docs/api/liquid/tags/layout)

Specify which [layout](https://shopify.dev/themes/architecture/layouts) to use.

```liquid
{% layout name %}
```

**`name`**  
The name of the layout file you want to use, wrapped in quotes, or `none` for no layout.

---

By default, the `theme.liquid` layout is used. The `layout` tag allows you to specify an alternate layout, or use no layout.

```liquid
{% layout 'full-width' %}
{% layout none %}
```
