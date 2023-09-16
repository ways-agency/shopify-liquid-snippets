## [case](https://shopify.dev/docs/api/liquid/tags/case)

Renders a specific expression depending on the value of a specific variable.

---

**Tip**  
Similar to the [`if` tag](https://shopify.dev/docs/api/liquid/tags/if), you can use `elsif` to add more conditions to an `unless` tag.

```liquid
{% case variable %}
  {% when first_value %}
    first_expression
  {% when second_value %}
    second_expression
  {% else %}
    third_expression
{% endcase %}
```

**`variable`**  
The name of the variable you want to base your case statement on.

---

**`first_value`**  
A specific value to check for.

---

**`second_value`**  
A specific value to check for.

---

**first_expression**  
An expression to be rendered when the variable's value matches `first_value`.

---

**second_expression**  
An expression to be rendered when the variable's value matches `second_value`.

---

**third_expression**  
An expression to be rendered when the variable's value has no match.

---

#### Multiple values

```
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
