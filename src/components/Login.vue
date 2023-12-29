<template>
  <div>
    <div class="form-container">
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="text" name="email" id="email" class="form-control" required v-model="email">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" class="form-control" required v-model="password">
        </div>
        <button type="submit" class="btn btn-md btn-success" @click="login()">Login</button>
    </div>
  </div>
</template>
<script>
import axios from '../../axios';
export default{
    name: "Login",
    data(){
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        async login(){
            try {
                const response = await axios.post('/login', {
                email: this.email,
                password: this.password
            });

            if(response.data.token){
                localStorage.setItem('token', response.data.token);
            }
            this.$store.commit('LOGIN');
            this.$router.push('/');
            } catch (error) {
                console.log(error);
            }
            
        }
    }
}
</script>