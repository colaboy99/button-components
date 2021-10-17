import { createStore } from 'vuex'

export default createStore({
  state: {
    ActiveComp: 'Buttons',
  },
  mutations: {
    ChangeComp (state, name) {
      state.ActiveComp = name;
    }
  },
  actions: {
  },
  modules: {
  }
})
