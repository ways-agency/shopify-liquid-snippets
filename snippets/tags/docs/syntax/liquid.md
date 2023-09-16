## [liquid](https://shopify.dev/docs/api/liquid/tags/liquid)

Allows you to have a block of Liquid without delimeters on each tag.

Because the tags don't have delimeters, each tag needs to be on its own line.

**Tip**  
Use the [`echo` tag](https://shopify.dev/docs/api/liquid/tags/echo) to output an expression inside `liquid` tags.

```liquid
{% liquid
  expression
%}
```

**`expression`**  
The expression to be rendered inside the `liquid` tag.
