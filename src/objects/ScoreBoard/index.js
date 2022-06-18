import PlayerName from '../../components/PlayerName';
import PlayerScore1 from '../../components/PlayerScore/PlayerScore1';
import PlayerScore2 from '../../components/PlayerScore/PlayerScore2';
import Vs from '../../components/Vs';
import Arrow from '../../components/Arrow';
import Deck from '../Deck';
import './style.css';

function ScoreBoard(){
    
    return( //html
        `
        <header class = "score-board">
            ${Arrow()}
            ${PlayerName("Player1")}
            ${PlayerScore1()}
            ${Vs("vs")}
            ${PlayerScore2()}
            ${PlayerName("Player2")}
        </header>
        `
    )
}

export default ScoreBoard;