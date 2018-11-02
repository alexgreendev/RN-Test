import React from 'react'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './src/reducers'
import One from './src/screen1'

//ios
const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(ReduxThunk)
))
//ios
//android
//const store = createStore(reducers, applyWiddleware(ReduxThunk))
//android

const App = () => {
  return (
    <Provider store={store}>
      <One />
    </Provider>
  )
}

export default App
