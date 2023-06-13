import React from 'react'
import { Provider } from 'react-redux'
import store from './Store/index'
import CounterComponent from './CounterComponent'

export default function MyApp() {
  return (
    <Provider store={store}>
      <CounterComponent/>
    </Provider>
  )
}
