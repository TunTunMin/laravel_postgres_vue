import { createStore } from "vuex";

import router from "./router";

const store = createStore({
    state: {
        isLoggedIn: !!localStorage.getItem('token')
    },
    mutations:{
        LOGIN(state){
            state.isLoggedIn = true;
        },
        LOGOUT(state){
            state.isLoggedIn = false;
        }
    },
    actions: {
        login({commit}){
            commit('LOGIN')
        },
        logout({commit, dispatch}){
            commit('LOGOUT')
            dispatch('navigateToLogin')
        },
        navigateToLogin(){
            localStorage.removeItem('token');
            router.push({path: '/login'})
        }
    }
})

export default store;