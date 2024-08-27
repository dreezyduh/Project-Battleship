import { posToCoords } from './gameboard';
import Player from './player';
export { displayCells, startGame, updateScreen, startGameBot };

const announcer = document.querySelector('.announcer');
const playerOneBoard = document.querySelector('.playerOne');
const playerTwoBoard = document.querySelector('.playerTwo');
const titleP1 = document.querySelector('.titleP1');
const titleP2 = document.querySelector('.titleP2');
const ships1 = document.querySelector('.ships1');
const ships2 = document.querySelector('.ships2');
const buttonContainer = document.querySelector('.buttonContainer');

let player1 = null;
let player2 = null;
let colorP1 = 'cyan';
let colorP2 = 'pink';
let orientationList = ['down', 'up', 'left', 'right'];
let orientation = orientationList[0];
let winner = null;
let activePlayer = player1;

function getActivePlayer() {
  return activePlayer;
}

function switchActivePlayer() {
  if (activePlayer === player1) {
    activePlayer = player2;
    return;
  }
  activePlayer = player1;
}

function getEnemyPlayer() {
  let enemyPlayer = null;
  let currentPlayer = getActivePlayer();
  if (currentPlayer === player1) {
    enemyPlayer = player2;
  } else {
    enemyPlayer = player1;
  }
  return enemyPlayer;
}

function startGame() {
  const p1Name = prompt('Player 1 name', 'PlayerOne');
  const p2Name = prompt('Player 1 name', 'PlayerTwo');
  player1 = new Player(true, p1Name);
  player2 = new Player(true, p2Name);
  console.log(player1.ships, player2.ships);
  activePlayer = player1;
  renderShipsToPlace(player1, ships1, colorP1);
  updateScreen();
}

function startGameBot() {
  const p1Name = prompt('Player 1 name', 'PlayerOne');
  player1 = new Player(true, p1Name);
  player2 = new Player(false);
  console.log(player1.ships, player2.ships);
  activePlayer = player1;
  renderShipsToPlace(player1, ships1, colorP1);
  updateScreen();
}

function updateScreen() {
  displayCells(player1, player2);
  changeOrientation();
  console.log(activePlayer.placeStage);
  console.log(player1.gameboard.missedAttacks);
  console.log(player2.gameboard.missedAttacks);
  console.log(player1.gameboard.board, player2.gameboard.board);
}

function checkForWinner() {
  const enemyPlayer = getEnemyPlayer();
  if (enemyPlayer.didAllShipsSink()) {
    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Restart with 2 players';
    resetBtn.addEventListener('click', resetGame);
    const resetBtnBot = document.createElement('button');
    resetBtnBot.textContent = 'Restart with bot';
    resetBtnBot.addEventListener('click', resetGameBot);
    console.log(activePlayer.name + ' has won the game');
    announcer.textContent = activePlayer.name + ' has won the game';
    announcer.appendChild(resetBtn);
    announcer.appendChild(resetBtnBot);
    winner = activePlayer;
    updateScreen();
    return true;
  }
  return false;
}

function playRound(posX, posY, player, enemyPlayer) {
  if (!enemyPlayer.gameboard.receiveAttack(posX, posY)) {
    switchActivePlayer();
    if (!activePlayer.real) {
      if (attackRandomPos(player) === 0) {
        if (checkForWinner()) {
          return;
        }
      }
    }
  } else {
    if (checkForWinner()) {
      return;
    }
  }
  updateScreen();
}

function displayCells(player1, player2) {
  playerOneBoard.textContent = '';
  playerTwoBoard.textContent = '';

  titleP1.textContent = player1.name;
  titleP2.textContent = player2.name;

  renderShipsInCells(player1, colorP1, playerOneBoard);
  renderShipsInCells(player2, colorP2, playerTwoBoard);
}

let dragged = null;

function renderShipsToPlace(player, parent, color) {
  parent.textContent = '';
  for (let ship in player.ships) {
    const shipcell = document.createElement('div');
    shipcell.setAttribute('class', `${ship}`);
    for (let i = 0; i < player.ships[ship].length; i++) {
      const cell = document.createElement('div');
      cell.setAttribute('class', `cell ${ship}`);
      shipcell.appendChild(cell);
      cell.setAttribute('draggable', true);
      cell.addEventListener('dragstart', (event) => {
        if (cell === event.target) {
          dragged = event.target;
        }
      });
    }

    shipcell.style.height = `max-content`;
    shipcell.style.backgroundColor = `${color}`;
    parent.appendChild(shipcell);
  }
}

function renderShipsInCells(player, color, parent) {
  let i = 0;
  for (let index of player.gameboard.board) {
    const cell = document.createElement('div');
    //
    if (player === activePlayer) {
      if (index.hasShip) {
        cell.style.backgroundColor = `${color}`;
      }
    }
    //  Comment ^ and uncomment v if you want to see enemy ships
    // if (index.hasShip) {
    //   cell.style.backgroundColor = `${color}`;
    // }
    //
    if (index.isHit == true) {
      cell.textContent = 'X';
      if (index.hasShip) {
        cell.style.backgroundColor = 'gray';
      }
    }
    cell.setAttribute('class', `cell ${i}`);
    parent.appendChild(cell);
    i++;
    if (player.placeStage) {
      cell.addEventListener('dragover', (event) => {
        event.preventDefault();
      });
      cell.addEventListener('drop', (event) => {
        event.preventDefault();
        const coords = event.target.className.split(' ')[1];
        dropShipIntoCell(dragged, player, coords);
        updateScreen();
      });
    }
    if (
      player !== activePlayer &&
      !player.placeStage &&
      !activePlayer.placeStage &&
      winner === null
    ) {
      if (!index.isHit) {
        cell.addEventListener('click', (event) => {
          const cellCoords = cell.className.split(' ')[1];
          const [posX, posY] = coordsToPos(cellCoords);
          playRound(posX, posY, activePlayer, player);
        });
      }
    }
  }
}

function dropShipIntoCell(ship, player, coords) {
  let theShip = ship.className.split(' ')[1];
  let [posX, posY] = coordsToPos(coords);
  player.gameboard.placeShip(posX, posY, player.ships[theShip], orientation);
  const shipsDiv = dragged.parentElement.parentElement;
  shipsDiv.removeChild(dragged.parentElement);
  if (shipsDiv.childNodes.length === 0) {
    player.placeStage = false;
    buttonContainer.textContent = '';
    switchActivePlayer();
    console.log('switcing player ' + activePlayer.name);
    if (activePlayer.placeStage) {
      renderShipsToPlace(player2, ships2, colorP2);
      ships2.setAttribute('class', 'ships2');
    } else if (!activePlayer.placeStage && !activePlayer.real) {
      createRandomShipsForComputer();
      switchActivePlayer();
      console.log('switcing player ' + activePlayer.name);
    }
  }
}

function coordsToPos(coords) {
  let posY = Math.floor(coords / 10) + 1;
  let posX = coords - (posY - 1) * 10 + 1;
  return [posX, posY];
}

function changeOrientation() {
  buttonContainer.textContent = '';
  const buttonLeft = document.createElement('button');
  const buttonRight = document.createElement('button');
  const orientationText = document.createElement('div');
  buttonLeft.textContent = '<';
  buttonRight.textContent = '>';
  orientationText.textContent = `Current orientation: ${orientation}`;
  buttonContainer.appendChild(buttonLeft);
  buttonContainer.appendChild(orientationText);
  buttonContainer.appendChild(buttonRight);
  buttonLeft.addEventListener('click', function () {
    let index = orientationList.indexOf(orientation, 0);
    if (index - 1 < 0) {
      orientation = orientationList[orientationList.length - 1];
    } else {
      orientation = orientationList[index - 1];
    }
    updateScreen();
  });
  buttonRight.addEventListener('click', function () {
    let index = orientationList.indexOf(orientation, 0);
    if (index + 1 > orientationList.length - 1) {
      orientation = orientationList[0];
    } else {
      orientation = orientationList[index + 1];
    }
    updateScreen();
  });
}

function createRandomShipsForComputer() {
  if (!player2.real) {
    for (const ship in player2.ships) {
      console.log(player2.ships[ship]);
      let shipPlaced = 0;
      while (shipPlaced === 0) {
        if (checkIfRandomPosAvailable(player2.ships[ship])) {
          shipPlaced = 1;
        }
      }
    }
  }
}

function attackRandomPos(enemyPlayer) {
  const availableCoords = [];
  for (let coord in enemyPlayer.gameboard.board) {
    if (!enemyPlayer.gameboard.board[coord].isHit) {
      availableCoords.push(coord);
    }
  }
  console.log(availableCoords);
  console.log(availableCoords.length - 1);
  const random = Math.floor(Math.random() * (availableCoords.length - 1));
  console.log(random);
  const [posX, posY] = coordsToPos(availableCoords[random]);
  if (!enemyPlayer.gameboard.board[availableCoords[random]].isHit) {
    if (enemyPlayer.gameboard.receiveAttack(posX, posY)) {
      attackRandomPos(enemyPlayer);
      return 1;
    } else {
      switchActivePlayer();
      return 0;
    }
  }
}

function checkIfRandomPosAvailable(ship) {
  try {
    const posX = Math.floor(Math.random() * 8 + 1);
    const posY = Math.floor(Math.random() * 8 + 1);
    const orientationC = Math.floor(Math.random() * 4);
    console.log(posX, posY, ship, orientationList[orientationC]);
    player2.gameboard.placeShip(
      posX,
      posY,
      ship,
      orientationList[orientationC]
    );
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

function resetGame() {
  player1 = null;
  player2 = null;
  winner = null;
  announcer.textContent = '';
  startGame();
}

function resetGameBot() {
  player1 = null;
  player2 = null;
  winner = null;
  announcer.textContent = '';
  startGameBot();
}
