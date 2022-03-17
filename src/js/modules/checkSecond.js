import getData from "./getData.js"

const checkSecond = (topic) => {
    const second = document.querySelectorAll('input[name="subTopic"]')

    second.forEach(element => {
        element.addEventListener('click', (event) => {
            getData(event.target.value, topic)
        })
    })
}

export default checkSecond