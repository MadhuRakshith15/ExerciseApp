<template>
    <div class="vue-template">
        <div class="inner-block">
            <div class="vertical-center">
        <form>
            <h3>Sign Up</h3>

            <div class="form-group">
                <label>Full Name</label>
                <input type="text" class="form-control form-control-lg"/>
            </div>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Age</label>
                <input type="number" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Weight</label>
                <input type="number" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Height</label>
                <input type="number" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

            <p class="forgot-password text-right">
                Already registered 
                <router-link :to="{name: 'login'}">sign in?</router-link>
            </p>
        </form>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>