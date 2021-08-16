import RequestsMutations from './RequestMutations.js';
import RequestsActions from './RequestsActions.js';
import RequestsGetters from './RequestsGetters.js';

const requeststate = {
    namespaced: true,
    state: () => ({
        requests: []
    }),
    actions: RequestsActions,
    getters: RequestsGetters,
    mutations: RequestsMutations,
};

export default requeststate;