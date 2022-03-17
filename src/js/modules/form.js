import { concept, design, planning, management } from "../utils/input.js"
import checkSecond from "./checkSecond.js"

const validateForm = (value) => {
    const breadcrumbs = document.querySelector('main ul:first-of-type')
    const form = document.querySelector('form')
    const fieldset = form.querySelector('fieldset')
    const legend = fieldset.querySelector('legend')
    const first = fieldset.querySelectorAll('label')
    const article = document.querySelector('main article:first-child')

    article.style = 'display: none;'
    breadcrumbs.style = 'display: flex'

    first.forEach(item => {
        item.classList.add('hidden')
    })

    switch (value) {
        case 'concept':
            fieldset.insertAdjacentHTML('afterbegin', concept)
            break;
        case 'design':
            fieldset.insertAdjacentHTML('afterbegin', design)
            break;
        case 'planning':
            fieldset.insertAdjacentHTML('afterbegin', planning)
            break;
        case 'management':
            fieldset.insertAdjacentHTML('afterbegin', management)
            break;
    }

    breadcrumbs.insertAdjacentHTML('beforeend', `
            <li><a href='/'>home</a></li>
            <li><a>${value}</a></li>
            `)

    legend.innerHTML = `Wat wil je weten over ${value}?`

    checkSecond(value) 
}

export default validateForm