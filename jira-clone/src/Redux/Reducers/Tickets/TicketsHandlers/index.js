import { v4 } from "uuid";
import * as _ from 'lodash'
import { fromJS, List } from "immutable";

export default {
    newTicket: (state, action) => {
        let ticketToAdd = {}

        if (action.ticket && action.ticketStatus && state.getIn(["tickets", action.ticketStatus])) {
            ticketToAdd["id"] = v4()
            ticketToAdd["content"] = action.ticket
        }

        return state.updateIn(["tickets", action.ticketStatus], List(), list => list.push(fromJS(ticketToAdd)))

    },

    deleteTicket: (state, action) => {

        if (action.ticketId) {
            return state.updateIn(
                ["tickets"],
                List(),
                list => {
                    let ticketsAfterRemove = Object.fromEntries(
                        Object.entries(list.toJS()).map(([key, categoryTickets]) =>
                            [
                                key, categoryTickets.filter((ticket) => {
                                    return ticket['id'] != action.ticketId;
                                })
                            ]
                        )
                    )
                    return fromJS(ticketsAfterRemove)
                })
        }

        return state

    },

    updateTicket: (state, action) => {
        if (!action.ticketId || !action.newState) {
            return state;
        }
        return state.updateIn(
            ["tickets"],
            List(),
            list => {
                let ticketToUpdate = null;
                let ticketsAfterRemove = Object.fromEntries(
                    Object.entries(list.toJS()).map(([key, categoryTickets]) =>
                        [
                            key, categoryTickets.filter((ticket) => {
                                if (ticket['id'] == action.ticketId) {
                                    ticketToUpdate = ticket
                                }

                                return ticket['id'] != action.ticketId;
                            })
                        ]
                    )
                )
                if (ticketToUpdate)
                    ticketsAfterRemove[action.newState].push(ticketToUpdate)
                return fromJS(ticketsAfterRemove)
            })

    }
}
