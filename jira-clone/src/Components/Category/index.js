import React from 'react';
import { Paper } from '@material-ui/core'
import Ticket from '../../Components/Ticket';
import { useDispatch } from 'react-redux'

const Category = (props) => {

    const { tickets, title } = props
    const dispatch = useDispatch()

    return <Paper>
        <h1>{title}</h1>
        {
            tickets.map(ticket => {
                return (
                    <div>
                        <button onClick={() => dispatch({ type: "deleteTicket", ticketId: ticket.id })}>X</button>
                        <button onClick={() => dispatch({ type: "updateTicket", ticketId: ticket.id, newState: "backlog" })}>backlog</button>
                        <button onClick={() => dispatch({ type: "updateTicket", ticketId: ticket.id, newState: "inProgress" })}>inProgress</button>
                        <button onClick={() => dispatch({ type: "updateTicket", ticketId: ticket.id, newState: "done" })}>done</button>


                    <Ticket creator={ticket.content.creatorId} title={ticket.content.title} content={ticket.content.content} allowedUsers={ticket.content.allowedUsers}></Ticket>
                    </div>
                )
            })
        }
    </Paper >
}

export default Category;