## [when](https://shopify.dev/docs/api/liquid/tags/case)

Determines the output based on the variable's value in order to render a specific expression.

```liquid
{% when value %}
  expression
```

**`value`**  
A specific value to check for.

---

**`expression`**  
An expression to be rendered when the variable's value matches `value`.

---

### Multiple values

```liquid
{% case variable %}
  {% when first_value or second_value or third_value %}
    first_expression
  {% when fourth_value, fifth_value, sixth_value %}
    second_expression
  {% else %}
    third_expression
{% endcase %}
```

A `when` tag can accept multiple values. When multiple values are provided, the expression is returned when the variable matches any of the values inside of the tag. Provide the values as a comma-separated list, or separate them using an `or` operator.
