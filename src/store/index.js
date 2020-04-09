import { createStore } from 'redux'

// 创建reducer
function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1
    case 'MINUS':
      return state - 1
    default:
      return state
  }
}

const store = new createStore(counterReducer)

export default store
