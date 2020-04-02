import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import gameDataReducer from './reducers/gameDataReducer'

export type AppState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  gameData: gameDataReducer
})

export default function configureStore() {
  const middlewares = [thunkMiddleware]
  const middleWareEnhancer = applyMiddleware(...middlewares)

  return createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  )
}
