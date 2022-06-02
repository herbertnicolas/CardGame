import './style.css';

function Card(logo="h-letter", alt="logo-verso"){
   
    return( /*html*/
        `
        <article class="card-face">
            <img src="images/${logo}.png" alt="${alt}">
        </article>
        `
    )
}

export default Card;