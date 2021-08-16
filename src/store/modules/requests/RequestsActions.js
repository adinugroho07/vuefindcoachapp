export default {
    actionsAddRequests(context, payload) {
        const objAdd = {
            id: new Date().toISOString(),
            coachId: payload.coachId,
            userEmail: payload.userEmail,
            message: payload.message,
            username: payload.username,
            password: payload.password,
        };
        context.commit('addRequest', objAdd);
    }
}