import React, { useContext } from "react";
import Context from "../../shared/context/context";
import { useForm } from "react-hook-form";

export default function SurveyFormComponent({ execOnSubmit }) {
  const { register, handleSubmit, errors } = useForm();
  const { state, dispatch } = useContext(Context);
  const { question } = state.SurveyState;
    
  const onSubmit = data => {
      if (data.text.localeCompare(question) !== 0) {
        dispatch({type: 'UPDTE_QUESTION', payload: data.text});
        execOnSubmit(false)
      } else {
          cancel();
      }
  };

  const cancel = () => {
    execOnSubmit(false);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <textarea name="text" defaultValue={question} ref={register({ required: true })} ></textarea>
      {errors.text && <span>This field is required</span>}
      <span className="flex-row">
        <input type="submit" value="Submit" />
        <button onClick={cancel}>Cancel</button>
      </span>
    </form>
  );
}