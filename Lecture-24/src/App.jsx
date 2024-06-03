import React from 'react'
import CakeContainer from './Component/CakeContainer'
import ChocoContaier from './Component/ChocoContainer'
import store from './Redux/Store'
import { Provider } from 'react-redux'


const App = () => {
  return (
    <div>
      <Provider store={ store}>
        <CakeContainer/>
        <ChocoContaier/>
      </Provider>
    </div>
  )
}

export default App
