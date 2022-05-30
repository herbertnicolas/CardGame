import './style.css';
import './src/styles/settings/colors.css'
import './src/styles/elements/base.css'
import Card from './src/components/Card';
import Deck from './src/objects/Deck'


const $root = document.querySelector("#root");
const $htmlDeck = Deck(5);
$root.insertAdjacentHTML("beforeend", $htmlDeck);
//$root.insertAdjacentHTML("beforeend", $htmlDeck);