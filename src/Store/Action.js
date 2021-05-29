import superagent from 'superagent';
import { getProducts } from './Products';

export const getRemoteData = function (api) {
	return (dispatch) => {
		return superagent.get(api).then((response) => {
			dispatch(getProducts({ results: response.body.results }));
		});
	};
};