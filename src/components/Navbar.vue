<template>
   <div>
    <nav>
        <router-link to="/login" v-if="!isLoggedIn">Login</router-link>
        <router-link to="/register" v-if="!isLoggedIn">Register</router-link>
        <a href="#" @click="logout" v-if="isLoggedIn">Logout</a>
    </nav>
   </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default{
    name: "Navbar",
    computed: {
        ...mapState(['isLoggedIn'])
    },
    methods: {
        ...mapActions(['logout'])
    }
}
</script>