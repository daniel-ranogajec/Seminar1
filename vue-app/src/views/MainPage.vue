<template>
	<AddVideo @add-video="addVideo"/>
    <Videos :videos="videos" @delete-video="deleteVideo" />
</template>

<script>
import Videos from '../components/Videos.vue'
import AddVideo from '../components/AddVideo.vue'

export default {
	name: 'Mainpage',
	components: {
		Videos,
		AddVideo
	},
	data() {
		return {
			videos: []
		}
	},
	methods: {
		async deleteVideo(id) {
			const data = {"id": id}
			await fetch('https://youtube-list-api.herokuapp.com/remove', {
				method: 'POST',
				headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})    
		this.videos = this.videos.filter((video) => video.id !== id)
		},


		async addVideo(title) {
		const data = {"Title": title}

		const res = await fetch('https://youtube-list-api.herokuapp.com/search', {
			method: 'POST',
			headers: {
			'Content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})

		const res_data = await res.json()

		this.videos = [...this.videos, res_data]
		},
		async fetchVideos() {
		const res = await fetch('https://youtube-list-api.herokuapp.com/')
		return res.json()
		}
	},
	async created() {
		this.videos = await this.fetchVideos()
	}
}
</script>