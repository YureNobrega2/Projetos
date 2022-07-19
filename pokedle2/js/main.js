document.querySelector('#pokeBtn').addEventListener('click', checkGuess)

let type1 = document.querySelector("#type1")
let type2 = document.querySelector("#type2")
let acertos = 0;
let pokeName;

function apiCall(){
    let pokeRandom = Math.floor(Math.random() * (151 - 1) + 1)
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeRandom}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector("#pokeImg").src = data.sprites.front_default
        type1.innerText = data.types[0].type.name
        if (data.types.length === 2){
            type2.innerText = data.types[1].type.name
        }
        pokeName = data.species.name
    })
    .catch(err => console.log(`error ${err}`))
}

apiCall()

function checkGuess(){
    const guess = document.querySelector('#pokeInput').value

    if (guess.toLowerCase() === pokeName){
        acertos += 1
        document.querySelector('#seq-atual').innerText = acertos
    }
    
    document.querySelector('#pkm-anterior').innerText = pokeName
    apiCall()
}

