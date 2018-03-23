const state = {
    count : 0
}

const getters = {
    count : state => state.count
}

const actions = {
    increment: ({commit, state}) => {
        state.count++;
    },
    decrement: ({commit, state}) => {
        state.count--;
    }
}

const mutations = {

}

export default {
    state,
    getters,
    actions,
    mutations
}