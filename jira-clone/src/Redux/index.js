import TicketReducer from './Reducers/Tickets';
import UserReducer from './Reducers/Users';
import { combineReducers, createStore } from 'redux';

const reducers = combineReducers({
    Tickets: TicketReducer,
    Users: UserReducer
})

const store = createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

export default store