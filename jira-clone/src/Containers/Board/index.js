import React, { useEffect } from 'react'
import Category from '../../Components/Category'
import { Paper, Grid } from '@material-ui/core';
import { connect, useSelector } from 'react-redux'
import withImmutablePropsToJS from 'with-immutable-props-to-js'

const Board = (props) => {
    const { backlog, inProgress, done } = props

    console.log("props:",props)

    return (
        <Paper>
            <Category title="backlog" tickets={backlog}></Category>
            <Category title="inProgress" tickets={inProgress}></Category>
            <Category title="done" tickets={done}></Category>
        </Paper>
    )
}


const mapStateToProps = state => {
    return {
        backlog: state.getIn(["tickets", "backlog"]),
        inProgress: state.getIn(["tickets", "inProgress"]),
        done: state.getIn(["tickets", "done"])
    };
};

export default connect(mapStateToProps)(withImmutablePropsToJS(Board));