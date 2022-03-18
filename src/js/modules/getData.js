import render from "./render.js";
import { error429, error403, loading } from "../utils/states.js";

const getData = (value, topic) => {
    const breadcrumbs = document.querySelector('main ul:first-of-type')
    const form = document.querySelector('form')
    const display = document.querySelector('.results')
    const cors = "https://cors-anywhere.herokuapp.com/"
    const endpoint = "https://zoeken.oba.nl/api/v1/search/?q="
    const query = value
    const pubKey = "fff5cd7a65bd87deefd8f70bfb447d42"
    const secret = "4289fec4e962a33118340c888699438d"
    const detail = "Default"
    const url = `${cors}${endpoint}${query}&authorization=${pubKey}&detaillevel=${detail}&output=json`
    const onderwijsUrl = `${cors}http://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=${query}+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=${pubKey}&output=json`
    
    const config = {
        Authorization: `Bearer ${secret}`
    }

    form.innerHTML = '' // hide the form when subject is selected
    display.innerHTML = loading // set loader in the DOM
    breadcrumbs.innerHTML = `
    <li><a class='back'>home</a></li>
    <li><a>${topic}</a></li>
    <li><a>${query}</a></li>
    `

    const back = document.querySelector('.back')

    back.addEventListener('click', () => { location.reload() })

    fetch(url, config) // fetch the OBA api using the url
        .then(response => {
            response.status == 429 ? display.innerHTML = error429 : '' // if there are too many requests, log this
            response.status == 403 ? display.innerHTML = error403 : ''
            return response.json() // return the response as a json file
        })
        .then(data => {
            fetch(onderwijsUrl, config)
            .then(result => result.json())
            .then(output => {
                render(data, output, query) // initializing the render function with the data and the query as arguments
            })
        })
        .catch(err => console.log(err))
}

export default getData