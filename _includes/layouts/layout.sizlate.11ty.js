const eleventySizlate = require('eleventy-sizlate')
const template = `
<html>
    <title></title>
    <body>
        <h1></h1>
        <div id="container"></div>
        <nav>
            <a href="/example-1/">example 1</a>
            <a href="/example-2/">example 2</a>
            <a href="/example-3/">example 3</a>
            <a href="/example-4/">example 4</a>
        </nav>
    </body>
</html>`

const mappers = {
    tags: (data) => ({ 'ul': data.tags })
}

class Sizlate {
    data = {
        template,
    };

    render(data) {
        const layoutSelectors = {
            'h1': data.title,
            'title': data.title,
            '#container': data.content,
        }
        return eleventySizlate.render(data, layoutSelectors, mappers)
    }
}

module.exports = Sizlate;