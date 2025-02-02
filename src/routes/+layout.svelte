<script>
	import '../style.css';
	import Navigation from '../components/Navigation/Navigation.svelte';
</script>

<div class="content">
	<slot />
</div>

<Navigation />

<style>
	.content {
		padding: 40px 30px;
	}
</style>
