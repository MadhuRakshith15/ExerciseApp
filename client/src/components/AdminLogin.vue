<template>
    <div class="vue-template">
       <div class="vertical-center mt-5">
        <div class="inner-block mt-5">
        <form v-on:submit.prevent="login">
            <h3>Admin's Only</h3>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" v-model="email" name="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="password" name="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>


        </form>
        </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {}
        },
    }
</script>