// import update from 'immutability-helper';
import {
	GAME_IDLE
} from '../constants';

export const types = {
	UPDATE_STATE: '@accessibility-lab/audio-cue/game/update_state',
	ENABLE_END: '@accessibility-lab/audio-cue/game/enable_end'
};

export const initialState = {
	state: GAME_IDLE,
	end: false
};

export const GameReducer =  (state = initialState, action) => {
	switch (action.type) {
		case types.UPDATE_STATE:
			return {
				...state,
				state: action.state
			};
		case types.ENABLE_END:
			return {
				...state,
				end: action.state
			};

		default:
			return state;
	}
};

export const actions = {
	updateState: (state) => ({ type: types.UPDATE_STATE, state }),
	enableEnd: (state) => ({ type: types.ENABLE_END, state })
};
