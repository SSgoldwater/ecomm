import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import reducer from 'store/reducers/reducer'

const initialState = {}

const createEcommStore = ({ client, history }) => (
  createStore(
    reducer,
    initialState,
    applyMiddleware(ReduxThunk.withExtraArgument({
      client,
      history
    }))
  )
)


export default createEcommStore

