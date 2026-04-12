import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore()
    const publicRoutes = ['/', '/auth/login', '/auth/register', '/about']

    if (!publicRoutes.includes(to.path) && !authStore.isAuthenticated) {
        return navigateTo('/auth/login')
    }

    const authPages = ['/auth/login', '/auth/register']
    if (authPages.includes(to.path) && authStore.isAuthenticated) {
        return navigateTo('/dashboard')
    }
})

