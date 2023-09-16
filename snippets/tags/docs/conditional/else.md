## [else](https://shopify.dev/docs/api/liquid/tags/conditional-else)

Allows you to specify a default expression to execute when no other condition is met.

You can use the `else` tag with the following tags:

- [`case`](https://shopify.dev/docs/api/liquid/tags/case)
- [`if`](https://shopify.dev/docs/api/liquid/tags/if)
- [`unless`](https://shopify.dev/docs/api/liquid/tags/unless)

```liquid
{% else %}
  expression
```

**expression**  
The expression to render if the condition is met.
