document.addEventListener('DOMContentLoaded', () => {
    const url = 'http://localhost:3000/dogs'
    const dogForm = document.getElementById('dog-form')
    const table = document.getElementById('table-body')

    fetch(url)
    .then (resp => resp.json())
    .then(dogs => dogs.forEach(getDog))
    
    function getDog(dog){
        table.innerHTML += `<tr dogId=${dog.id}><td>${dog.name}</td> <td>${dog.breed}</td> <td>${dog.sex}</td> <td><button class='editBtn' dogId=${dog.id}> Edit</button></td></tr>`
    }

    document.addEventListener('click', function(e){
        e.preventDefault()
        if (e.target.class === 'editBtn'){
            console.log(e.target.dogId)
            editDog(e.target.dataset.id)
        }
        else if (e.target.type === 'submit'){
            editedDog(e)
        }
    })

    function editDog(id){
        fetch(`${url}/${id}`)
        .then(resp => resp.json())
        .then(dog => {
            dogForm.name.value = dog.name
            dogForm.breed.value = dog.breed
            dogForm.sex.value = dog.sex
            dogForm.dataset.id = dog.id
        })
    }

    function editedDog(e){
        
    }



    })