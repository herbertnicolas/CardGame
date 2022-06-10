import PlayerName from '../../components/PlayerName';
import PlayerScore from '../../components/PlayerScore';
import Vs from '../../components/Vs';
import Arrow from '../../components/Arrow';
import Deck from '../Deck';
import './style.css';

function ScoreBoard(){

    return( //html
        `
        <header class = "score-board">
            ${Arrow(2)}
            ${PlayerName("Player1")}
            ${PlayerScore(3)}
            ${Vs("vs")}
            ${PlayerScore(2)}
            ${PlayerName("Player2")}
        </header>
        `
    )
}

export default ScoreBoard;