<template>
    <div class="auth-container">
        <div class="form-container signup-container">
            <form action="#">
                <h1>Sign up</h1>
                <!--
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registration</span>
                -->
                <input type="text" placeholder="Enter username..." />
                <input type="email" placeholder="Enter your email..." />
                <input type="password" placeholder="Enter password..." />
                <input type="password" placeholder="Confirm password..." />
                <button>Sign Up</button>
            </form>
        </div>
    </div>
</template>

<style lang="scss">
@import '../assets/auth.scss';

.signup-container {
	left: 0;
	width: 100%;
	z-index: 1;

    h1 {
        margin-bottom: 15px;
    }
}
</style>