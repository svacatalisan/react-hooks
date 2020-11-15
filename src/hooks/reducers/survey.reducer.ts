export interface Survey {
    question: string;
}

const defaultState = {
    question: undefined
};

const SurveyState = (state: Survey = defaultState, action) => {
    console.log('Alex form', action)
	switch (action.type) {
		case "UPDTE_QUESTION":
			return {
				question: action.payload
			};
		default:
			return state;
	}
};

export default SurveyState;