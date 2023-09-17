## [increment](https://shopify.dev/docs/api/liquid/tags/increment)

Creates a new variable, with a default value of 0, that's increased by 1 with each subsequent call.

Variables that are declared with `increment` are unique to the [layout](https://shopify.dev/themes/architecture/layouts), [template](https://shopify.dev/themes/architecture/templates), or [section](https://shopify.dev/themes/architecture/sections) file that they're created in. However, the variable is shared across [snippets](https://shopify.dev/themes/architecture#snippets) included in the file.

Similarly, variables that are created with `increment` are independent from those created with [assign](https://shopify.dev/docs/api/liquid/tags/assign) and [capture](https://shopify.dev/docs/api/liquid/tags/capture). However, `increment` and [decrement](https://shopify.dev/docs/api/liquid/tags/decrement) share variables.

```liquid
{% increment variable_name %}
```

**`variable_name`**  
The name of the variable being incremented.
