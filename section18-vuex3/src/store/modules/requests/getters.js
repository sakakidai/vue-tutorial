export default {
  requests(state, _, _2, rootGetters) {
    const coachId = rootGetters.userId;
    return state.requests.filter(req => req.coachId === coachId);
  },
  hasRequests(_, getters) {
    const requests = getters.requests;
    return requests && requests.length > 0;
  }
};