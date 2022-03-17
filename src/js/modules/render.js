const display = document.querySelector('main ul')

const render = (data, query) => {
    const results = data.results // get the results
    const loader = document.querySelectorAll('.loading') // select loaderr
    console.log(results)

    display.insertAdjacentHTML('beforebegin', `<p>${results.length} resultaten voor: <strong>${query}</strong></p>`) // show how many results

    loader.forEach(load => { // turn loader off
        load.style = 'display: none;'
    })

    results.forEach((item) => { // for each item in the results list, make an article element
        const html = ` 
                <article class='book'>
                    <img src="${
                    typeof item.coverimages[1] !== 'undefined' || !item.coverimages[1] ? item.coverimages[1] : "https://v112.nbc.bibliotheek.nl/thumbnail?uri=http://data.bibliotheek.nl/ggc/ppn/040228304&token=c1322402" // picture of the book
                    }">
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

export default render