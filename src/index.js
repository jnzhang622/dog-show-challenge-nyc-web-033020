document.addEventListener('DOMContentLoaded', () => {
    const url = 'http://localhost:3000/dogs'
    const dogForm = document.getElementById('dog-form')
    const table = document.getElementById('table-body')

    fetch(url)
    .then (resp => resp.json())
    .then(dogs => dogs.forEach(getDog))
    
    function getDog(dog){
        table.innerHTML += `<tr><td>${dog.name}</td> <td>${dog.breed}</td> <td>${dog.sex}</td> <td><button class='edit'> Edit</button></td></tr>`
    }

    document.addEventListener('click', function(e){
        if (e.target.class == 'edit'){

        }
    })

    function editDog(id){
        
    }



    })