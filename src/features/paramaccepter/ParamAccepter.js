import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPulsar } from '../gameoflife/gameOfLifeSlice';
import styles from './ParamAccepter.module.css';

/*
 * This is our react component for accepting the user parameters
 * For now, let's keep it as a simple button for setting up the redux state.
 */
export function ParamAccepter() {
	const dispatch = useDispatch();

	return (
		<div className={styles.mainBody}>
			<div className={styles.container}>
				<h1>Game of Life: Pulsar</h1>
				<Link to="/game-of-life">
					{ /* On click, this button will also dispatch 'setPulsar' action to gameOfLifeSlice.js */ }
					<button type="button" onClick={() => dispatch(setPulsar())}>Click Me!</button>
				</Link>
			</div>
		</div>
	);
}
