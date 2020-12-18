import { createSlice } from '@reduxjs/toolkit';

// Board configuration constants
const BOARD_SIZE = 25;
const LEFT = 0;
const RIGHT = 24;
const TOP = 0;
const BOT = 24;

export const gameOfLifeSlice = createSlice({
	name: 'gameoflife',
	initialState: {
		board: createBoard(), 
	},
	reducers: {
		setPulsar: state => {
			const pulsarIndexes = [
				[5, 9],
				[6, 9],
				[7, 9],
				[7, 10],
				[5, 15],
				[6, 15],
				[7, 15],
				[7, 14],
				[9, 5],
				[9, 6],
				[9, 7],
				[9, 10],
				[9, 11],
				[9, 13],
				[9, 14],
				[9, 17],
				[9, 18],
				[9, 19],
				[10, 7],
				[10, 9],
				[10, 11],
				[10, 13],
				[10, 15],
				[10, 17],
				[11, 9],
				[11, 10],
				[11, 14],
				[11, 15],
				[13, 9],
				[13, 10],
				[13, 14],
				[13, 15],
				[14, 7],
				[14, 9],
				[14, 11],
				[14, 13],
				[14, 15],
				[14, 17],
				[15, 5],
				[15, 6],
				[15, 7],
				[15, 10],
				[15, 11],
				[15, 13],
				[15, 14],
				[15, 17],
				[15, 18],
				[15, 19],
				[17, 9],
				[18, 9],
				[19, 9],
				[17, 10],
				[17, 15],
				[18, 15],
				[19, 15],
				[17, 14],
			];

			// Get a fresh board of false values
			let newBoard = createBoard();

			// Set the selected indexes to 'X'
			pulsarIndexes.forEach((item) => {
				newBoard[item[0]][item[1]] = true;
			});

			state.board = newBoard;
		},
		updateBoard: state => {
			let board = state.board;
			let newBoard = createBoard();

			for (let r = 0; r < BOARD_SIZE; r++) {
				for (let c = 0; c < BOARD_SIZE; c++) {
					// Top left corner case
					if (r === TOP && c === LEFT) {
						// Get alive cases
						let alive = 0;
						if (board[r + 1][c] === true) {
							++alive;	
						}
						if (board[r + 1][c + 1] === true) {
							++alive;	
						}
						if (board[r][c + 1] === true) {
							++alive;	
						}
						
						// Set the new value
						newBoard[r][c] = calcNewCell(board[r][c], alive);
					}
					// Top right corner case
					else if (r === TOP && c === RIGHT) {
						// Get alive cases
						let alive = 0;
						if (board[r + 1][c] === true) {
							++alive;	
						}
						if (board[r + 1][c - 1] === true) {
							++alive;	
						}
						if (board[r][c - 1] === true) {
							++alive;	
						}
						
						// Set the new value
						newBoard[r][c] = calcNewCell(board[r][c], alive);
					}
					// Bottom left corner case
					else if (r === BOT && c === LEFT) {
						// Get alive cases
						let alive = 0;
						if (board[r - 1][c] === true) {
							++alive;	
						}
						if (board[r - 1][c + 1] === true) {
							++alive;	
						}
						if (board[r][c + 1] === true) {
							++alive;	
						}
						
						// Set the new value
						newBoard[r][c] = calcNewCell(board[r][c], alive);
					}
					// Bottom right corner case
					else if (r === BOT && c === RIGHT) {
						// Get alive cases
						let alive = 0;
						if (board[r - 1][c] === true) {
							++alive;	
						}
						if (board[r - 1][c - 1] === true) {
							++alive;	
						}
						if (board[r][c - 1] === true) {
							++alive;	
						}
						
						// Set the new value
						newBoard[r][c] = calcNewCell(board[r][c], alive);
					}
					// Top edge case
					else if (r === TOP) {
						// Get alive cases
						let alive = 0;
						if (board[r][c - 1] === true) {
							++alive;
						}
						if (board[r][c + 1] === true) {
							++alive;
						}
						if (board[r + 1][c - 1] === true) {
							++alive;
						}
						if (board[r + 1][c] === true) {
							++alive;
						}
						if (board[r + 1][c + 1] === true) {
							++alive;
						}

						// Set the new value
						newBoard[r][c] = calcNewCell(board[r][c], alive);
					}
					// Bot edge case
					else if (r === BOT) {
						// Get alive cases
						let alive = 0;
						if (board[r][c - 1] === true) {
							++alive;
						}
						if (board[r][c + 1] === true) {
							++alive;
						}
						if (board[r - 1][c - 1] === true) {
							++alive;
						}
						if (board[r - 1][c] === true) {
							++alive;
						}
						if (board[r - 1][c + 1] === true) {
							++alive;
						}

						// Set the new value
						newBoard[r][c] = calcNewCell(board[r][c], alive);
					}
					// Left edge case
					else if (c === LEFT) {
						// Get alive cases
						let alive = 0;
						if (board[r - 1][c] === true) {
							++alive;
						}
						if (board[r + 1][c] === true) {
							++alive;
						}
						if (board[r - 1][c + 1] === true) {
							++alive;
						}
						if (board[r][c + 1] === true) {
							++alive;
						}
						if (board[r + 1][c + 1] === true) {
							++alive;
						}

						// Set the new value
						newBoard[r][c] = calcNewCell(board[r][c], alive);
					}
					// Right edge case
					else if (c === RIGHT) {
						// Get alive cases
						let alive = 0;
						if (board[r - 1][c] === true) {
							++alive;
						}
						if (board[r + 1][c] === true) {
							++alive;
						}
						if (board[r - 1][c - 1] === true) {
							++alive;
						}
						if (board[r][c - 1] === true) {
							++alive;
						}
						if (board[r + 1][c - 1] === true) {
							++alive;
						}

						// Set the new value
						newBoard[r][c] = calcNewCell(board[r][c], alive);
					}
					// All other cases (normal cases)
					else {
						// Get alive cases
						let alive = 0;
						if (board[r][c - 1] === true) {
							++alive;
						}
						if (board[r][c + 1] === true) {
							++alive;
						}
						if (board[r - 1][c - 1] === true) {
							++alive;
						}
						if (board[r - 1][c] === true) {
							++alive;
						}
						if (board[r - 1][c + 1] === true) {
							++alive;
						}
						if (board[r + 1][c - 1] === true) {
							++alive;
						}
						if (board[r + 1][c] === true) {
							++alive;
						}
						if (board[r + 1][c + 1] === true) {
							++alive;
						}

						// Set the new value
						newBoard[r][c] = calcNewCell(board[r][c], alive);
					}
				}
			}	

			state.board = newBoard;
		}	
	}
});

// Helper function for calculating the new value a board cell
function calcNewCell(currVal, aliveNeighbors) {
	if (currVal === true) {
		if (aliveNeighbors === 2 || aliveNeighbors === 3) {
			return true;
		} else {
			return false;
		}
	} else {
		if (aliveNeighbors === 3) {
			return true;
		} else {
			return false;
		}
	}
}

// Helper function for creating a blank board
function createBoard() {
	let board = Array(BOARD_SIZE);
	for (let i = 0; i < BOARD_SIZE; i++) {
		board[i] = Array(BOARD_SIZE).fill(false);
	}
	return board;
}

// Selector for retrieving the board from the state
export const selectBoard = state => state.gameoflife.board;

export const { setPulsar, updateBoard } = gameOfLifeSlice.actions; 
export default gameOfLifeSlice.reducer;
