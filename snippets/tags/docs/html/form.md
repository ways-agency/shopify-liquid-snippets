## [form](https://shopify.dev/docs/api/liquid/tags/form)

Generates an HTML `<form>` tag, including any required `<input>` tags to submit the form to a specific endpoint.

Because there are many different form types available in Shopify themes, the `form` tag requires a type. Depending on the form type, an additional parameter might be required. You can specify the following form types:

- [activate_customer_password](https://shopify.dev/docs/api/liquid/tags/form#form-activate_customer_password)
- [cart](https://shopify.dev/docs/api/liquid/tags/form#form-cart)
- [contact](https://shopify.dev/docs/api/liquid/tags/form#form-contact)
- [create_customer](https://shopify.dev/docs/api/liquid/tags/form#form-create_customer)
- [currency](https://shopify.dev/docs/api/liquid/tags/form#form-currency)
- [customer](https://shopify.dev/docs/api/liquid/tags/form#form-customer)
- [customer_address](https://shopify.dev/docs/api/liquid/tags/form#form-customer_address)
- [customer_login](https://shopify.dev/docs/api/liquid/tags/form#form-customer_login)
- [guest_login](https://shopify.dev/docs/api/liquid/tags/form#form-guest_login)
- [localization](https://shopify.dev/docs/api/liquid/tags/form#form-localization)
- [new_comment](https://shopify.dev/docs/api/liquid/tags/form#form-new_comment)
- [product](https://shopify.dev/docs/api/liquid/tags/form#form-product)
- [recover_customer_password](https://shopify.dev/docs/api/liquid/tags/form#form-recover_customer_password)
- [reset_customer_password](https://shopify.dev/docs/api/liquid/tags/form#form-reset_customer_password)
- [storefront_password](https://shopify.dev/docs/api/liquid/tags/form#form-storefront_password)

---

```liquid
{% form 'form_type' %}
  content
{% endform %}
```

---

**`form_type`**  
The name of the desired form type

---

**content**  
The form contents

---

#### [activate_customer_password](https://shopify.dev/docs/api/liquid/tags/form#form-activate_customer_password)

```liquid
{% form 'activate_customer_password', article %}
  form_content
{% endform %}
```

Generates a form for activating a customer account. To learn more about using this form, and its contents, refer to the [customers/activate_account template](https://shopify.dev/themes/architecture/templates/customers-activate-account#content).

---

#### [cart](https://shopify.dev/docs/api/liquid/tags/form#form-cart)

```liquid
{% form 'cart', cart %}
  form_content
{% endform %}
```

Generates a form for creating a checkout based on the items currently in the cart. The `cart` form requires a [cart object](https://shopify.dev/docs/api/liquid/objects/cart) as a parameter. To learn more about using the cart form in your theme, refer to the [cart template](https://shopify.dev/themes/architecture/templates/cart#proceed-to-checkout).

---

#### [contact](https://shopify.dev/docs/api/liquid/tags/form#form-contact)

```liquid
{% form 'contact' %}
  form_content
{% endform %}
```

Generates a form for submitting an email to the merchant. To learn more about using this form in your theme, refer to [Add a contact form to your theme](https://shopify.dev/themes/customer-engagement/add-contact-form).

**Tip**  
To learn more about the merchant experience of receiving submissions, refer to [the Shopify Help Center](https://help.shopify.com/manual/online-store/themes/customizing-themes/add-contact-page#view-contact-form-submissions).

---

#### [create_customer](https://shopify.dev/docs/api/liquid/tags/form#form-create_customer)

```liquid
{% form 'create_customer' %}
  form_content
{% endform %}
```

Generates a form for creating a new customer account. To learn more about using this form, and its contents, refer to the [customers/register template](https://shopify.dev/themes/architecture/templates/customers-register#content).

---

#### [customer](https://shopify.dev/docs/api/liquid/tags/form#form-customer)

```liquid
{% form 'customer' %}
  form_content
{% endform %}
```

Generates a form for creating a new customer without registering a new account. This form is useful for collecting customer information when you don't want customers to log in to your store, such as building a list of emails from a newsletter signup.

**Tip**  
To generate a form that registers a customer account, use the [create_customer form](https://shopify.dev/docs/api/liquid/tags/form#form-create_customer).

To learn more about using this form, and its contents, refer to [Email consent](https://shopify.dev/themes/customer-engagement/email-consent#newsletter-sign-up-form).

---

#### [customer_address](https://shopify.dev/docs/api/liquid/tags/form#form-customer_address)

```liquid
{% form 'customer_address', address_type %}
  form_content
{% endform %}
```

Generates a form for creating a new address on a customer account, or editing an existing one. The `customer_address` form requires a specific parameter, depending on whether a new address is being created or an existing one is being edited:

| Parameter value        | Use-case                                  |
| ---------------------- | ----------------------------------------- |
| `customer.new_address` | When a new address is being created.      |
| `address`              | When an existing address is being edited. |

To learn more about using this form, and its contents, refer to the [customers/addresses template](https://shopify.dev/themes/architecture/templates/customers-addresses#content).

---

#### [customer_login](https://shopify.dev/docs/api/liquid/tags/form#form-customer_login)

```liquid
{% form 'customer_login' %}
  form_content
{% endform %}
```

Generates a form for logging into a customer account. To learn more about using this form, and its contents, refer to the [customers/login template](https://shopify.dev/themes/architecture/templates/customers-login#the-customer-login-form).

---

#### [guest_login](https://shopify.dev/docs/api/liquid/tags/form#form-guest_login)

```liquid
{% form 'guest_login' %}
  form_content
{% endform %}
```

Generates a form, for use in the [customers/login template](https://shopify.dev/themes/architecture/templates/customers-login), that directs customers back to their checkout session as a guest instead of logging in to an account. To learn more about using this form, and its contents, refer to [Offer guest checkout](https://shopify.dev/themes/architecture/templates/customers-login#offer-guest-checkout).

---

#### [localization](https://shopify.dev/docs/api/liquid/tags/form#form-localization)

```liquid
{% form 'localization' %}
  form_content
{% endform %}
```

Generates a form for customers to select their preferred country so that they're shown the appropriate language and currency. The `localization` form can contain one of two selectors:

- A country selector
- A language selector

To learn more about using this form, and its contents, refer to [Support multiple currencies and languages](https://shopify.dev/themes/internationalization/multiple-currencies-languages).

---

#### [new_comment](https://shopify.dev/docs/api/liquid/tags/form#form-new_comment)

```liquid
{% form 'new_comment', article %}
  form_content
{% endform %}
```

Generates a form for creating a new comment on an article. The `new_comment` form requires an [article object](https://shopify.dev/docs/api/liquid/objects/article) as a parameter. To learn more about using this form, and its contents, refer to the [article template](https://shopify.dev/themes/architecture/templates/article#the-comment-form).

---

#### [product](https://shopify.dev/docs/api/liquid/tags/form#form-product)

```liquid
{% form 'product', product %}
  form_content
{% endform %}
```

Generates a form for adding a product variant to the cart. The `product` form requires a [product object](https://shopify.dev/docs/api/liquid/objects/product) as a parameter. To learn more about using this form, and its contents, refer to the [product template](https://shopify.dev/themes/architecture/templates/product#the-product-form).

---

#### [recover_customer_password](https://shopify.dev/docs/api/liquid/tags/form#form-recover_customer_password)

```liquid
{% form 'recover_customer_password' %}
  form_content
{% endform %}
```

Generates a form, for use in the [customers/login template](https://shopify.dev/themes/architecture/templates/customers-login), for a customer to recover a lost or forgotten password. To learn more about using this form, and its contents, refer to [Provide a "Forgot your password" option](https://shopify.dev/themes/architecture/templates/customers-login#provide-a-forgot-your-password-option).

---

#### [reset_customer_password](https://shopify.dev/docs/api/liquid/tags/form#form-reset_customer_password)

```liquid
{% form 'reset_customer_password' %}
  form_content
{% endform %}
```

Generates a form for a customer to reset their password. To learn more about using this form, and its contents, refer to the [customers/reset_password template](https://shopify.dev/themes/architecture/templates/customers-reset-password#content).

---

#### [storefront_password](https://shopify.dev/docs/api/liquid/tags/form#form-storefront_password)

```liquid
{% form 'storefront_password' %}
  form_content
{% endform %}
```

Generates a form for entering a password protected storefront. To learn more about using this form, and its contents, refer to the [password template](https://shopify.dev/themes/architecture/templates/password#the-password-form).

---

### [form tag parameters](https://shopify.dev/docs/api/liquid/tags/form#form-parameters)

#### [return_to](https://shopify.dev/docs/api/liquid/tags/form#form-return_to)

```liquid
{% form 'form_type', return_to: string %}
  content
{% endform %}
```

By default, each form type redirects customers to a specific page after the form submits. For example, the `product` form redirects to the cart page.

The `return_to` parameter allows you to specify a URL to redirect to. This can be done with the following values:

| Value                                                                    | Description                                                                         |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| `back`                                                                   | Redirect back to the same page that the customer was on before submitting the form. |
| A relative path                                                          | A specific URL path. For example `/collections/all`.                                |
| A [routes attribute](https://shopify.dev/docs/api/liquid/objects/routes) | For example, `routes.root`                                                          |

---

#### [HTML attributes](https://shopify.dev/docs/api/liquid/tags/form#form-html-attributes)

```liquid
{% form 'form_type', attribute: string %}
  content
{% endform %}
```

You can specify [HTML attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attributes) by adding a parameter that matches the attribute name with `data-` prepended, and the desired value.
