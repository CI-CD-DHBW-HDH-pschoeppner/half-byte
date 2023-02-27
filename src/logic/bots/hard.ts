import { Field, getBlanks, invertPlayer, won } from "../game";

// hardMove determines recursively determines the best move for the given player
export function hardMove(board: Field[], own: Field): number {
  const blanks = getBlanks(board);

  const moves = new Map<number, number>();
  for (const move of blanks) {
    const copyBoard = [...board];
    copyBoard[move] = own;
    moves.set(move, minimax(copyBoard, invertPlayer(own), own, false));
    copyBoard[move] = Field.EMPTY;
  }

  let bestScore: [number, number] = [-1, -Infinity];
  for (const move of moves) {
    if (move[1] > bestScore[1]) bestScore = move;
  }

  return bestScore[0];
}

// the minimax algorithm is used to determine the outcome (between -1 and 1) for a given board
function minimax(
  board: Field[],
  currentPlayer: Field,
  own: Field,
  maximize: boolean
): number {
  const blanks = getBlanks(board);

  const winner = won(board);
  if (winner === own) return 1; // win
  else if (winner === invertPlayer(own)) return -1; // loss
  else if (blanks.length === 0) return 0; // draw

  let bestScore: number = maximize ? -Infinity : Infinity;

  for (const move of blanks) {
    board[move] = currentPlayer;
    if (maximize) {
      const score = minimax(board, invertPlayer(currentPlayer), own, false);
      bestScore = Math.max(bestScore, score);
    } else {
      const score = minimax(board, invertPlayer(currentPlayer), own, true);
      bestScore = Math.min(bestScore, score);
    }
    board[move] = Field.EMPTY;
  }

  return bestScore;
}
