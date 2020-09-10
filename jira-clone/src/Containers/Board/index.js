import React, { useEffect } from 'react'
import Category from '../../Components/Category'
import { Paper, Grid } from '@material-ui/core';
import { connect, useSelector } from 'react-redux'

const Board = (props) => {
    const { backlog, inProgress, done } = props

    // const backlog = useSelector(state => state.Tickets.tickets.backlog)
    // const inProgress = useSelector(state => state.Tickets.tickets.inProgress)
    // const done = useSelector(state => state.Tickets.tickets.done)

    // useEffect(() => {
    //     const currentBacklog = backlog
    //     const currentInProgress = props.inProgress
    //     const currentDone = props.done
    //     dispatch({

    //     })
    // }, [backlog, inProgress, done])

    // const users = useSelector(state => state.Users)

    return (
        <Paper>
            <Category title="backlog" tickets={backlog}></Category>
            <Category title="inProgress" tickets={inProgress}></Category>
            <Category title="done" tickets={done}></Category>
        </Paper>
    )
}

// export default Board;

const mapStateToProps = state => {
    return {
        backlog: state.Tickets.tickets.backlog,
        inProgress: state.Tickets.tickets.inProgress,
        done: state.Tickets.tickets.done
    };
};

export default connect(mapStateToProps)(Board);