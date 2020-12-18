import React from 'react';
import { connect } from 'react-redux';
import styles from './GameOfLife.module.css';
import { updateBoard } from './gameOfLifeSlice.js';

class GameOfLife extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			generation: 1,
		};
	}

	// Start the interval
	componentDidMount() {
		this.intervalId = setInterval(
			() => {
				this.props.updateBoard();
				this.setState({ generation: this.state.generation + 1 });
			}, 1000
		);
	}

	// Clear the interval
	componentWillUnmount() {
		clearInterval(this.intervalId);
	}

	render() {
		return (
			<div className={styles.mainBody}>
				<div className={styles.flexContainer}>
					<div className={styles.innerContainer}>
						<h1 className={styles.textCenter}>Pulsar</h1>
						<table>
							<tbody>
							{this.props.board.map((arrayRow, rowIndex) => {
								return (
									<tr key={'row' + rowIndex}>
										{arrayRow.map((item, itemIndex) => {
											return (
												<td
													key={'row' + rowIndex + 'item' + itemIndex}
													className={item === false ? styles.squareBlank : styles.squareFilled}
												>
												</td>
											);
										})}
									</tr>
								);
							})}	
							</tbody>
						</table>
						<span>Generation: {this.state.generation}</span>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	board: state.gameoflife.board
})

const mapDispatchToProps = {
	updateBoard	
} 

export default connect(mapStateToProps, mapDispatchToProps)(GameOfLife);
