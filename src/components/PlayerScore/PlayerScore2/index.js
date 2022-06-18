import '../style.css'

function PlayerScore2(pontos = 0){

    return( /*html*/
    `
    <ol class="score -dois" data-pontos="${pontos}">
        <li class = "pointer"> Um</li>
        <li class = "pointer"> Dois</li>
        <li class = "pointer"> Tres</li>
    </ol>    
    `
    )
}

export default PlayerScore2;