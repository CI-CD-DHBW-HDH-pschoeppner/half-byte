import { Field, getBlanks, isPlayer, Mode, winningPatterns } from "../game";
import { easyMove } from "./easy";
import { hardMove } from "./hard";
import { mediumMove, pettyMove } from "./medium";

export type BotMove = (board: Field[], own: Field) => number;

// returns the appropriated function for the given mode
export function moveWithMode(mode: Mode): BotMove | undefined {
  switch (mode) {
    case Mode.EASY:
      return easyMove;
    case Mode.PETTY:
      return pettyMove;
    case Mode.MEDIUM:
      return mediumMove;
    case Mode.HARD:
      return hardMove;
    case Mode.HUMAN || Mode.ONLINE: // if both players are controlled by a human, returns undefined
      return undefined;
    default:
      return undefined;
  }
}

// winningMove returns:
// - the winning move for a given player
// - -1 if there is none
export function winningMove(board: Field[], player: Field): number {
  if (!isPlayer(player)) throw new Error(`Player ${player} is not valid`);

  for (const pattern of winningPatterns) {
    // number of fields the player occupies for the current win pattern
    const numPlayerFields = pattern.filter((i) => board[i] === player).length;
    // number of empty fields for the current win pattern
    const numEmptyFields = pattern.filter(
      (i) => board[i] === Field.EMPTY
    ).length;

    // if the player occupies 2 fields and there is exactly one empty field
    if (numPlayerFields === 2 && numEmptyFields === 1) {
      return pattern.find((i) => board[i] === Field.EMPTY) || -1;
    }
  }

  return -1;
}

export function randomMove(board: Field[]): number {
  const emptyFields = getBlanks(board);

  if (emptyFields.length === 0) return -1;

  const randomMoveIndex = Math.floor(Math.random() * emptyFields.length);

  return emptyFields[randomMoveIndex];
}
