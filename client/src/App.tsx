import { Provider } from "react-redux"
import routers from "./routes"
import { PersistGate } from "redux-persist/integration/react"
import { persistor, store } from "./store"

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <div>{routers()}</div>
      </PersistGate>
    </Provider>
  )
}

export default App