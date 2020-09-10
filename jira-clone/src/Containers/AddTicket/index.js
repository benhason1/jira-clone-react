import React from 'react'
import { connect } from 'react-redux'
import Ticket from '../../Dal/Ticket'

const AddTicket = ({ dispatch }) => {

    let titleInput
    let textInput
    let allowedUsers

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!titleInput.value.trim()) {
                    return
                }

                dispatch(
                    {
                        type: "newTicket",
                        ticket: new Ticket("ben", titleInput.value, textInput.value, [allowedUsers.value]),
                        ticketStatus: "backlog"
                    })
                textInput.value = ''
                titleInput.value = ''
                allowedUsers.value = ''
            }}>
                <input placeholder="title" ref={node => titleInput = node} />
                <input placeholder="text" ref={node => textInput = node} />
                <input placeholder="allowed users" ref={node => allowedUsers = node} />

                <button type="submit">
                    Add Ticket
                </button>
            </form>
        </div>
    )
}

export default connect()(AddTicket)