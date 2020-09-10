import { v4 } from "uuid";
import * as _ from 'lodash'

export default {
    newTicket: (state, action) => {

        let copy = _.cloneDeep(state)
        let ticketToAdd = {}

        if (action.ticket && action.ticketStatus && state.tickets[action.ticketStatus]) {
            ticketToAdd["id"] = v4()
            ticketToAdd["content"] = action.ticket
            copy.tickets[action.ticketStatus].push(ticketToAdd)
        }
        return { ...copy, ticketToAdd }
    },

    deleteTicket: (state, action) => {
        if (action.ticketId) {
            for (let key of Object.keys(state.tickets)) {
                state.tickets[key] = state.tickets[key].filter((value, index, arr) => { return value.id != action.ticketId })
            }
        }
        return { ...state }
    }
}
