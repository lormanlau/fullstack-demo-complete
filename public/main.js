// alert("Hello World")
document.addEventListener("DOMContentLoaded", (evemt) => {
    let button = document.getElementById('searchButton');
    let input = document.getElementById('searchQuery');
    let pokemon = document.getElementById('pokemon');
    // console.log(button)
    // console.log(input)

    // button.addEventListener('click', (event) =>{
    //     // alert("hello world")
    //     fetch("/sampleget")
    //     .then(response => {
    //         if (response.status === 200) {
    //             return response.json();
    //         } else {
    //             throw new Error(response.status + " " + response.statusText)
    //         }  
    //     })
    //     .then(json => {
    //         console.log(json)
    //     })
    //     .catch(errorLog => {
    //         console.log(errorLog)
    //     })
    // })

    button.addEventListener('click', (e) => {
        console.log(input.value);
        fetch("/search", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({value: input.value})
        })
        .then(response => response.json())
        .then(json => {
            pokemon.setAttribute('src', json.data.sprites.front_default);
        })
    })
})