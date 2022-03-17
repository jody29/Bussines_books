import { renderArticles, renderBooks } from "./renders.js"

const render = (data, output, query) => {
    const display = document.querySelector('.results')
    const books = data.results // get the results
    const articles = output.results
    const results = books.length + articles.length
    const loader = document.querySelectorAll('.loading') // select loaderr

    display.insertAdjacentHTML('beforebegin', `<p>${results} resultaten voor: <strong>${query}</strong></p>`) // show how many results

    loader.forEach(load => { // turn loader off
        load.style = 'display: none;'
    })

    renderBooks(books, display)
    renderArticles(articles, display)
}

export default render