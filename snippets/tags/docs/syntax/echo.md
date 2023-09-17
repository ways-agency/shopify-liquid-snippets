## [echo](https://shopify.dev/docs/api/liquid/tags/echo)

Outputs an expression.

Using the `echo` tag is the same as wrapping an expression in curly brackets (`{{` and `}}`). However, unlike the curly bracket method, you can use the `echo` tag inside [liquid tags](https://shopify.dev/docs/api/liquid/tags/liquid).

**Tip**
You can use [filters](https://shopify.dev/docs/api/liquid/filters) on expressions inside `echo` tags.

```liquid
{% liquid
  echo expression
%}
```

**`expression`**  
The expression to be output.
