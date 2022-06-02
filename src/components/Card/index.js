import './style.css';

function Card(logo="h-letter", alt="logo-verso"){
    
    return( /*html*/
        `
        <article class="card-back">
            <img src="images/${logo}.png" alt="${alt}.png" 
            width="100"
            height="auto">
        </article>
        `
    )
}

export default Card;