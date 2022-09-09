<template>
  <div>
	<VideoPlayer />
    <router-link to="/">Go Back</router-link>
  </div>
</template>

<script>
import VideoPlayer from '../components/VideoPlayer.vue'

export default {
  components: {VideoPlayer},
  name: 'NotFound'
}
</script>
