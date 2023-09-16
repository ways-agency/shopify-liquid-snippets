## [else](https://shopify.dev/docs/api/liquid/tags/iteration-else)

Allows you to specify a default expression to execute when a [`for` loop](https://shopify.dev/docs/api/liquid/tags/for) has zero length.

```liquid
{% for variable in array %}
  first_expression
{% else %}
  second_expression
{% endfor %}
```

**`variable`**  
The current item in the array.

---

**`array`**  
The array to iterate over.

---

**first_expression**  
The expression to render for each iteration.

---

**second_expression**  
The expression to render if the loop has zero length.
