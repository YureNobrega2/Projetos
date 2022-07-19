let formulario = document.querySelector('form');

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    let nome = document.getElementById('name').value.toLowerCase();

    let urlForm = `https://pokeapi.co/api/v2/pokemon/${nome}`;

    let resposta = document.getElementById('content')

    let html = ''

    fetch(urlForm)
    .then(res => res.json())
    .then(function(data){
        console.log(data)
        html = 'Nome: ' + uppercase(data.name)  + '<br>'
        html += 'Type: ' + uppercase(data.types[0].type.name) 
        resposta.innerHTML = html
        if (data.types[1]){
        html += '<br>' + 'Type 2: ' + uppercase(data.types[1].type.name) 
        resposta.innerHTML = html
        }

        document.querySelector('#frente').src = data.sprites.front_default
        document.querySelector('#costas').src = data.sprites.back_default
    })
    .catch(function(err){
        if(err == 'SyntaxError: Unexpected token N in JSON at position 0'){
            html = 'Pokémon não encontrado!'
        }
        else{
            html = 'Erro: ' + err
        }
        resposta.innerHTML = html
    })
})

function uppercase(str){
    return str[0].toUpperCase() + str.substr(1)
}