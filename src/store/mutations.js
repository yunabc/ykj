export default {
  SET_HISTORY: (state, count) => {
    state.history = count;
  },

  SET_LOADING: (state, show) => {
    state.showLoading = show;
  },
  SET_TITLE: (state, title) => {
    state.title = title;
  }
  // SET_PAGE:(state, page) => {
  //   state.page = page
  // },
};
