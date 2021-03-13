import getLocalStorage from '../helper/getLocalStorage.js';

const TOKEN_FETCH_STARTED = 'token/FETCH_STARTED';
const TOKEN_FETCH_SUCCESS = 'token/FETCH_SUCCESS';
const TOKEN_FETCH_ERROR = 'token/FETCH_ERROR';

const tokenFetchStarted = () => ({ type: TOKEN_FETCH_STARTED });
const tokenFetchSuccess = (token_) => ({
	type: TOKEN_FETCH_SUCCESS,
	payload: token_,
	localStorage: 'token',
});
const tokenFetchError = (error) => ({
	type: TOKEN_FETCH_ERROR,
	payload: error,
});

export const fetchToken = (user) => async (dispatch) => {
	try {
		dispatch(tokenFetchStarted());
		const response = await fetch(
			'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(user),
			}
		);
		const { token } = await response.json();
		dispatch(tokenFetchSuccess(token));
	} catch (error) {
		dispatch(tokenFetchError(error.message));
	}
};

const initialState = {
	loading: false,
	data: getLocalStorage('token', null),
	error: null,
};

function token(state = initialState, action) {
	switch (action.type) {
		case TOKEN_FETCH_STARTED:
			return { ...state, loading: true };
		case TOKEN_FETCH_SUCCESS:
			return { data: action.payload, loading: false, error: null };
		case TOKEN_FETCH_ERROR:
			return { data: null, loading: false, error: action.payload };
		default:
			return state;
	}
}

export default token;
