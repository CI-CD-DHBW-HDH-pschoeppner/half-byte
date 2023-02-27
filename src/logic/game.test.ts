import {
  Field,
  Game,
  invertPlayer,
  isFull,
  isPlayer,
  Mode,
  newBoard,
  Player,
} from "./game";

describe("invert player", () => {
  it("invert player1 to player2", () => {
    const result: Field = invertPlayer(Field.PLAYER1);
    expect(result).toBe(Field.PLAYER2);
  });
  it("invert player2 to player1", () => {
    const result: Field = invertPlayer(Field.PLAYER2);
    expect(result).toBe(Field.PLAYER1);
  });
  it("return empty field as empty", () => {
    const result: Field = invertPlayer(Field.EMPTY);
    expect(result).toBe(Field.EMPTY);
  });
});

describe("board is full", () => {
  it("check if empty board is full", () => {
    const board: Field[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(isFull(board)).toBe(false);
  });
  it("check if full board is full", () => {
    const board: Field[] = [1, 1, 1, 1, 1, 1, 1, 1, 1];
    expect(isFull(board)).toBe(true);
  });
  it("check if half full board is full", () => {
    const board: Field[] = [1, 0, 1, 0, 1, 1, 1, 0, 0];
    expect(isFull(board)).toBe(false);
  });
});

describe("test new board", () => {
  it("test new board", () => {
    const board: Field[] = newBoard();
    let isEmpty = true;
    for (const field of board) {
      if (field !== Field.EMPTY) {
        isEmpty = false;
      }
    }
    expect(isEmpty).toBe(true);
  });
});

describe("is player", () => {
  it("check if player1 is player", () => {
    expect(isPlayer(Field.PLAYER1)).toBe(true);
  });
  it("check if player2 is player", () => {
    expect(isPlayer(Field.PLAYER2)).toBe(true);
  });
  it("check if empty is player", () => {
    expect(isPlayer(Field.EMPTY)).toBe(false);
  });
});

describe("add win to player", () => {
  it("add win to player", () => {
    const player: Player = new Player(Field.PLAYER1);
    expect(player.score).toBe(0);
    player.addWin();
    expect(player.score).toBe(1);
  });
});

describe("is player human", () => {
  it("check if player 1 is human", () => {
    const humanPlayer: Player = new Player(Field.PLAYER1);
    expect(humanPlayer.isHuman()).toBe(true);
  });
});

describe("player move", () => {
  it("check if player 1 moves", () => {
    const humanPlayer: Player = new Player(Field.PLAYER1);
    const board: Field[] = newBoard();
    expect(humanPlayer.move(board)).toBe(-1);
  });
});

describe("games add win", () => {
  it("add win to player 1", () => {
    const player1: Player = new Player(Field.PLAYER1);
    const player2: Player = new Player(Field.PLAYER2);
    const game: Game = new Game(player1, player2);
    const starScore: number = player1.score;
    game.addWin(Field.PLAYER1);
    expect(player1.score).toBe(starScore + 1);
  });
  it("add win to player 2", () => {
    const player1: Player = new Player(Field.PLAYER1);
    const player2: Player = new Player(Field.PLAYER2);
    const game: Game = new Game(player1, player2);
    const starScore: number = player2.score;
    game.addWin(Field.PLAYER2);
    expect(player2.score).toBe(starScore + 1);
  });
});

describe("games switch sides", () => {
  it("switch sides", () => {
    const player1: Player = new Player(Field.PLAYER1);
    const player2: Player = new Player(Field.PLAYER2);
    const game: Game = new Game(player1, player2);
    game.addWin(Field.PLAYER1);
    const scorePlayer1 = player1.score;
    const scorePlayer2 = player2.score;
    game.switchSides();
    expect(player1.score).toBe(scorePlayer2);
    expect(player2.score).toBe(scorePlayer1);
  });
});

describe("games update mode", () => {
  it("update to medium", () => {
    const player1: Player = new Player(Field.PLAYER1);
    const player2: Player = new Player(Field.PLAYER2);
    const game: Game = new Game(player1, player2);
    game.updateMode(Mode.MEDIUM);
    expect(game.mode).toBe(Mode.MEDIUM);
  });
  it("update to easy", () => {
    const player1: Player = new Player(Field.PLAYER1);
    const player2: Player = new Player(Field.PLAYER2);
    const game: Game = new Game(player1, player2);
    expect(game.mode).toBe(Mode.EASY);
    game.updateMode(Mode.HARD);
    expect(game.mode).toBe(Mode.HARD);
    game.updateMode(Mode.EASY);
    expect(game.mode).toBe(Mode.EASY);
  });
});
