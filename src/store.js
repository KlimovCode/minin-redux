export const createStore = (reducer, initialState = {}) => {
  let _state = reducer(initialState, { type: '__INIT__' })
  const subscribers = []

  return {
    dispatch(action) {
      _state = reducer(_state, action)
      subscribers.forEach(sub => sub())
    },
    subscribe(callback) {
      subscribers.push(callback)
    },
    getState() {
      return this._state
    }
  }
}