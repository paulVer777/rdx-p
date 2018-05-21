import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ACTIONS } from './redux'

const mockMessages = ['to', 'jest', 'wiadomosc']

const DumpMessagesList = props => {
    console.log('jest', props)
    return (
        <div>
            <button
                onClick={() => {
                    props.actions.init()
                }}
            >
                Init
            </button>
            <button
                onClick={() => {
                    props.actions.handleSuccess(mockMessages)
                }}
            >
                Success
            </button>

            <button
                onClick={() => {
                    props.actions.handleError("coś się stało")
                }}
            >
                Error
            </button>

            <h1>{JSON.stringify(props.state)}</h1>

            <h3>{props.state.imBusy ? 'ładuje' : ''}</h3>
            <h3>{props.state.imWithError ? props.state.error : ''}</h3>

        </div>
    )
}

const mapStateToProps = state => ({ state: state })

const mapDispatchToProps = dispatch => ({
    actions: {
        init: () => dispatch(ACTIONS.initialGetMessages()),
        handleSuccess: messages =>
            dispatch(ACTIONS.handleMessagesWithSuccess(messages)),
        handleError: error =>
            dispatch(ACTIONS.handleMessagesWithError(error))
    }
})

const MessagesList = connect(mapStateToProps, mapDispatchToProps)(
    DumpMessagesList
)

export { MessagesList }