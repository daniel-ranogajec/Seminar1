<template>
	<form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Search Video</label>
      <input type="title" v-model="title" name="title" placeholder="Search" />
    </div>
    <input type="submit" value="Add Video" class="btn btn-block" />
  </form>
</template>

<script>
export default {
	name: 'AddVideo',
	data() {
		return {
			title: ''
		}
	},
	methods: {
		onSubmit(e) {
			e.preventDefault();
			
			if (this.title) {

				this.$emit('add-video', this.title)
				this.title = ''
			}
		}
	}
} 
</script>