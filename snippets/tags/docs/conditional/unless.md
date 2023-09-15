### [unless](https://shopify.dev/docs/api/liquid/tags/unless)

Renders an expression unless a specific condition is `true`.

---

**Tip**

Similar to the [`if` tag](https://shopify.dev/docs/api/liquid/tags/if), you can use `elsif` to add more conditions to an `unless` tag.

---

```liquid
{% unless condition %}
  expression
{% endunless %}
```

**condition**  
The condition to evaluate.

---

**expression**  
The expression to render if the condition is met.
