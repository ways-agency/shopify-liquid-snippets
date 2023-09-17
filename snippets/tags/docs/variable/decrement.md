## [decrement](https://shopify.dev/docs/api/liquid/tags/decrement)

Creates a new variable, with a default value of -1, that's decreased by 1 with each subsequent call.

Variables that are declared with `decrement` are unique to the [layout](https://shopify.dev/themes/architecture/layouts), [template](https://shopify.dev/themes/architecture/templates), or [section](https://shopify.dev/themes/architecture/sections) file that they're created in. However, the variable is shared across [snippets](https://shopify.dev/themes/architecture#snippets) included in the file.

Similarly, variables that are created with `decrement` are independent from those created with [assign](https://shopify.dev/docs/api/liquid/tags/assign) and [capture](https://shopify.dev/docs/api/liquid/tags/capture). However, `decrement` and [increment](https://shopify.dev/docs/api/liquid/tags/increment) share variables.

```liquid
{% decrement variable_name %}
```

**`variable_name`**
The name of the variable being decremented.
