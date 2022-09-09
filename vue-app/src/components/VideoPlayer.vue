<template>
	<div>
		<i @click="onPlay(videoId)" class="fas fa-play"></i>
		<youtube video-id="BBJa32lCaaY" />
	</div>
</template>

<script>

export default {
	name: 'VideoPlayer',
	data() { 
		return {
			videoId: this.$route.params.id,
			playerVars: {autoplay: 1},
			youtubeLink: 'https://www.youtube.com/watch?v=TcMBFSGVi1c'
		} 
	},
	methods: {
		onPlay(id) {
			window.open('https://www.youtube.com/watch?v=' + encodeURI(id))
		}
	}
	
}
</script>

<style scope>

</style>