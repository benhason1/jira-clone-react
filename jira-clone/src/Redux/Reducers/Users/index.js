import reducerFactory from '../../ReducerFactory'
import UsersHandlers from './UsersHandlers';

const actions = {
    NEW: 'newUser',
    DElETE: 'deleteUser'
}

const handlers = {}
handlers[actions.NEW] = UsersHandlers.newUser

export default reducerFactory({ users: [] }, handlers)