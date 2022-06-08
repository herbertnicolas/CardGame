import PlayerName from '../../components/PlayerName';
import PlayerScore from '../../components/PlayerScore';
import Vs from '../../components/Vs';
import './style.css';

function ScoreBoard(){
    return( //html
        `
        <div class = "seta">
                <img src="images/arrow.png" alt=""
                width=20px height=10px>
        </div>

        <header class = "score-board">
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