import './style.css'

function PlayerScore(pontos = 0){

    return( /*html*/
    `
    <ol class="score" data-pontos="${pontos}">
        <li class = "pointer"> Um</li>
        <li class = "pointer"> Dois</li>
        <li class = "pointer"> Tres</li>
    </ol>    
    `
    )
}

export default PlayerScore;