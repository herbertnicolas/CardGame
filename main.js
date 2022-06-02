import './style.css';
import './src/styles/settings/colors.css'
import './src/styles/elements/base.css'
import Deck from './src/objects/Deck'
import ScoreBoard from './src/objects/ScoreBoard';
import CardFrontBack from './src/components/CardFrontBack';

const $root = document.querySelector("#root");
//const $htmlDeck = Deck(5);
//const $htmlPlayerName = PlayerName("Fulano");
//const $htmlPlayerName2 = PlayerName("Fulano");

$root.insertAdjacentHTML(
    "beforeend", 
    `
        ${ScoreBoard()}
        ${Deck(2)}
        
    `
);

//$root.insertAdjacentHTML("beforeend", $htmlDeck);