import { createStore } from 'vuex'

export default createStore({
  state: {
    ActiveComp: 'Buttons'
  },
  mutations: {
    ChangeComp (state, name) {
      // mutate state
      state.ActiveComp = name;
    }
  },
  actions: {
  },
  modules: {
  }
})
