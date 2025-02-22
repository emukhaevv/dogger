<script>
	import '../styles/normolize.css';
	import '../styles/style.css';
	import Navigation from '../components/Navigation/Navigation.svelte';
</script>

<div class="wrapper">
	<div class="content">
		<slot />
	</div>
</div>

<Navigation />

<style>
	.wrapper {
		overflow: hidden;
	}
	.content {
		padding: 40px 0;
	}
</style>
