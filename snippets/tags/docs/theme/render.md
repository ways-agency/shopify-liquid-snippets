## [render](https://shopify.dev/docs/api/liquid/tags/render)

Renders a [snippet](https://shopify.dev/themes/architecture#snippets) or [app block](https://shopify.dev/themes/architecture/sections/section-schema#render-app-blocks).

Inside snippets and app blocks, you can't directly access variables that are [created](https://shopify.dev/docs/api/liquid/tags/variable-tags) outside of the snippet or app block. However, you can [specify variables as parameters](https://shopify.dev/docs/api/liquid/tags/render#render-passing-variables-to-a-snippet) to pass outside variables to snippets.

While you can't directly access created variables, you can access global objects, as well as any objects that are directly accessible outside the snippet or app block. For example, a snippet or app block inside the [product template](https://shopify.dev/themes/architecture/templates/product) can access the [product object](https://shopify.dev/docs/api/liquid/objects/product), and a snippet or app block inside a [section](https://shopify.dev/themes/architecture/sections) can access the [section object](https://shopify.dev/docs/api/liquid/objects/section).

Outside a snippet or app block, you can't access variables created inside the snippet or app block.

**Note**  
When you render a snippet using the `render` tag, you can't use the [include tag](https://shopify.dev/docs/api/liquid/tags/include) inside the snippet.

```liquid
{% render 'filename' %}
```

**`filename`**  
The name of the snippet to render, without the `.liquid` extension.

---

### [render tag parameters](https://shopify.dev/docs/api/liquid/tags/render#render-parameters)

#### [for](https://shopify.dev/docs/api/liquid/tags/render#render-for)

```liquid
{% render 'filename' for array as item %}
```

You can render a snippet for every item in an array using the `for` parameter. You can also supply an optional `as` parameter to be able to reference the current item in the iteration inside the snippet. Additionally, you can access a [forloop object](https://shopify.dev/docs/api/liquid/objects/forloop) for the loop inside the snippet.

---

#### [Passing variables to a snippet](https://shopify.dev/docs/api/liquid/tags/render#render-passing-variables-to-a-snippet)

```liquid
{% render 'filename', variable: value %}
```

Variables that have been [created](https://shopify.dev/docs/api/liquid/tags/variable-tags) outside of a snippet can be passed to a snippet as parameters on the `render` tag.

**Note**  
Any changes that are made to a passed variable apply only within the snippet.

---

#### [with](https://shopify.dev/docs/api/liquid/tags/render#render-with)

```liquid
{% render 'filename' with object as name %}
```

You can pass a single object to a snippet using the `with` parameter. You can also supply an optional `as` parameter to specify a custom name to reference the object inside the snippet.
