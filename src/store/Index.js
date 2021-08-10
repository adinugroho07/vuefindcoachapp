import { createStore } from 'vuex';
import CoachesIndex from './modules/coaches/CoachesIndex.js';

const allstate = createStore({
    modules: {
        coachstate: CoachesIndex
    }
});

export default allstate;