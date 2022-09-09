<template>
	<div :key="video.id" v-for="video in videos">
		<Video :video="video" @delete-video="onDelete(video.id)" />
	</div>
</template>

<script>
import Video from './Video.vue'

export default {
	name: 'Videos',
	props: {
		videos: Array
	},
	components: {
		Video
	},
	methods: {
		onDelete(id) {
			this.$emit('delete-video', id)
		}
	},
	emits: ['delete-video']

}
</script>