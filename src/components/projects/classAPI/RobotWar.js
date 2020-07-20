module.exports = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="./components/projects/classAPI/cards.css">
    <title>Card Game</title>
</head>
<body>
    <h2>Robot War!</h2>

    <div id="player">
        <h3>Players</h3>
        <div>
            <input id="changeName" type="text" placeholder="Player One"></input>
            <button onclick="makePlayer()" id="join">Join</button>
        </div>
        <div id="playerGrid">
            <h3 id="playerName">Player</h3>
                <span id="playerInfo">Cards: <span id="playerCardCount"></span></span>
            
            <div id="playerPic" class="pics"></div>
            <h3 id="opponentName">Opponent</h3>
                <span id="opponentInfo">Cards: <span id="opponentCardCount"></span></span>
            
            <div id="opponentPic" class="pics"></div>
            <div class="pics" id="card1"></div>
            <div class="pics" id="card2"></div>
        </div>
    </div>
    <h3 id="status">Click shuffle!</h3>
    <button onclick="shuffle()">Shuffle</button>
    <button onclick="dealCards()" id="deal">Deal</button>
    <button onclick="playCard()" id="playCard">Play Card</button>
    <div id="play"></div>
    <script src="./main.js"></script>
</body>
</html>`;