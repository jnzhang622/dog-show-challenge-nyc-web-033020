document.addEventListener('DOMContentLoaded', () => {
const dogForm = document.querySelector('dog-form')

    function getDogs(){ 
        return fetch('http://localhost:3000/dogs')
        .then (resp => resp.json())

    }


})