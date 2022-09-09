<template>
	<div class="video" v-on:dblclick="onDoubleClick(video.id)">
		<img :src="video.thumbnail"/>
		<h3>
			{{ video.title }}
			<i @click="onDelete(video.id)" class="fa fa-times"></i>
		</h3>
		<i class="fas fa-play" @click="onPlay(video.id)"></i>

	</div>
</template>

<script>
export default {
	name: 'Video',
	props: {
		video: Object
	},
	methods: {
		onDelete(id) {
			this.$emit('delete-video', id)
		},
		onPlay(id) {
			this.$router.push({path: `/video/${id}`})
		}
	}
}
</script>

<style scope>

</style>