<script setup>
import { ref, onMounted } from 'vue';
import api from '@/utils/api'

onMounted(async () => {
    console.log('App mounted')
})
</script>

<template>
    <router-view></router-view>
</template>
