import getData from "./getData.js"

const form = document.querySelector('form')
const fieldset = form.querySelector('fieldset')
const legend = fieldset.querySelector('legend')

const validateForm = (value) => {
    switch (value) {
        case 'concept':
            legend.innerHTML = `Wat wil je weten over ${value}?`
            break;
        case 'design':
            legend.innerHTML = `Wat wil je weten over ${value}?`
            break;
        case 'planning':
            legend.innerHTML = `Wat wil je weten over ${value}?`
            break;
        case 'management':
            legend.innerHTML = `Wat wil je weten over ${value}?`
            break;
    }
}

export default validateForm