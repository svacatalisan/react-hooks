import React, { useContext, useState } from "react";
import Context from "../../shared/context/context";
import SurveyFormComponent from '../survey-form/survey-form.component';

const AddEditSurvey = () => {
	const { state, dispatch } = useContext(Context);
    const { question } = state.SurveyState;
    const [ edit, setEdit ] = useState(false);

    const toggleEdit = edit => {
        if (!edit) {
            setEdit(true);
        }
    }
	
    let surveySection;
    if (edit) {
        surveySection = <SurveyFormComponent execOnSubmit={setEdit} />;
    } else {
        surveySection = <span dangerouslySetInnerHTML={{
            __html: question
          }}></span>;
    }
	
	return (
        <div onClick={() => toggleEdit(edit)}>
            {surveySection}
        </div>
	);
};

export default AddEditSurvey;