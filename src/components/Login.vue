<script setup>

</script>

<template>
    
    <div class="auth-container">
        <div class="form-container login-container">
            <form action="#">
                <h1>Log in</h1>
                <!--
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                
                <span>or use your account</span>
                -->
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button>Log In</button>
            </form>
        </div>
    </div>
</template>

<style lang="scss">
@import '../assets/auth.scss';

.login-container {
	left: 0;
	width: 100%;
	z-index: 2;

    h1 {
        margin-bottom: 15px;
    }
}
</style>