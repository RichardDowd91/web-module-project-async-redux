import { INPUT_CHANGE, SUBMIT_SPEAK } from "./action-types";
import axios from "axios";

export const inputChange = value => ({type: INPUT_CHANGE, payload: value})

export const postToApi = text => dispatch => {
    axios.post( `https://api.funtranslations.com/translate/yoda.json`, { text: text})
    .then(res => {
        console.log(res)
        dispatch({ type: SUBMIT_SPEAK, payload: res.contents.text })
    })
    .catch(err => {
        console.log(err)
    })
}