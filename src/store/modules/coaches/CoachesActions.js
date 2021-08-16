export default {
    registerCoachActions(context, payload) {
        const coachData = {
            id: 'c' + (context.getters['getListCoach'].length + 1),
            firstName: payload.firstname,
            lastName: payload.lastname,
            areas: payload.areas,
            description: payload.description,
            hourlyRate: payload.rate,
        };
        console.log(coachData);
        context.commit('registerCoach', coachData);
    }
}