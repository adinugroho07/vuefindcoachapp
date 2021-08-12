export default {
    registerCoachActions(context, payload) {
        const coachData = {
            id: 'c' + 9,
            firstName: payload.firstname,
            lastName: payload.lastname,
            areas: payload.areas,
            description: payload.description,
            hourlyRate: payload.rate,
        };
        context.commit('registerCoach', coachData);
    }
}