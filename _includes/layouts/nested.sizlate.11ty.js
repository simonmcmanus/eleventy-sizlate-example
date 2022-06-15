const eleventySizlate = require('eleventy-sizlate')

const fs = require('fs')
const template = `
<h2></h2>
<p> Here is something else that you want to appear on the nested page. </p>
<div id="post"></div>
`

class SizlatePost {
    data = {
        layout: 'layouts/layout.sizlate.11ty.js'
    }

    postSelectors(data) {
        return {
            'h2': data.secondaryTitle,
            '#post': data.content,
        }
    }

    render(data) {
        const selectors = this.postSelectors(data)
        return eleventySizlate.render({ template }, selectors)
    }
}

module.exports = SizlatePost;