## [paginate](https://shopify.dev/docs/api/liquid/tags/paginate)

Splits an array's items across multiple pages.

Because [for loops](https://shopify.dev/docs/api/liquid/tags/for) are limited to 50 iterations per page, you need to use the `paginate` tag to iterate over an array that has more than 50 items. The following arrays can be paginated:

- [all_products](https://shopify.dev/docs/api/liquid/objects/all_products)
- [article.comments](https://shopify.dev/docs/api/liquid/objects/article#article-comments)
- [blog.articles](https://shopify.dev/docs/api/liquid/objects/blog#blog-articles)
- [collections](https://shopify.dev/docs/api/liquid/objects/collections)
- [collection.products](https://shopify.dev/docs/api/liquid/objects/collection#collection-products)
- [customer.addresses](https://shopify.dev/docs/api/liquid/objects/customer#customer-addresses)
- [customer.orders](https://shopify.dev/docs/api/liquid/objects/customer#customer-orders)
- [pages](https://shopify.dev/docs/api/liquid/objects/pages)
- [search.results](https://shopify.dev/docs/api/liquid/objects/search#search-results)
- [collection_list settings](https://shopify.dev/themes/architecture/settings/input-settings#collection_list)
- [product_list settings](https://shopify.dev/themes/architecture/settings/input-settings#product_list)

Within the `paginate` tag, you have access to the [paginate object](https://shopify.dev/docs/api/liquid/objects/paginate). You can use this object, or the [default_pagination filter](https://shopify.dev/docs/api/liquid/filters/default_pagination), to build page navigation.

```liquid
{% paginate array by page_size %}
  {% for item in array %}
    forloop_content
  {% endfor %}
{% endpaginate %}
```

**`array`**  
The array to be looped over.

---

**`page_size`**  
The number of array items to include per page, between 1 and 50.

---

**`item`**  
An item in the array being looped.

---

**forloop_content**  
Content for each loop iteration.

---

#### [Paginating setting arrays](https://shopify.dev/docs/api/liquid/tags/paginate#paginate-paginating-setting-arrays)

To allow the pagination of `product_list` and `collection_list` settings to operate independently from other paginated lists on a page, these lists use a pagination query parameter with a unique key. The key is automatically assigned by the `paginate` tag, and you don't need to reference the key in your code. However, you can access the key using [paginate.page_param](https://shopify.dev/docs/api/liquid/objects/paginate#paginate-page_param).

**Tip**  
To paginate two arrays independently without refreshing the entire page, you can use the [Section Rendering API](https://shopify.dev/api/section-rendering).

---

### [paginate tag parameters](https://shopify.dev/docs/api/liquid/tags/paginate#paginate-parameters)

#### [window_size](https://shopify.dev/docs/api/liquid/tags/paginate#paginate-window_size)

```liquid
{% paginate collection.products by 3, window_size: 1 %}
```

Set the window size of the pagination. The window size is the number of pages that should be visible in the pagination navigation.
