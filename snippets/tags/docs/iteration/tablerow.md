## [tablerow](https://shopify.dev/docs/api/liquid/tags/tablerow)

Generates HTML table rows for every item in an array.

The `tablerow` tag must be wrapped in HTML `<table>` and `</table>` tags.

**Tip**  
Every `tablerow` loop has an associated [tablerowloop object](https://shopify.dev/docs/api/liquid/objects/tablerowloop) with information about the loop.

```liquid
{% tablerow variable in array %}
  expression
{% endtablerow %}
```

**`variable`**  
The current item in the array.

---

**`array`**  
The array to iterate over.

---

**expression**  
The expression to render.

---

### [tablerow tag parameters](https://shopify.dev/docs/api/liquid/tags/tablerow#tablerow-parameters)

### [cols](https://shopify.dev/docs/api/liquid/tags/tablerow#tablerow-cols)

```liquid
{% tablerow variable in array cols: number %}
  expression
{% endtablerow %}
```

You can define how many columns the table should have using the `cols` parameter.

---

#### [limit](https://shopify.dev/docs/api/liquid/tags/tablerow#tablerow-limit)

```liquid
{% tablerow variable in array limit: number %}
  expression
{% endtablerow %}
```

You can limit the number of iterations using the `limit` parameter.

---

#### [offset](https://shopify.dev/docs/api/liquid/tags/tablerow#tablerow-offset)

```liquid
{% tablerow variable in array offset: number %}
  expression
{% endtablerow %}
```

You can specify a 1-based index to start iterating at using the `offset` parameter.

---

#### [range](https://shopify.dev/docs/api/liquid/tags/tablerow#tablerow-range)

```liquid
{% tablerow variable in (number..number) %}
  expression
{% endtablerow %}
```

Instead of iterating over specific items in an array, you can specify a numeric range to iterate over.

**Note**  
You can define the range using both literal and variable values.
