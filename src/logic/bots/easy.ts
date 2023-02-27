import type {Field} from "../game";
import {randomMove, winningMove} from "./bot";

// the easy bot:
// - chooses the winning move, if it can win
// - chooses a random move otherwise
export function easyMove(board: Field[], own: Field): number {
    const nextMoveWinning = winningMove(board, own);
    if (nextMoveWinning !== -1) return nextMoveWinning;

    return randomMove(board);
}
