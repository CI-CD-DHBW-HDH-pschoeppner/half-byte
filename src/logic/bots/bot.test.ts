import { randomMove, winningMove } from "./bot";
import { Field } from "../game";
import { easyMove } from "./easy";
import { mediumMove, pettyMove } from "./medium";

describe("randomMove()", () => {
  it("returns -1 if the board is completely occupied", () => {
    const board = [
      Field.PLAYER1,
      Field.PLAYER1,
      Field.PLAYER1,
      Field.PLAYER2,
      Field.PLAYER1,
      Field.PLAYER2,
      Field.PLAYER1,
      Field.PLAYER2,
      Field.PLAYER1,
    ];

    const move = randomMove(board);
    expect(move).toBe(-1);
  });
  it("returns the only empty field index", () => {
    const board = [
      Field.PLAYER1,
      Field.PLAYER2,
      Field.PLAYER1,
      Field.PLAYER1,
      Field.EMPTY,
      Field.PLAYER2,
      Field.PLAYER2,
      Field.PLAYER1,
      Field.PLAYER1,
    ];

    for (let i = 0; i < 1000; i++) {
      const move = randomMove(board);
      expect(move).toBe(4);
    }
  });
  it("returns the index between 0 and 8 if the board is empty", () => {
    const board = [
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
    ];

    for (let i = 0; i < 1000; i++) {
      const move = randomMove(board);
      expect(move).toBeGreaterThanOrEqual(0);
      expect(move).toBeLessThanOrEqual(8);
    }
  });
});

describe("winningMove()", () => {
  it("returns -1 if all fields are empty", () => {
    const board = [
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
    ];
    const player1 = Field.PLAYER1;

    const winningMovePlayer1 = winningMove(board, player1);
    expect(winningMovePlayer1).toBe(-1);

    const player2 = Field.PLAYER2;

    const winningMovePlayer2 = winningMove(board, player2);
    expect(winningMovePlayer2).toBe(-1);
  });
  it("returns -1 if all fields are occupied", () => {
    const board1 = [
      Field.PLAYER1,
      Field.PLAYER1,
      Field.PLAYER1,
      Field.PLAYER2,
      Field.PLAYER1,
      Field.PLAYER2,
      Field.PLAYER1,
      Field.PLAYER2,
      Field.PLAYER1,
    ];
    const player1 = Field.PLAYER1;

    const winningMovePlayer1 = winningMove(board1, player1);
    expect(winningMovePlayer1).toBe(-1);

    const player2 = Field.PLAYER2;

    const winningMovePlayer2 = winningMove(board1, player2);
    expect(winningMovePlayer2).toBe(-1);
  });
  it("returns the index of the field to play in the next move in order to win", () => {
    let board = [
      Field.PLAYER1,
      Field.PLAYER1,
      Field.PLAYER1,
      Field.PLAYER2,
      Field.EMPTY,
      Field.PLAYER2,
      Field.PLAYER1,
      Field.PLAYER2,
      Field.PLAYER1,
    ];
    let player = Field.PLAYER2;

    let winningMovePlayer = winningMove(board, player);
    expect(winningMovePlayer).toBe(4);

    board = [
      Field.PLAYER2,
      Field.PLAYER1,
      Field.PLAYER1,
      Field.PLAYER2,
      Field.EMPTY,
      Field.PLAYER2,
      Field.EMPTY,
      Field.PLAYER2,
      Field.PLAYER1,
    ];
    player = Field.PLAYER2;

    winningMovePlayer = winningMove(board, player);
    expect(winningMovePlayer).toBe(4);

    board = [
      Field.PLAYER2,
      Field.PLAYER1,
      Field.PLAYER1,
      Field.PLAYER2,
      Field.PLAYER1,
      Field.PLAYER2,
      Field.EMPTY,
      Field.PLAYER2,
      Field.PLAYER1,
    ];
    player = Field.PLAYER2;

    winningMovePlayer = winningMove(board, player);
    expect(winningMovePlayer).toBe(6);
  });
});

describe("easyMove()", () => {
  it("returns nextMoveWinning if it is possible to win", () => {
    const board = [
      Field.PLAYER1,
      Field.PLAYER1,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.PLAYER2,
      Field.PLAYER2,
      Field.EMPTY,
      Field.EMPTY,
    ];
    const player1 = Field.PLAYER1;

    const winningMovePlayer1 = easyMove(board, player1);
    expect(winningMovePlayer1).toBe(2);
  });
});

describe("pettyMove()", () => {
  it("blocks the other player if possible, even if it could win", () => {
    const board = [
      Field.PLAYER1,
      Field.PLAYER1,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.PLAYER2,
      Field.PLAYER2,
      Field.EMPTY,
    ];
    const player1 = Field.PLAYER1;

    const blockingMovePlayer1 = pettyMove(board, player1);
    expect(blockingMovePlayer1).toBe(8);

    const player2 = Field.PLAYER2;

    const blockingMovePlayer2 = pettyMove(board, player2);
    expect(blockingMovePlayer2).toBe(2);
  });
});

describe("mediumMove()", () => {
  it("returns the winning field index if the player can win", () => {
    const board = [
      Field.PLAYER1,
      Field.PLAYER1,
      Field.EMPTY,
      Field.EMPTY,
      Field.PLAYER2,
      Field.PLAYER2,
      Field.PLAYER2,
      Field.EMPTY,
      Field.EMPTY,
    ];
    const player = Field.PLAYER1;

    const move = mediumMove(board, player);
    expect(move).toBe(2);
  });
  it("blocks the player if he would win in the next move and the current player could not win in the next move", () => {
    const board = [
      Field.PLAYER1,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.PLAYER2,
      Field.PLAYER2,
      Field.PLAYER2,
      Field.EMPTY,
    ];
    const player = Field.PLAYER1;

    const move = mediumMove(board, player);
    expect(move).toBe(8);
  });
  it("chooses the middle (4) field if it cannot block or win in the next move", () => {
    const board = [
      Field.PLAYER1,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.PLAYER2,
      Field.PLAYER2,
      Field.PLAYER1,
      Field.EMPTY,
    ];
    const player = Field.PLAYER1;

    const move = mediumMove(board, player);
    expect(move).toBe(4);
  });
});
