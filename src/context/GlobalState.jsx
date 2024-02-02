import React, { createContext, useReducer } from 'react';

import sortsReducer from './sortsReducer';

const initialState = {
	selectedSort: {
		strategy: '',
		key: '',
		value: '',
	},
};

export const GlobalContext = createContext(initialState);

const combineReducers = reducers => {
	return (state = {}, action) => {
		const newState = {};
		for (let key in reducers) {
			newState[key] = reducers[key](state[key], action);
		}
		return newState;
	};
};

const reducer = combineReducers({
	selectedSort: sortsReducer,
});

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const store = React.useMemo(() => [state, dispatch], [state]);

	return (
		<GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
	);
};
