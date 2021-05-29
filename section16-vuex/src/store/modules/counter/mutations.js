export default {
  increment(state) {
    state.counter += 2;
  },
  increase(state, payload) {
    console.log(state);
    state.counter += payload.value;
  },
};