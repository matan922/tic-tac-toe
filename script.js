// let p1 = true

// function doXAndO() {
//   if (p1) {
//     one.innerText = "X";
//   } else {
//     one.innerText = "O";
//   }

let p = 0;

function turn() {
  if (event.target.innerText !== "") {
    return;
  }
  //X X X
  //- - -
  //- - -
  if (b1.innerText == "X" && b2.innerText == "X" && b3.innerText == "X") {
    announcement.innerText = "X wins!";
    return;
  }

  //- - -
  //X X X
  //- - -
  if (b4.innerText == "X" && b5.innerText == "X" && b6.innerText == "X") {
    announcement.innerText = "X wins!";
    return;
  }

  //- - -
  //- - -
  //X X X
  if (b7.innerText == "X" && b8.innerText == "X" && b9.innerText == "X") {
    announcement.innerText = "X wins!";
    return;
  }

  //X - -
  //X - -
  //X - -
  if (b1.innerText == "X" && b4.innerText == "X" && b7.innerText == "X") {
    announcement.innerText = "X wins!";
    return;
  }

  //X - -
  //- X -
  //- - X
  if (b1.innerText == "X" && b5.innerText == "X" && b9.innerText == "X") {
    announcement.innerText = "X wins!";
    return;
  }

  //- X -
  //- X -
  //- X -
  if (b2.innerText == "X" && b5.innerText == "X" && b8.innerText == "X") {
    announcement.innerText = "X wins!";
    return;
  }

  //- - X
  //- - X
  //- - X
  if (b3.innerText == "X" && b6.innerText == "X" && b9.innerText == "X") {
    announcement.innerText = "X wins!";
    return;
  }

  //- - X
  //- X -
  //X - -
  if (b7.innerText == "X" && b5.innerText == "X" && b3.innerText == "X") {
    announcement.innerText = "X wins!";
    return;
  }

  // O's winners!!!


  //O O O
  //- - -
  //- - -
  if (b1.innerText == "O" && b2.innerText == "O" && b3.innerText == "O") {
    announcement.innerText = "O wins!";
    return;
  }

  //- - -
  //O O O
  //- - -
  if (b4.innerText == "O" && b5.innerText == "O" && b6.innerText == "O") {
    announcement.innerText = "O wins!";
    return;
  }

  //- - -
  //- - -
  //O O O
  if (b7.innerText == "O" && b8.innerText == "O" && b9.innerText == "O") {
    announcement.innerText = "O wins!";
    return;
  }

  //O - -
  //O - -
  //O - -
  if (b1.innerText == "O" && b4.innerText == "O" && b7.innerText == "O") {
    announcement.innerText = "O wins!";
    return;
  }

  //O - -
  //- O -
  //- - O
  if (b1.innerText == "O" && b5.innerText == "O" && b9.innerText == "O") {
    announcement.innerText = "O wins!";
    return;
  }

  //- O -
  //- O -
  //- O -
  if (b2.innerText == "O" && b5.innerText == "O" && b8.innerText == "O") {
    announcement.innerText = "O wins!";
    return;
  }

  //- - O
  //- - O
  //- - O
  if (b3.innerText == "O" && b6.innerText == "O" && b9.innerText == "O") {
    announcement.innerText = "O wins!";
    return;
  }

  //- - O
  //- O -
  //O - -
  if (b7.innerText == "O" && b5.innerText == "O" && b3.innerText == "O") {
    announcement.innerText = "O wins!";
    return;
  }

  if (p == 0) {
    event.target.innerText = "X";
    announcement.innerText = "O's turn!";
    return p++;
  } else {
    event.target.innerText = "O";
    announcement.innerText = "X's turn!";
    return p--;
  }
}

function restart() {
  if (event.target.innerText == "X" && event.target.innerText == "O")
  event.target.innerText = ""
}

// function oTurn() {
//   two.innerText = "O";
// }

// function xOrO() {}
