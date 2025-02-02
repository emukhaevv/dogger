<script lang="ts">
	import { goto } from '$app/navigation';

	type Props = {
		url: string;
		isActive: boolean;
		icon: string;
	};

	const { url, icon, isActive }: Props = $props();
</script>

<div
	class="circle"
	role="button"
	tabindex="0"
	onkeydown={() => {}}
	class:active={isActive}
	onclick={() => goto(url)}
>
	<img alt="" class="icon" src={icon} />
</div>

<style>
	.circle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 46px;
		height: 46px;
		background: #e9edc9;
		border-radius: 50%;
		outline: solid 2px transparent;
		transition: outline 0.4s ease;
	}

	.active {
		outline: solid 2px #fefae0;
	}
</style>
