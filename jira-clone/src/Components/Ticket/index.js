import React from 'react';
import { Card } from '@material-ui/core'

const Ticket = (props) => {

    const { creator, title, content, allowedUsers } = props
    return (
        <Card>
            <div>creator:{creator} </div>
            <div>title: {title}</div>
            <div>text: {content}</div>
            <div>allowed users: {allowedUsers}</div>
        </Card>
    )
}
export default Ticket