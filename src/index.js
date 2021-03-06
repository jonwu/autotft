import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store, persistor } from './slices/_store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import ThemeProvider from 'uikit/ThemeProvider'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
