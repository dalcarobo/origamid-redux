<h1 align="center">Redux - Practice 2</h1>

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-exercise-details">Exercise Details</a> &#xa0; | &#xa0; 
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/dalcarobo" target="_blank">Author</a>
</p>

<br>

## :dart: About

Exercise using precompiled Redux build, focusing in middlewares and side-effects.

## :sparkles: Exercise Details

Organize source-code in differents files
Create 2 reducers: token and user;
Create following actions:

- token/FETCH_STARTED
- token/FETCH_SUCCESS
- token/FETCH_ERROR
- user/FETCH_STARTED
- user/FETCH_SUCCESS
- user/FETCH_ERROR

Create constants and action creators;
Create middlewares: thunk and localStorage;
With provided API, get token:
User credentials:

```js
{ username: 'dog', password: 'dog'}
```

Token:

```js
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
```

User:

```js
const response = await fetch('https://dogsapi.origamid.dev/json/api/user', {
	method: 'GET',
	headers: {
		Authorization: 'Bearer ' + token,
	},
});
const data = await response.json();
```

API call must go inside action creator of async functions;
Check if token exists, if true, call the function to get user. If false, call the function do get token then call user;

## :rocket: Technologies

The following tools were used in this project:

- [Redux](https://redux.js.org/)

## :memo: License

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.

Made with :heart: by <a href="https://github.com/dalcarobo" target="_blank">Gabriel Dal Carobo</a>

&#xa0;

<a href="#top">Back to top</a>
