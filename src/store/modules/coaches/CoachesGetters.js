export default {
    getListCoach(state) {
        return state.coaches;
    },
    hasCoaches(state) {
        return state.coaches && state.coaches.length > 0;
    },
    getSelectedCoach: (state) => (id) => {
        return state.coaches.find(co => co.id === id);
    }
}