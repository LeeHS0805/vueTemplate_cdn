Vue.use(VueRouter)
const routes = [
    // {
    //     path: '',
    //     name: '',
    //     component:() => import('')
    // }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to,from,next)=>{
    next()
})

export default router
