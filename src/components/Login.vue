<script setup>

</script>

<template>
    
    <div class="auth-container">
        <div class="form-container sign-in-container">
            <form action="#">
                <h1>Sign in</h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button>Sign In</button>
            </form>
        </div>
    </div>
</template>

<style>
.login-container {
    width: 300px;
}
</style>