import store from './store/store.js';
import { fetchToken } from './store/token.js';
import { fetchUser } from './store/user.js';

async function login(user) {
	let state = store.getState();
	if (state.token.data === null) {
		await store.dispatch(fetchToken(user));
		state = store.getState();
	}
	await store.dispatch(fetchUser(state.token.data));
}

login({ username: 'dog', password: 'dog' });
