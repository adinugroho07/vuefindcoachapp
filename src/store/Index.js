import { createStore } from 'vuex';
import CoachesIndex from './modules/coaches/CoachesIndex.js';
import requeststate from './modules/requests/RequestsIndex.js';

const allstate = createStore({
    modules: {
        coachstate: CoachesIndex,
        requestsstate: requeststate
    },
    state: () => ({
        isLoggedIn: false,
        idLogin: ''
    }),
    mutations: {
        login(state, payload) {
            state.isLoggedIn = true;
            state.idLogin = payload.id;
        },
        logout(state) {
            state.idLogin = '';
            state.isLoggedIn = false;
        },

    },
    actions: {
        actionsLogin(context, payload) {
            context.commit('login', { id: payload.id });
        },
        actionsLogout(context) {
            context.commit('logout');
        }
    },
    getters: {
        getLoginId(state) {
            return state.idLogin;
        },
        getStatusLogin(state) {
            return state.isLoggedIn;
        }
    }

});

export default allstate;