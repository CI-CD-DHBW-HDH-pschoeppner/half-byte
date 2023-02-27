import {Field} from "../game";
import {randomMove, winningMove} from "./bot";

// the medium bot:
// - chooses the winning move, if it can win
// - blocks the player from winning, if it can
// - chooses the middle (4) field, if it can
// - chooses a random move otherwise
export function mediumMove(board: Field[], own: Field): number {
  const nextMoveWinning = winningMove(board, own);
  if (nextMoveWinning !== -1) return nextMoveWinning;

  const nextMovePetty = pettyMove(board, own);
  if (nextMovePetty !== -1) return nextMovePetty;

  if (board[4] === Field.EMPTY) return 4;

  return randomMove(board);
}

// this bot:
// - blocks the player from winning, if it can
// - chooses a random move otherwise
export function pettyMove(board: Field[], own: Field): number {
  if (own === Field.EMPTY) return -1;

  const otherPlayer = own === Field.PLAYER1 ? Field.PLAYER2 : Field.PLAYER1;

  return winningMove(board, otherPlayer);
}
