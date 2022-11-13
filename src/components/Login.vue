<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import api from '@/utils/api'

// reactive state
const form = ref({
    email: '',
    password: '',
})
const $route = useRoute()

async function onSubmit() {
    const { data } = await api.post('/login', form.value)
    console.log(data)
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${form.value}.`)
  console.log($route.query)
})
</script>

<template>
    
    <div class="auth-container">
        <div class="form-container login-container">
            <form @submit.prevent="onSubmit" action="#">
                <h1>Log in</h1>
                <!--
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                
                <span>or use your account</span>
                -->
                <input 
                    type="email" 
                    placeholder="Email"
                    v-model="form.email" />
        
                <input 
                    type="password" 
                    placeholder="Password" 
                    v-model="form.password" />

                <a href="#">Forgot your password?</a>
                
                <button type="submit">Log In</button>
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