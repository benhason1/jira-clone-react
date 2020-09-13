import TicketReducer from './Reducers/Tickets';
import UserReducer from './Reducers/Users';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    Tickets: TicketReducer,
    Users: UserReducer
})

export default TicketReducer