<script lang="ts">
	import dots from '../images/dots.svg';
	import trash from '../images/trash.svg';

	type Props = {
		id: number;
		title: string;
		description: string;
		onDeleteAction: (id: number) => void;
	};

	const { id, title, description, onDeleteAction }: Props = $props();

	let position = $state(233);
	let startedClick = $state(0);
	let isOpened = $state(false);
	let isClicked = $state(false);

	const onTouchDown = (e: TouchEvent) => {
		startedClick = e.changedTouches[0].pageX;
		isClicked = true;
	};

	const onTouchUp = () => {
		isClicked = false;
	};

	const onMove = (e: TouchEvent) => {
		if (!isOpened && startedClick - e.changedTouches[0].pageX >= 100) {
			isOpened = true;
			position = 33;
		}
	};

	const onDeleteEnd = () => {
		setTimeout(() => {
			onDeleteAction(id);
		}, 10);
	};
</script>

<div
	tabindex="0"
	role="button"
	class="content"
	ontouchmove={onMove}
	ontouchend={onTouchUp}
	ontouchstart={onTouchDown}
>
	<div>
		<div class="title">{title}</div>
		<div class="description">{description}</div>
	</div>

	<img src={dots} alt="" />

	<div class="delete" ontransitionend={onDeleteEnd} style="transform: translateX({position}px)">
		<img alt="" src={trash} class="trash" />
	</div>
</div>

<style>
	.content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px 0;
		border-bottom: solid 1px #f2f2f2;
		position: relative;
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

	.delete {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 200px;
		height: 100%;
		right: 0;
		position: absolute;
		transform: translateX(233px);
		background-color: #e2917f;
		transition: transform ease 0.4s;
		border-radius: 14px 0 0 14px;
	}
</style>
