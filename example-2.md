---
title: Using sizlate object in template
layout: layouts/layout.sizlate.11ty.js
sizlate: { 
    'html': {
        className: 'testPage'
    },
    ul: ['cheese', 'bacon']
}

---
This example takes the sizlate object in the  [front matter data](https://www.11ty.dev/docs/data-frontmatter/) and uses those selectors to modify the generated html document.

* example list item 1 