import { createStore,} from 'redux'
import { bankingReducer } from './Reducers/bankingReducer'
import { composeWithDevTools } from 'redux-devtools-extension'


import { rootReducer } from './Reducers/rootReducer'

export const store = createStore(rootReducer, composeWithDevTools())
    