import './style.css';
import Card from './src/components/Card';

const $root = document.querySelector("#root");
const $htmlCard = Card();

$root.insertAdjacentHTML("beforeend", $htmlCard);