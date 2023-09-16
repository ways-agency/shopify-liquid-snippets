## [comment](https://shopify.dev/docs/api/liquid/tags/comment)

Prevents an expression from being rendered or output.

Any text inside `comment` tags won't be output, and any Liquid code will be parsed, but not executed.

```liquid
{% comment %}
  content
{% endcomment %}
```

**content**  
The content of the comment.

---

#### [Inline comments](https://shopify.dev/docs/api/liquid/tags/comment#comment-inline-comments)

```liquid
{% # content %}
```

Inline comments prevent an expression inside of a tag `{% %}` from being rendered or output.

You can use inline comment tags to annotate your code, or to temporarily prevent logic in your code from executing.

You can create multi-line inline comments. However, each line in the tag must begin with a `#`, or a syntax error will occur.

---

#### [Inline comments inside liquid tags](https://shopify.dev/docs/api/liquid/tags/comment#comment-inline-comments-inside-liquid-tags)

You can use inline comment tags inside [liquid tags](https://shopify.dev/docs/api/liquid/tags/liquid). The tag must be used for each line that you want to comment.

```liquid
{% liquid
  # this is a comment
  assign topic = 'Learning about comments!'
  echo topic
%}
```
