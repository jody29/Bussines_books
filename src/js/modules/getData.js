import render from "./render.js";

const cors = "https://cors-anywhere.herokuapp.com/"
const endpoint = "https://zoeken.oba.nl/api/v1/search/?q="
const query = "financieel management"
const pubKey = "fff5cd7a65bd87deefd8f70bfb447d42"
const secret = "4289fec4e962a33118340c888699438d"
const detail = "Default"
const url = `${cors}${endpoint}${query}&authorization=${pubKey}&detaillevel=${detail}&output=json`
const onderwijsUrl = `http://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=${query}+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=${pubKey}&output=json`

const config = {
    Authorization: `Bearer ${secret}`
}

const getData = () => {
    fetch(url, config)
        .then(response => {
            response.status == 429 ? console.log('Te veel gebruikers') : console.log('ja')
            return response.json()
        })
        .then(data => {
            render(data, query)
        })
        .catch(err => console.log(err))
}

export default getData