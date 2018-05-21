////////////STAN KOMPONENTU//////////////


const initialStateForMessages = {

    imBusy: true,
    messages: [],
    newMessage: {},
    error: '', //odpowiada za tresc errora
    imWithError:false
}

/////////////////////////////////////////

//////////// TYPY AKCJI ////////////////////

const TYPES = {

    ADD_MESSAGE: 'ADD_MESSAGE',
    INITIAL_PREFETCH_MESSAGES: "INITIAL_PREFETCH_MESSAGES",
    FETCHED_MESSAGES_WITH_SUCCES: "FETCHED_MESSAGES_WITH_SUCCES",
    FETCHED_MESSAGES_WITH_ERROR: "FETCHED_MESSAGES_WITH_ERROR",

    ADD_MESSSAGE: 'ADD_MESSAGE'

}

////////////////////////////////////////

///////// KREATORY AKCJI ///////////////////

const ACTIONS = {

    initialGetMessages: () => ({

        type: TYPES.INITIAL_PREFETCH_MESSAGES,
        data: {
            imbusy: true
        }
    }),

    handleMessagesWithSucces: (messages) => ({

        type: TYPES.FETCHED_MESSAGES_WITH_SUCCES,
        data: {
            imBusy: false,
            messages
        }
    }),

    handleMessagesWithError: (messages) => ({

        type: TYPES.FETCHED_MESSAGES_WITH_SUCCES,
        data: {
            imBusy: false,
            imWithError: true,
            error
        }
    })


}


///////////////////////////////////////