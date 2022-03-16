const display = document.querySelector('main ul')

const render = (data, query) => {
    const results = data.results

    display.insertAdjacentHTML('beforebegin', `<p>${results.length} resultaten voor: <strong>${query}</strong></p>`)

    results.forEach((item) => {
        const html = `
                <article class='book'>
                    <img src="${
                    item.coverimages ? item.coverimages[1] : "Geen foto"
                    }">
                    <section>
                    <h3>${item.titles[0]}</h3>
                    <p>${
                        item.summaries ? item.summaries[0] : "Geen samenvatting"
                    }</p>
                    </section>
                </article>
              `
              display.insertAdjacentHTML('beforeend', html)
    })

}

export default render