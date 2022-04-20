import React from "react";
import { connect } from 'react-redux'
import { postToApi, inputChange } from "../state/action-creators";

export function FormInput(props) {
    console.log(props);
    const onSubmit = evt => {
        evt.preventDefault()
        props.postToApi(props.userInput)
    }

    const onChange = evt => {
        const { value } = evt.target
        props.inputChange(value)
    }
    
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        onChange={onChange}
        value={props.userInput}
        placeholder="Tell Yoda what to say"
      />
      <input type="submit" />
    </form>
  );
}

const mapStatetoProps = (state) => {
    console.log(state);
    return state
}

export default connect(mapStatetoProps, {postToApi, inputChange} )(FormInput)