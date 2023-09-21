document.getElementById('botao')
.addEventListener("click", function(){
    console.log('teste de click')

   let nome= document.getElementById('nome-pokemon').value

    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then (function(response){
        return response.json()
    }).then (function(response){
        console.log(response.sprites.front_default)

        let url= response.sprites.front_default
        document.getElementById('img-card').setAttribute('src',url)
    })
})