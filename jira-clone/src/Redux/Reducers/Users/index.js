import reducerFactory from '../../ReducerFactory'
import UsersHandlers from './UsersHandlers';
import { fromJS } from 'immutable'

const actions = {
    NEW: 'newUser',
    DElETE: 'deleteUser'
}

const handlers = {}
handlers[actions.NEW] = UsersHandlers.newUser

export default reducerFactory(fromJS({ users: [] }), handlers)