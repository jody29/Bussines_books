import { concept, design, planning, management } from "../utils/input.js"
import checkSecond from "./checkSecond.js"

const validateForm = (value) => {

    const form = document.querySelector('form')
    const fieldset = form.querySelector('fieldset')
    const legend = fieldset.querySelector('legend')
    const first = fieldset.querySelectorAll('label')

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

    legend.innerHTML = `Wat wil je weten over ${value}?`

    checkSecond() 
}

export default validateForm