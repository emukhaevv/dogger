<script lang="ts">
	import { AUTO_POSITION, END_POSITION, START_POSITION } from '../constants';
	import dots from '../images/dots.svg';
	import trash from '../images/trash.svg';

	type Props = {
		id: number;
		title: string;
		description: string;
		onDelete: (id: number) => void;
	};

	const { id, title, description, onDelete }: Props = $props();

	let startedSlideClick = $state(0);
	let position = $state(START_POSITION);
	let startedPosition = $state(START_POSITION);

	let isClicked = $state(false);
	let isBlocked = $state(false);

	const onTouchDown = (e: TouchEvent) => {
		if (isBlocked) return;

		isClicked = true;

		startedSlideClick = e.changedTouches[0].pageX;
		startedPosition = position === START_POSITION ? START_POSITION : END_POSITION;
	};

	const onTouchUp = () => {
		if (isClicked) {
			if (position <= AUTO_POSITION) {
				position = END_POSITION;
				isBlocked = true;
			} else {
				position = START_POSITION;
			}
		}

		isClicked = false;
	};

	const onMove = (e: TouchEvent) => {
		if (isBlocked) return;

		const positionDifference = startedSlideClick - e.changedTouches[0].pageX;
		const updatedPosition = startedPosition - positionDifference;

		if (updatedPosition < END_POSITION) return;
		position = updatedPosition;
	};

	const onDeleteEnd = () => {
		if (position > END_POSITION) return;

		setTimeout(() => {
			onDelete(id);
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

	<div
		class="delete"
		ontransitionend={onDeleteEnd}
		class:delete-animation={!isClicked}
		style="transform: translateX({position}px)"
	>
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
		border-radius: 14px 0 0 14px;
	}

	.delete-animation {
		transition: transform ease 0.4s;
	}
</style>
