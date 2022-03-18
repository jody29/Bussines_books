const renderBooks = (books, display) => {
    books.forEach((item) => { // for each item in the results list, make an article element
        const html = ` 
                <article class='book'>
                    <img src="${
                    typeof item.coverimages[1] !== 'undefined' || item.coverimages ? item.coverimages[1] : "https://v112.nbc.bibliotheek.nl/thumbnail?uri=http://data.bibliotheek.nl/ggc/ppn/040228304&token=c1322402" // picture of the book
                    }" alt="${item.titles[0]}">
                    <section>
                    <h3>${item.titles[0]}</h3>
                    <p>${
                        item.summaries ? item.summaries[0] : "Geen samenvatting" // summary of the book
                    }</p>
                    </section>
                </article>
              `
              display.insertAdjacentHTML('beforeend', html) // insert the article of the book to the DOM
    })
}

const renderArticles = (articles, display) => {
    articles.forEach((item) => { // for each item in the results list, make an article element
        const html = ` 
                <article class='book'>
                    <img src="https://v112.nbc.bibliotheek.nl/thumbnail?uri=http://data.bibliotheek.nl/ggc/ppn/040228304&token=c1322402">
                    <section>
                    <h3>${item.titles[0]}</h3>
                    <p>${
                        item.summaries ? item.summaries[0] : "Geen samenvatting" // summary of the book
                    }</p>
                    </section>
                </article>
              `
              display.insertAdjacentHTML('beforeend', html) // insert the article of the book to the DOM
    })
} 

export {
    renderBooks,
    renderArticles
}