
export default {
  namespace: 'register',
  state: {
    category: [],
    current: 0
  },
  reducers: {
    current(state, { payload }) {
      state.current = payload
      return { ...state }
    }
  }
}