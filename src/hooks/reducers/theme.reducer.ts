export interface Theme {
    isDark: boolean;
}

const defaultState = {
    isDark: false
};

const ThemeState = (state: Theme = defaultState, action) => {
	switch (action.type) {
		case "TOGGLE_DARK_MODE":
			return {
				isDark: !state.isDark
			};
		default:
			return state;
	}
};

export default ThemeState;