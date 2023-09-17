## [cycle](https://shopify.dev/docs/api/liquid/tags/cycle)

Loops through a group of strings and outputs them one at a time for each iteration of a [for loop](https://shopify.dev/docs/api/liquid/tags/for).

The `cycle` tag must be used inside a `for` loop.

**Tip**  
Use the `cycle` tag to output text in a predictable pattern. For example, to apply odd/even classes to rows in a table.

```liquid
{% cycle string, string, ... %}
```

---

#### [Create unique cycle groups](https://shopify.dev/docs/api/liquid/tags/cycle#cycle-create-unique-cycle-groups)

```liquid
{% cycle string: string, string, ... %}
```

If you include multiple `cycle` tags with the same parameters, in the same template, then each set of tags is treated as the same group. This means that it's possible for a `cycle` tag to output any of the provided strings, instead of always starting at the first string. To account for this, you can specify a group name for each `cycle` tag.
