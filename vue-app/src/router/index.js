import { createRouter, createWebHistory } from 'vue-router'
import VideoPlayer from '../views/VideoPlayer'
import MainPage from '../views/MainPage'
import NotFound from '../views/NotFound'

const routes = [
	{
		path: '/',
		name: 'Mainpage',
		component: MainPage
	},
	{
		path: '/video/:id',
		name: 'VideoPlayer',
		component: VideoPlayer
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFound,
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL), routes
})

export default router;