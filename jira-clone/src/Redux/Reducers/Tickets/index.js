import reducerFactory from '../../ReducerFactory';
import TicketsHandlers from './TicketsHandlers';
import Configuration from '../../../Configuration';

const actions = {
    NEW: 'newTicket',
    DElETE: 'deleteTicket'
}

const handlers = {}
handlers[actions.NEW] = TicketsHandlers.newTicket
handlers[actions.DElETE] = TicketsHandlers.deleteTicket

export default reducerFactory(Configuration.reduxTicketInitialState, handlers)