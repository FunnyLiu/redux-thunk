function createThunkMiddleware(extraArgument) {
  // store.dispatch方法正常情况下，参数只能是对象，不能是函数。
  // next为传入的action外壳函数
  return ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }
    // 通过函数来操作action，相当于套了一层。
    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
