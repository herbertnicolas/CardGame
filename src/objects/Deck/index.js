import './style.css';
import Card from '../../components/Card';

function Deck(qtdCards){
    const $htmlCard = Card();
    const $htmlCards = $htmlCard.repeat(qtdCards)
    
    return `
    <section class = "deck">
        ${$htmlCards}
    </section>
    `
    ;
}

export default Deck;