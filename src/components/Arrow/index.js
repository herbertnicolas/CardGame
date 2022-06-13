import './style.css';

function Arrow(currentPlayer = 1){

    return( /*html*/
    `
        <img class="arrow" data-currentPlayer=${currentPlayer}
        src="images/arrow.png" alt="seta">
    `    
    )
}

export default Arrow;