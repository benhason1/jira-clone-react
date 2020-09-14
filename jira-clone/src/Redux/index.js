import TicketReducer from './Reducers/Tickets';
import UserReducer from './Reducers/Users';
import { combineReducers } from 'redux-immutable';

const reducers = combineReducers({
    Tickets: TicketReducer,
    Users: UserReducer
})

export default reducers