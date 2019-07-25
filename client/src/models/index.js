
export default {
  namespace: 'layout',
  state: {
    isMouseEnter: false
  },
  reducers: {
    mouse(state, { payload }) {
      state.isMouseEnter = payload
      return { ...state }  // 不能直接返回state, 改变state内部不算state发生改变
    }
  }
}