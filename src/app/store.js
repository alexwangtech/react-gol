import { configureStore } from '@reduxjs/toolkit';
import gameOfLifeReducer from '../features/gameoflife/gameOfLifeSlice';

export default configureStore({
  reducer: {
	gameoflife: gameOfLifeReducer,
  },
});
