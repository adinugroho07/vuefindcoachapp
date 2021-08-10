export default {
    registerCoachActions(context, payload) {
        const coachData = {
            id: 'c' + 9,
            firstname: payload.firstname,
            lastname: payload.lastname,
            description: payload.description,
            rate: payload.rate,
            areas: payload.areas
        };
        context.commit('registerCoach', coachData);
    }
}