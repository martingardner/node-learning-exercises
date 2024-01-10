var dateTime = require('./dateTime');


exports.htmlSnippet = () => {
    return(`<main>
        <h1>Hello World</h1>
        <section>
            The time is ${dateTime.myDateTime()}
        </section>
    </main>
    `)
}