import Player from './player';
export { displayCells, startGame, updateScreen };

const gameboardContainer = document.querySelector('.gameboard');
const playerOneBoard = document.querySelector('.playerOne');
const playerTwoBoard = document.querySelector('.playerTwo');
const titleP1 = document.querySelector('.titleP1');
const titleP2 = document.querySelector('.titleP2');
const ships1 = document.querySelector('.ships1');
const ships2 = document.querySelector('.ships2');
const buttonContainer = document.querySelector('.buttonContainer');

function displayShipsToChooseFrom() {
  renderShipsToPlace(player1, ships1, colorP1);
  // renderShipsToPlace(player2, ships2, colorP2);
}

let player1 = null;
let player2 = null;
let colorP1 = 'cyan';
let colorP2 = 'pink';
let orientationList = ['down', 'up', 'left', 'right'];
let orientation = orientationList[0];

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

function attackPlayer(posX, posY) {
  let enemyPlayer = null;
  let currentPlayer = getActivePlayer();
  if (currentPlayer === player1) {
    enemyPlayer = player2;
  } else {
    enemyPlayer = player1;
  }
  enemyPlayer.gameboard.receiveAttack(posX, posY);
}

function startGame() {
  const p1Name = prompt('Player 1 name', 'PlayerOne');
  player1 = new Player(true, p1Name);
  player2 = new Player(false);
  console.log(player1.ships, player2.ships);
  activePlayer = player1;
  displayShipsToChooseFrom();
  // player2.gameboard.placeShip(8, 3, player2.ships['carrier'], 'right')
}

function updateScreen() {
  displayCells(player1, player2);
  changeOrientation(playerOneBoard);
  console.log(activePlayer.placeStage);
  console.log(player1.gameboard.missedAttacks);
  console.log(player1.gameboard.board, player2.gameboard.board);
}

function playRound() {
  console.log('.');
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
        // console.log(event.target);
        dragged = event.target;
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
    if (index.hasShip) {
      cell.style.backgroundColor = `${color}`;
    }
    if (index.isHit == true) {
      cell.textContent = 'X';
    }
    cell.setAttribute('class', `cell ${i}`);
    parent.appendChild(cell);
    cell.addEventListener('dragover', (event) => {
      event.preventDefault();
    });
    cell.addEventListener('drop', (event) => {
      event.preventDefault();
      // console.log(event.target);
      const coords = event.target.className.split(' ')[1];
      dropShipIntoCell(dragged, activePlayer, coords);
      const shipsDiv = dragged.parentElement.parentElement;
      shipsDiv.removeChild(dragged.parentElement);
      if (shipsDiv.childNodes.length === 0) {
        player.placeStage = false;
        buttonContainer.parentElement.removeChild(buttonContainer);
        updateScreen();
      }
    });
    i++;
  }
}

function dropShipIntoCell(ship, activePlayer, coords) {
  if (player1.placeStage || player2.placeStage) {
    let theShip = ship.className.split(' ')[1];
    let [posX, posY] = coordsToPos(coords);
    // console.log(posX, posY);
    // console.log(theShip);
    activePlayer.gameboard.placeShip(
      posX,
      posY,
      activePlayer.ships[theShip],
      orientation
    );
    updateScreen();
  }
}

function coordsToPos(coords) {
  let posY = Math.floor(coords / 10) + 1;
  let posX = coords - (posY - 1) * 10 + 1;
  return [posX, posY];
}

function changeOrientation(parent) {
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
  parent.appendChild.buttonContainer;
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
