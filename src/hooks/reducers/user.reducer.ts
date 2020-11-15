export interface User {
    firstname: string;
    lastname: string;
}

const defaultState = {
    firstname: undefined,
    lastname: undefined
};

const UserState = (state: User = defaultState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default UserState;