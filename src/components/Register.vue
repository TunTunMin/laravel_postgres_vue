<template>
    <div class="form-container">
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="text" name="email" id="email" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-md btn-success" onclick="login()">Login</button>
    </div>
</template>
<script>
import axios from 'axios';
export default{
    data(){
        return {
            name: "",
            email: "",
            password: ""
        }
    },
    methods:{
        async submit(){

        }
    }
}
</script>