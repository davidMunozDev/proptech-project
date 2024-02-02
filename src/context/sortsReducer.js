
const ACTIONS_REDUCERS = {
  SET_SORT: (state, action) => action.payload
};

export default (state, action) => {
  const actionReducer = ACTIONS_REDUCERS[action.type];
  return actionReducer ? actionReducer(state, action) : state;
};
