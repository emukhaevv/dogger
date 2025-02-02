<script lang="ts">
	import dots from '../images/dots.svg';

	type Props = {
		title: string;
		description: string;
	};

	const { title, description }: Props = $props();
</script>

<div class="content">
	<div>
		<div class="title">{title}</div>
		<div class="description">{description}</div>
	</div>

	<img src={dots} alt="" />
</div>

<style>
	.content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px 0;
		border-bottom: solid 1px #f2f2f2;
	}

	.title {
		font-size: 16px;
		font-weight: 500;
		margin-bottom: 1px;
	}

	.description {
		color: #999999;
		font-size: 13px;
	}
</style>
