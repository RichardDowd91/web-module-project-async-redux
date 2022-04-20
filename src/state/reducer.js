import { INPUT_CHANGE, SUBMIT_SPEAK } from "./action-types"

const  initialState = {
    userInput: '',
    programOutput: ''
  } 

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case INPUT_CHANGE:
            return {...state, userInput: action.payload}
        case SUBMIT_SPEAK:
            return { ...state, programOutput: action.payload.text}
        default:
            return state
    }
}