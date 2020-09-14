import reducerFactory from '../../ReducerFactory';
import TicketsHandlers from './TicketsHandlers';
import Configuration from '../../../Configuration';
import {fromJS} from 'immutable'

const actions = {
    NEW: 'newTicket',
    DElETE: 'deleteTicket',
    UPDATE: 'updateTicket'
}

const handlers = {}
handlers[actions.NEW] = TicketsHandlers.newTicket
handlers[actions.DElETE] = TicketsHandlers.deleteTicket
handlers[actions.UPDATE] = TicketsHandlers.updateTicket

export default reducerFactory(fromJS(Configuration.reduxTicketInitialState), handlers)