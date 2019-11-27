const state = {
  user: "",
  toggleSnackbar: false
};

const mutations = {
  setToggleSnackbar: (state, bool) => {
    state.toggleSnackbar = bool;
  }
};
const actions = {};
const getters = {
  user: state => state.user,
  toggleSnackbar: state => state.toggleSnackbar
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
