## [for](https://shopify.dev/docs/api/liquid/tags/for)

Renders an expression for every item in an array.

You can do a maximum of 50 iterations with a `for` loop. If you need to iterate over more than 50 items, then use the [paginate tag](https://shopify.dev/docs/api/liquid/tags/paginate) to split the items over multiple pages.

**Tip**  
Every `for` loop has an associated [forloop object](https://shopify.dev/docs/api/liquid/objects/forloop) with information about the loop.

```liquid
{% for variable in array %}
  expression
{% endfor %}
```

**`variable`**  
The current item in the array.

---

**`array`**  
The array to iterate over.

---

**expression**  
The expression to render for each iteration.

---

### [for tag parameters](https://shopify.dev/docs/api/liquid/tags/for#for-parameters)

#### [limit](https://shopify.dev/docs/api/liquid/tags/for#for-limit)

```liquid
{% for variable in array limit: number %}
  expression
{% endfor %}
```

You can limit the number of iterations using the `limit` parameter.

---

#### [offset](https://shopify.dev/docs/api/liquid/tags/for#for-offset)

```liquid
{% for variable in array offset: number %}
  expression
{% endfor %}
```

You can specify a 1-based index to start iterating at using the `offset` parameter.

---

#### [range](https://shopify.dev/docs/api/liquid/tags/for#for-range)

```liquid
{% for variable in (number..number) %}
  expression
{% endfor %}
```

Instead of iterating over specific items in an array, you can specify a numeric range to iterate over.

**Note**  
You can define the range using both literal and variable values.

---

#### [reversed](https://shopify.dev/docs/api/liquid/tags/for#for-reversed)

```liquid
{% for variable in array reversed %}
  expression
{% endfor %}
```

You can iterate in reverse order using the `reversed` parameter.
