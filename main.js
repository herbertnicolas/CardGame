import './style.css';
import './src/styles/settings/colors.css'
import './src/styles/elements/base.css'
import Card from './src/components/Card';
import Deck from './src/objects/Deck'
import PlayerName from './src/components/Score/PlayerName';

const $root = document.querySelector("#root");
//const $htmlDeck = Deck(5);
//const $htmlPlayerName = PlayerName("Fulano");
//const $htmlPlayerName2 = PlayerName("Fulano");

$root.insertAdjacentHTML(
    "beforeend", 
    `
        ${PlayerName("Player1")}
        ${PlayerName("Player2")}
        ${Deck(5)}
    `
);

//$root.insertAdjacentHTML("beforeend", $htmlDeck);