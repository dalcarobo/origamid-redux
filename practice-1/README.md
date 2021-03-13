<h1 align="center">Redux - Practice 1</h1>

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

Exercise using precompiled Redux build.

## :sparkles: Exercise Details

First of all, this exercise was made using Portuguese language.
Here is the words not translated:

**aula/aulas** = class/classes/lesson/lessons
**aluno** = student

Using Redux (using Immer or not);
Create a store with initial states below;
Create following actions:

- aluno/INCREMENTAR_TEMPO, add 1 access day
- aluno/REDUZIR_TEMPO, remove 1 access day
- aluno/MODIFICAR_EMAIL(email), modify email
- aulas/COMPLETAR_AULA(id), completes "aula" based on ID
- aulas/COMPLETAR_CURSO, completes all "aulas"
- aulas/RESETAR_CURSO, resets all "aulas"

Create constants and actions creators;
Create a reducer for "aluno" and "aulas"
Render on screen the name, email, access days and total completed "aulas"
Configure DevTools

```js
const aluno = {
	nome: 'André Rafael',
	email: 'andre@origamid.com',
	diasRestantes: 120,
};

const aulas = [
	{
		id: 1,
		nome: 'Design',
		completa: true,
	},
	{
		id: 2,
		nome: 'HTML',
		completa: false,
	},
	{
		id: 3,
		nome: 'CSS',
		completa: false,
	},
	{
		id: 4,
		nome: 'JavaScript',
		completa: false,
	},
];
```

## :rocket: Technologies

The following tools were used in this project:

- [Redux](https://redux.js.org/)
- [Immer](https://github.com/immerjs/immer)

## :memo: License

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.

Made with :heart: by <a href="https://github.com/dalcarobo" target="_blank">Gabriel Dal Carobo</a>

&#xa0;

<a href="#top">Back to top</a>
