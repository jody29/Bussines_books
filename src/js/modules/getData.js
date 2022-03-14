import render from "./render.js";

const cors = "https://cors-anywhere.herokuapp.com/"
const endpoint = "https://zoeken.oba.nl/api/v1/search/?q="
const query = "ondernemen"
const key = "1e19898c87464e239192c8bfe422f280"
const secret = "4289fec4e962a33118340c888699438d"
const detail = "Default"
const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`

const config = {
    Authorization: `Bearer ${secret}`
}

const getData = () => {
    fetch(url, config)
        .then(response => {
            response.status == 429 ? console.log('te veel gebruikers') : console.log('ja')
            return response.json()
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => console.log(err))
}

export default getData