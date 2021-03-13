const INCREMENTAR_TEMPO = 'aluno/INCREMENTAR_TEMPO';
const REDUZIR_TEMPO = 'aluno/REDUZIR_TEMPO';
const MODIFICAR_EMAIL = 'aluno/MODIFICAR_EMAIL';

const initialState = {
	nome: 'Gabriel Dal Carobo',
	email: 'gabriel@aularedux.com',
	diasRestantes: 120,
};

export const incrementarTempo = () => ({ type: INCREMENTAR_TEMPO });
export const reduzirTempo = () => ({ type: REDUZIR_TEMPO });
export const modificarEmail = (email) => ({
	type: MODIFICAR_EMAIL,
	payload: email,
});

const alunoReducer = immer.produce((state, action) => {
	switch (action.type) {
		case INCREMENTAR_TEMPO:
			state.diasRestantes++;
			break;
		case REDUZIR_TEMPO:
			state.diasRestantes--;
			break;
		case MODIFICAR_EMAIL:
			state.email = action.payload;
			break;
	}
}, initialState);

export default alunoReducer;
