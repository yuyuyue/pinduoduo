
export default {
  namespace: 'login',
  state: {
    loginType: 1,
  },
  reducers: {
    change(state, { payload }) {
      state.loginType = payload.loginType
      return { ...state }  // 不能直接返回state, 改变state内部不算state发生改变
    }
  }
}