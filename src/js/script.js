import validateForm from "./modules/form.js";

const Input = document.querySelectorAll('input[name="topic"]')

Input.forEach(item => {
    item.addEventListener('click', (event) => {
        validateForm(event.target.value)
    })
})

