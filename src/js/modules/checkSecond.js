import getData from "./getData.js"

const checkSecond = () => {
    const second = document.querySelectorAll('input[name="subTopic"]')

    second.forEach(element => {
        element.addEventListener('click', (event) => {
            getData(event.target.value)
        })
    })
}

export default checkSecond