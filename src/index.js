import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./components/App"
import { store, persistor } from "./redux/store"
import "./styles/global.scss"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
